import React, { useState, useEffect, useMemo, memo } from 'react';
import { Box, Typography, Container, Chip, Skeleton } from '@mui/material';
import { ScrollScatter } from '../ui/ScrollScatter';
import { useThemeColors } from '../../hooks/useThemeColors';

interface ContributionDay {
  date: string;
  count: number;
  level: number; // 0-4
}

const GITHUB_USERNAME = 'veeru2005';

const getContributionColor = (level: number, isDark: boolean): string => {
  if (isDark) {
    const colors = [
      'rgba(255,255,255,0.04)',
      'rgba(255,159,26,0.22)',
      'rgba(255,159,26,0.42)',
      'rgba(255,159,26,0.68)',
      '#ff9f1a',
    ];
    return colors[level] || colors[0];
  }
  const colors = [
    'rgba(0,0,0,0.05)',
    'rgba(232,138,0,0.22)',
    'rgba(232,138,0,0.42)',
    'rgba(232,138,0,0.68)',
    '#e88a00',
  ];
  return colors[level] || colors[0];
};

// Fetch from GitHub's own contributions HTML page (most accurate, same as profile)
const fetchFromGitHubPage = async (): Promise<{days: ContributionDay[], totalFromPage: number}> => {
  const response = await fetch(
    `https://github.com/users/${GITHUB_USERNAME}/contributions`
  );
  if (!response.ok) throw new Error('GitHub page fetch failed');
  const html = await response.text();

  // Extract total from the h2 text: "648 contributions in the last year"
  const totalMatch = html.match(/(\d[\d,]*)\s+contributions?\s+in the last year/i);
  const totalFromPage = totalMatch ? parseInt(totalMatch[1].replace(/,/g, ''), 10) : 0;

  const days: ContributionDay[] = [];

  // Parse the SVG contribution calendar
  // GitHub uses: data-date="YYYY-MM-DD" data-level="0-4"
  // The format may also include data-count
  const cellRegex = /data-date="(\d{4}-\d{2}-\d{2})"[^>]*?data-level="(\d)"(?:[^>]*?data-count="(\d+)")?/g;
  let match;
  while ((match = cellRegex.exec(html)) !== null) {
    days.push({
      date: match[1],
      count: match[3] ? parseInt(match[3], 10) : parseInt(match[2], 10) * 2,
      level: parseInt(match[2], 10),
    });
  }

  if (days.length === 0) throw new Error('No contribution data parsed from GitHub page');
  return { days, totalFromPage };
};

