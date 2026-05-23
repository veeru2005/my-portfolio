import React from 'react';
import { Box, Typography, Container, Card, CardContent, Chip } from '@mui/material';
import { ScrollScatter } from '../ui/ScrollScatter';
import { useThemeColors } from '../../hooks/useThemeColors';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  emoji: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'How I Built a Production E-Commerce Platform from Scratch',
    excerpt:
      'From zero to live orders — the full story of building Fresco Organic. How I handled product catalogs, coupon engines, COD-only checkout, and what I learned about working with a real client who had very specific requirements.',
    category: 'Full-Stack',
    readTime: '8 min read',
    date: 'May 2026',
    emoji: '🛒',
  },
  {
    id: 2,
    title: 'Deploying Full-Stack Apps with CI/CD: Lessons from 3 Live Projects',
    excerpt:
      'A practical guide based on my experience deploying React + Node.js applications. Covering Vercel, environment variables, MongoDB Atlas connections, domain setup, and the deployment mistakes that cost me hours of debugging.',
    category: 'DevOps',
    readTime: '6 min read',
    date: 'Apr 2026',
    emoji: '🚀',
  },
  {
    id: 3,
    title: 'What I Learned Building Websites for University Clubs',
    excerpt:
      'Building for KLU Esports and VIDHURA AI Club taught me that user research matters more than tech stack decisions. How I handled scope creep, non-technical stakeholders, and the pressure of launching before event deadlines.',
    category: 'Product Thinking',
    readTime: '5 min read',
    date: 'Mar 2026',
    emoji: '🎓',
  },
];

const Blog: React.FC = () => {
  const c = useThemeColors();
  const getCardTransform = (index: number) => {
    const col = index % 3;
    if (col === 0) return 'perspective(1000px) rotateY(8deg) rotateX(3deg)';
    if (col === 1) return 'perspective(1000px) rotateY(0deg) rotateX(3deg)';
    return 'perspective(1000px) rotateY(-8deg) rotateX(3deg)';
  };

  return (
    <Box
      id="blog"
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
              Insights
            </Typography>

            <Typography variant="h3" align="center" fontWeight={800} sx={{ mb: 1.4, color: c.textPrimary }}>
              Blog & Writing
            </Typography>

            <Typography align="center" sx={{ mb: 5, maxWidth: 650, mx: 'auto', color: c.textSecondary }}>
              Sharing practical lessons from real projects — the problems I faced, the decisions I made, and what I'd do differently.
            </Typography>
          </Box>
        </ScrollScatter>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' },
            gap: 2.3,
          }}
        >
          {BLOG_POSTS.map((post, index) => (
            <ScrollScatter
              key={post.id}
              direction={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'up' : 'right'}
              distance={200}
            >
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  border: `1px solid ${c.accent}`,
                  background: c.cardBg,
                  p: { xs: 1.5, md: 2 },
                  boxShadow: c.cardShadow,
                  transform: { md: getCardTransform(index) },
                  transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: { md: 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(-6px)' },
                  },
                }}
              >
                {/* Emoji Header */}
                <Box
                  sx={{
                    height: 120,
                    borderRadius: '12px',
                    bgcolor: 'rgba(255,159,26,0.06)',
                    border: '1px solid rgba(255,159,26,0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '3rem',
                    mb: 1,
                  }}
                >
                  {post.emoji}
                </Box>

                <CardContent sx={{ flexGrow: 1, p: 2, px: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.5 }}>
                    <Chip
                      label={post.category}
                      size="small"
                      sx={{
                        bgcolor: 'rgba(255,159,26,0.16)',
                        color: '#ff9f1a',
                        fontWeight: 600,
                        fontSize: '0.7rem',
                        borderRadius: '6px',
                      }}
                    />
                    <Typography sx={{ color: '#7a859e', fontSize: '0.75rem' }}>
                      {post.readTime}
                    </Typography>
                  </Box>

                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      color: c.textOnCard,
                      mb: 1.5,
                      lineHeight: 1.35,
                      fontSize: '1.05rem',
                    }}
                  >
                    {post.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{
                      color: c.textSecondary,
                      lineHeight: 1.75,
                      display: '-webkit-box',
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {post.excerpt}
                  </Typography>
                </CardContent>

                <Box sx={{ px: 1, pb: 1 }}>
                  <Typography
                    sx={{
                      color: '#7a859e',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                    }}
                  >
                    {post.date}
                  </Typography>
                </Box>
              </Card>
            </ScrollScatter>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Blog;
