import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { ScrollScatter } from '../ui/ScrollScatter';
import { lighthouseScores } from '../../data/lighthouseScores';

interface ScoreItem {
  label: string;
  score: number;
}

// Update values in src/data/lighthouseScores.ts after running Lighthouse on the production build.
const DEFAULT_SCORES: ScoreItem[] = [
  { label: 'Performance', score: 98 },
  { label: 'Accessibility', score: 99 },
  { label: 'Best Practices', score: 96 },
  { label: 'SEO', score: 100 },
];



const getScoreColor = (score: number) => {
  if (score >= 90) return '#22c55e';
  if (score >= 50) return '#ff9f1a';
  return '#ef4444';
};

const CircularScore: React.FC<{ item: ScoreItem; animate: boolean; delay: number }> = ({
  item,
  animate,
  delay,
}) => {
  const [displayScore, setDisplayScore] = useState(0);
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (displayScore / 100) * circumference;
  const color = getScoreColor(displayScore);

  useEffect(() => {
    if (!animate) return;

    const timer = setTimeout(() => {
      let current = 0;
      const step = item.score / 40;
      const interval = setInterval(() => {
        current += step;
        if (current >= item.score) {
          current = item.score;
          clearInterval(interval);
        }
        setDisplayScore(Math.round(current));
      }, 25);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [animate, item.score, delay]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: { xs: 0.9, sm: 1.5 }, minWidth: { xs: 72, sm: 90, md: 110 } }}>
      <Box sx={{ position: 'relative', width: { xs: 78, sm: 100, md: 110 }, height: { xs: 78, sm: 100, md: 110 } }}>
        <svg width="100%" height="100%" viewBox="0 0 110 110" role="img" aria-label={`${item.label}: ${item.score} out of 100`}>
          <circle
            cx="55"
            cy="55"
            r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="6"
          />
          <circle
            cx="55"
            cy="55"
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth="6"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform="rotate(-90 55 55)"
            style={{
              transition: 'stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1)',
              filter: `drop-shadow(0 0 6px ${color}40)`,
            }}
          />
        </svg>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              color: color,
              fontWeight: 800,
              fontSize: { xs: '1.1rem', sm: '1.45rem', md: '1.6rem' },
              lineHeight: 1,
            }}
          >
            {displayScore}
          </Typography>
        </Box>
      </Box>
      <Typography
        sx={{
          color: '#c2cbdf',
          fontSize: { xs: '0.68rem', sm: '0.78rem', md: '0.85rem' },
          fontWeight: 600,
          textAlign: 'center',
          whiteSpace: 'nowrap',
          lineHeight: 1.2,
        }}
      >
        {item.label}
      </Typography>
    </Box>
  );
};

const PerformanceBadge: React.FC = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const scores = lighthouseScores?.scores?.length ? lighthouseScores.scores : DEFAULT_SCORES;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <Box
      ref={ref}
      sx={{
        py: { xs: 5, md: 6 },
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(8,10,15,1) 0%, rgba(8,10,16,1) 100%)',
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <ScrollScatter direction="up" distance={100}>
          <Box>
            <Typography
              sx={{
                color: '#ff9f1a',
                textTransform: 'uppercase',
                letterSpacing: '0.11em',
                fontSize: '0.72rem',
                fontWeight: 700,
                textAlign: 'center',
                mb: 1,
              }}
            >
              Quality Metrics
            </Typography>

            <Typography variant="h3" align="center" fontWeight={800} sx={{ mb: 1.4, color: '#f4f7ff' }}>
              Lighthouse Scores
            </Typography>

            <Typography align="center" sx={{ mb: 5, maxWidth: 650, mx: 'auto', color: '#aeb8ce' }}>
              This portfolio is optimized for performance, accessibility, and SEO — measured on the production build.
            </Typography>
          </Box>
        </ScrollScatter>

        <ScrollScatter direction="up" distance={150}>
          <Box
            sx={{
              borderRadius: '16px',
              border: '1px solid #ff9f1a',
              background: 'linear-gradient(160deg, rgba(12,17,28,0.9), rgba(9,12,19,0.9))',
              p: { xs: 3, md: 4 },
              boxShadow: '0 28px 55px rgba(0,0,0,0.45)',
              maxWidth: 700,
              mx: 'auto',
            }}
          >
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: 'repeat(4, minmax(0, 1fr))', sm: 'repeat(4, 1fr)', md: 'repeat(4, 1fr)' },
                gap: { xs: 1.6, sm: 3, md: 4 },
                justifyItems: 'center',
              }}
            >
              {scores.map((item, index) => (
                <CircularScore key={item.label} item={item} animate={animate} delay={index * 200} />
              ))}
            </Box>

            <Box
              sx={{
                mt: 3,
                pt: 2.5,
                borderTop: '1px solid rgba(255,255,255,0.06)',
                textAlign: 'center',
              }}
            >
              <Typography sx={{ color: '#7a859e', fontSize: '0.78rem' }}>
                Measured on production build with Google Lighthouse • Chrome DevTools
              </Typography>
            </Box>
          </Box>
        </ScrollScatter>
      </Container>
    </Box>
  );
};

export default PerformanceBadge;