// Fallback: jogruber API
const fetchFromJogruberAPI = async (): Promise<{days: ContributionDay[], totalFromPage: number}> => {
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=last`
  );
  if (!response.ok) throw new Error('API fetch failed');
  const data = await response.json();

  const days: ContributionDay[] = [];
  const totalFromPage = data.total?.lastYear || 0;

  if (data.contributions && Array.isArray(data.contributions)) {
    data.contributions.forEach((item: any) => {
      days.push({
        date: item.date,
        count: item.count || 0,
        level: item.level || 0,
      });
    });
  }

  return { days: days.slice(-365), totalFromPage };
};

const fetchContributions = async (): Promise<{days: ContributionDay[], totalFromPage: number}> => {
  // Try GitHub page first, fallback to jogruber
  try {
    return await fetchFromGitHubPage();
  } catch {
    try {
      return await fetchFromJogruberAPI();
    } catch {
      return { days: [], totalFromPage: 0 };
    }
  }
};

// Memoized contribution cell to avoid unnecessary re-renders
const ContribCell = memo(({ day, isDark, loading }: { day: ContributionDay; isDark: boolean; loading: boolean }) => (
  <Box
    role="gridcell"
    aria-label={day.date ? `${day.count} contributions on ${day.date}` : undefined}
    sx={{
      width: 11,
      height: 11,
      borderRadius: '2px',
      bgcolor: loading
        ? (isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)')
        : getContributionColor(day.level, isDark),
      transition: 'transform 0.12s ease',
      cursor: day.date ? 'pointer' : 'default',
      '&:hover': day.date
        ? {
            transform: 'scale(1.5)',
            zIndex: 1,
          }
        : {},
    }}
  />
));
ContribCell.displayName = 'ContribCell';

const GitHubActivity: React.FC = () => {
  const [contributions, setContributions] = useState<ContributionDay[]>([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ total: 0, streak: 0, maxStreak: 0 });
  const c = useThemeColors();

  useEffect(() => {
    fetchContributions().then(({ days, totalFromPage }) => {
      setContributions(days);
      
      // Use the total from the page/API directly — most accurate
      if (days.length > 0) {
        let currentStreak = 0;
        let maxStreak = 0;

        // Calculate streak from end (skip today if 0)
        const today = new Date().toISOString().split('T')[0];
        let startIdx = days.length - 1;
        if (days[startIdx]?.date === today && days[startIdx]?.count === 0) {
          startIdx--;
        }
        for (let i = startIdx; i >= 0; i--) {
          if (days[i].count > 0) {
            currentStreak++;
          } else {
            break;
          }
        }

        // Calculate overall max streak
        let tempStreak = 0;
        days.forEach((d) => {
          if (d.count > 0) {
            tempStreak++;
            maxStreak = Math.max(maxStreak, tempStreak);
          } else {
            tempStreak = 0;
          }
        });

        // Use page total if available, otherwise sum from days
        const total = totalFromPage > 0 ? totalFromPage : days.reduce((s, d) => s + d.count, 0);
        setStats({ total, streak: currentStreak, maxStreak });
      }
      setLoading(false);
    });
  }, []);

  // Build the grid: ~53 columns × 7 rows
  const weeks = useMemo(() => {
    if (contributions.length === 0) return [];

    // Pad to start on a Sunday
    const firstDate = new Date(contributions[0]?.date);
    const startDay = firstDate.getDay();
    const padded = [
      ...Array(startDay).fill({ date: '', count: 0, level: 0 }),
      ...contributions,
    ];

    const result: ContributionDay[][] = [];
    for (let w = 0; w < Math.ceil(padded.length / 7); w++) {
      const week: ContributionDay[] = [];
      for (let d = 0; d < 7; d++) {
        const idx = w * 7 + d;
        week.push(padded[idx] || { date: '', count: 0, level: 0 });
      }
      result.push(week);
    }
    return result;
  }, [contributions]);

  const months = useMemo(() => {
    const labels: { label: string; col: number }[] = [];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let lastMonth = -1;

    weeks.forEach((week, colIndex) => {
      const firstDay = week.find((d) => d.date);
      if (firstDay && firstDay.date) {
        const month = new Date(firstDay.date).getMonth();
        if (month !== lastMonth) {
          labels.push({ label: monthNames[month], col: colIndex });
          lastMonth = month;
        }
      }
    });

    return labels;
  }, [weeks]);

  return (
    <Box
      id="github"
      component="section"
      aria-label="GitHub Activity"
      sx={{
        py: { xs: 5, md: 6 },
        position: 'relative',
        background: c.sectionBg,
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <ScrollScatter direction="up" distance={100}>
          <Box>
            <Typography
              component="p"
              sx={{
                color: c.accent,
                textTransform: 'uppercase',
                letterSpacing: '0.11em',
                fontSize: '0.72rem',
                fontWeight: 700,
                textAlign: 'center',
                mb: 1,
              }}
            >
              Open Source
            </Typography>

            <Typography
              variant="h3"
              component="h2"
              align="center"
              fontWeight={800}
              sx={{ mb: 1.4, color: c.textPrimary }}
            >
              GitHub Activity
            </Typography>

            <Typography
              align="center"
              sx={{ mb: 5, maxWidth: 650, mx: 'auto', color: c.textSecondary }}
            >
              Real-time contribution data fetched directly from my GitHub profile.
            </Typography>
          </Box>
        </ScrollScatter>

        <ScrollScatter direction="up" distance={150}>
          <Box
            sx={{
              borderRadius: '16px',
              border: `1px solid ${c.accent}`,
              background: c.cardBg,
              p: { xs: 2, md: 3.5 },
              boxShadow: c.cardShadow,
            }}
          >
            {/* Stats Row */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', sm: 'repeat(3, 1fr)' },
                gap: { xs: 1.2, md: 3 },
                mb: 3,
              }}
            >
              {[
                { label: 'Contributions (last year)', value: stats.total || '—' },
                { label: 'Current Streak', value: stats.streak ? `${stats.streak} days` : '—' },
                { label: 'Best Streak', value: stats.maxStreak ? `${stats.maxStreak} days` : '—' },
              ].map((stat, index) => (
                <Box
                  key={stat.label}
                  sx={{
                    px: { xs: 1.6, md: 2.5 },
                    py: 1.4,
                    borderRadius: '12px',
                    bgcolor: c.accentBg,
                    border: `1px solid ${c.accentBorder}`,
                    textAlign: 'center',
                    width: '100%',
                    minWidth: 0,
                    gridColumn: { xs: index === 2 ? 'span 2' : 'auto', sm: 'auto' },
                  }}
                >
                  <Typography sx={{ color: c.accent, fontWeight: 800, fontSize: { xs: '1.15rem', md: '1.3rem' } }}>
                    {loading ? <Skeleton width={40} /> : stat.value}
                  </Typography>
                  <Typography sx={{ color: c.textSecondary, fontSize: { xs: '0.68rem', sm: '0.78rem' }, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {stat.label}
                  </Typography>
                </Box>
              ))}
            </Box>

            {/* Scrollable Graph Container */}
            <Box
              sx={{
                width: '100%',
                overflowX: 'auto',
                overflowY: 'hidden',
                WebkitOverflowScrolling: 'touch',
                '&::-webkit-scrollbar': { display: 'none' },
                scrollbarWidth: 'none',
              }}
            >
              <Box sx={{ minWidth: 720, pb: 1 }}>
                {/* Month Labels */}
                <Box
                  sx={{
                    display: 'flex',
                    gap: '3px',
                    pl: '28px',
                    mb: 0.5,
                    overflow: 'hidden',
                    position: 'relative',
                    height: 16,
                  }}
                >
                  {months.map((m, i) => (
                    <Typography
                      key={i}
                      component="span"
                      aria-hidden
                      sx={{
                        position: 'absolute',
                        left: `${m.col * (11 + 3)}px`,
                        color: c.textMuted,
                        fontSize: '0.65rem',
                        fontWeight: 600,
                      }}
                    >
                      {m.label}
                    </Typography>
                  ))}
                </Box>

                {/* Contribution Grid */}
                <Box
                  role="grid"
                  aria-label="Contribution calendar"
                  sx={{
                    display: 'flex',
                    gap: '3px',
                    pt: 0.5,
                  }}
                >
                  {/* Day Labels */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3px', mr: 0.5, flexShrink: 0 }}>
                    {['', 'Mon', '', 'Wed', '', 'Fri', ''].map((day, i) => (
                      <Typography
                        key={i}
                        component="span"
                        aria-hidden
                        sx={{
                          width: 22,
                          height: 11,
                          fontSize: '0.58rem',
                          color: c.textMuted,
                          display: 'flex',
                          alignItems: 'center',
                          fontWeight: 600,
                        }}
                      >
                        {day}
                      </Typography>
                    ))}
                  </Box>

                  {/* Weeks */}
                  {weeks.map((week, wIdx) => (
                    <Box
                      key={wIdx}
                      role="row"
                      sx={{ display: 'flex', flexDirection: 'column', gap: '3px', flexShrink: 0 }}
                    >
                      {week.map((day, dIdx) => (
                        <ContribCell
                          key={`${wIdx}-${dIdx}`}
                          day={day}
                          isDark={c.isDark}
                          loading={loading}
                        />
                      ))}
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Legend */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                gap: 0.5,
                mt: 1.5,
              }}
            >
              <Typography component="span" sx={{ color: c.textMuted, fontSize: '0.68rem', mr: 0.5 }}>Less</Typography>
              {[0, 1, 2, 3, 4].map((level) => (
                <Box
                  key={level}
                  sx={{
                    width: 11,
                    height: 11,
                    borderRadius: '2px',
                    bgcolor: getContributionColor(level, c.isDark),
                  }}
                />
              ))}
              <Typography component="span" sx={{ color: c.textMuted, fontSize: '0.68rem', ml: 0.5 }}>More</Typography>
            </Box>

            {/* GitHub Link */}
            <Box sx={{ mt: 2, textAlign: 'center' }}>
              <Chip
                component="a"
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                label={`@${GITHUB_USERNAME} on GitHub`}
                clickable
                sx={{
                  bgcolor: c.accentBg,
                  color: c.accent,
                  fontWeight: 600,
                  fontSize: '0.82rem',
                  borderRadius: '8px',
                  border: `1px solid ${c.accentBorder}`,
                  '&:hover': {
                    bgcolor: c.accentBgHover,
                  },
                }}
              />
            </Box>
          </Box>
        </ScrollScatter>
      </Container>
    </Box>
  );
};

export default GitHubActivity;
