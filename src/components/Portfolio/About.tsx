import React from 'react';
import { Box, Typography, Container, Card, CardContent, Chip } from '@mui/material';
import { ScrollScatter } from '../ui/ScrollScatter';
import { useThemeColors } from '../../hooks/useThemeColors';


const About: React.FC = () => {
  const c = useThemeColors();
  const getCardTransform = (index: number) => {
    const col = index % 3;
    if (col === 0) return 'perspective(1000px) rotateY(8deg) rotateX(3deg)';
    if (col === 1) return 'perspective(1000px) rotateY(0deg) rotateX(3deg)';
    return 'perspective(1000px) rotateY(-8deg) rotateX(3deg)';
  };

  const expertiseCards = [
    {
      title: 'Cloud-Native Engineering',
      description:
        'I architect scalable serverless and microservices applications using AWS, Azure, and Spring Boot.'
    },
    {
      title: 'Full-Stack Development',
      description:
        'Building robust, responsive applications across the MERN stack and Spring ecosystem from database to UI.'
    },
    {
      title: 'DevOps & CI/CD Pipelines',
      description:
        'Automating deployments and infrastructure with Docker, Kubernetes, and GitHub Actions for continuous delivery.'
    }
  ];

  const skillCategories = [
    {
      name: 'Languages',
      skills: ['C', 'Java', 'JavaScript', 'TypeScript']
    },
    {
      name: 'Frameworks & Libraries',
      skills: ['React', 'Vite', 'Tailwind CSS', 'Spring Boot', 'Node.js', 'Express.js']
    },
    {
      name: 'Cloud & DevOps',
      skills: ['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Azure', 'GCP', 'CI/CD', 'GitHub Actions']
    },
    {
      name: 'Databases',
      skills: ['MongoDB', 'MySQL']
    },
    {
      name: 'Design & Tools',
      skills: ['UI/UX', 'Canva', 'Adobe Photoshop', 'Adobe Premiere Pro', 'DaVinci Resolve']
    }
  ];

  return (
    <Box
      id="about"
      sx={{
        pt: { xs: 5, md: 6 }, pb: { xs: 1, md: 2 },
        position: 'relative',
        background: c.sectionBg
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.34
        }}
      />
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
              mb: 1
            }}
          >
            Introduction
          </Typography>

          <Typography variant="h3" align="center" fontWeight={800} sx={{ mb: 1.4, color: c.textPrimary }}>
            About Me
          </Typography>
          
          <Typography align="center" sx={{ mb: 6, maxWidth: 640, mx: 'auto', color: c.textSecondary }}>
            Exploring my technical background, core philosophies, and what drives my development approach.
          </Typography>
        </Box>
      </ScrollScatter>

        <Box
          sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.08fr 0.92fr' }, gap: { xs: 3, md: 4.5 }, mb: 6, alignItems: 'stretch' }}
        >
          <ScrollScatter direction="left" distance={250}>
            <Card
              sx={{
                borderRadius: '16px',
                border: `1px solid ${c.accent}`,
                background: c.cardBg,
                p: { xs: 1.5, md: 2 },
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: c.cardShadow,
              }}
            >
              <CardContent sx={{ p: { xs: 2.8, md: 3.4 } }}>
                <Typography
                  variant="h3"
                  sx={{
                    color: c.textPrimary,
                    mb: 2,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    lineHeight: 1.1
                  }}
                >
                  Cloud-driven mindset,
                  <Box component="span" className="accent-gradient-text" sx={{ display: 'block', mt: 0.5 }}>
                    full-stack execution.
                  </Box>
                </Typography>

                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.85, color: c.textSecondary }}>
                  I am a disciplined problem-solver focused on building scalable applications. My expertise spans across
                  frontend technologies, backend microservices, and robust cloud deployments.
                </Typography>

                <Typography variant="body1" sx={{ lineHeight: 1.85, color: c.textSecondary }}>
                  Specializing in Cloud Native Software Engineering at KL University, I take ownership of projects from
                  conception to deployment. Today, I focus on delivering high-quality, production-ready systems using modern DevOps practices.
                </Typography>

                <Box sx={{ mt: 2.4, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Chip label="Cloud & DevOps" sx={{ bgcolor: c.accentBg, color: c.accent, borderRadius: '6px' }} />
                  <Chip label="MERN & Spring Boot" sx={{ bgcolor: c.accentBg, color: c.accent, borderRadius: '6px' }} />
                  <Chip label="Scalable Architecture" sx={{ bgcolor: c.accentBg, color: c.accent, borderRadius: '6px' }} />
                </Box>
              </CardContent>
            </Card>
          </ScrollScatter>

          <ScrollScatter direction="right" distance={250}>
            <Card
              sx={{
                borderRadius: '16px',
                position: 'relative',
                overflow: 'hidden',
                border: `1px solid ${c.accent}`,
                background: c.cardBg,
                p: { xs: 1.5, md: 2 },
                minHeight: '100%',
                boxShadow: c.cardShadow,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardContent sx={{ p: { xs: 2.8, md: 3.4 }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <Typography sx={{ color: c.textPrimary, fontWeight: 700, mb: 1.2 }}>Core strengths</Typography>

                <Box sx={{ display: 'grid', gap: 1.2, mb: 3 }}>
                  {[
                    'End-to-end full-stack development (React, Spring Boot)',
                    'Cloud infrastructure & serverless architecture (AWS, Azure)',
                    'Automated CI/CD pipelines and containerization (Docker)',
                    'Strong foundation in Data Structures & Algorithms'
                  ].map((point) => (
                    <Box key={point} sx={{ display: 'flex', gap: 1.2, alignItems: 'flex-start' }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: c.accent,
                          mt: '8px',
                          flexShrink: 0
                        }}
                      />
                      <Typography sx={{ color: c.textSecondary, lineHeight: 1.7 }}>{point}</Typography>
                    </Box>
                  ))}
                </Box>

                <Box
                  sx={{
                    mt: 'auto',
                    p: 2,
                    borderRadius: '16px',
                    background: c.highlightBg,
                    border: `1px solid ${c.accent}`
                  }}
                >
                  <Typography sx={{ color: c.textPrimary, fontWeight: 700, mb: 0.4 }}>Goal</Typography>
                  <Typography sx={{ color: c.textSecondary, lineHeight: 1.7 }}>
                    Build scalable, high-performance software systems leveraging modern cloud native technologies and best engineering practices.
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </ScrollScatter>
        </Box>

        <Box 
          sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 2.2, mb: 5 }}
        >
          {expertiseCards.map((item, index) => (
            <ScrollScatter
              key={item.title}
              direction={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"}
              distance={200}
            >
              <Box sx={{ height: '100%' }}>
                <Card
                  sx={{
                    borderRadius: '16px',
                    height: '100%',
                  border: `1px solid ${c.accent}`,
                  background: c.cardBg,
                  p: { xs: 1.5, md: 2 },
                  boxShadow: c.cardShadow,
                  transform: { md: getCardTransform(index) },
                  transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), border-color 0.3s ease',
                  '&:hover': {
                    transform: { md: 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(-6px)' },
                    borderColor: '#ff9f1a',
                    boxShadow: 'none'
                  }
                }}
              >
                <CardContent sx={{ p: 1.6 }}>
                <Typography sx={{ color: c.accent, fontWeight: 700, mb: 1.1, fontSize: '0.86rem' }}>0{index + 1}</Typography>
                <Typography variant="h6" sx={{ color: c.textOnCard, fontWeight: 700, mb: 1.2, lineHeight: 1.3 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ color: c.textSecondary, lineHeight: 1.75 }}>{item.description}</Typography>
              </CardContent>
            </Card>
              </Box>
            </ScrollScatter>
          ))}
        </Box>



        {/* Technical Skills Section */}
        <Box sx={{ mt: { xs: 2, md: 4 } }}>
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
                  mb: 1
                }}
              >
                Capabilities
              </Typography>

              <Typography variant="h3" align="center" fontWeight={800} sx={{ mb: 1.4, color: c.textPrimary }}>
                Technical Skills
              </Typography>

              <Typography align="center" sx={{ mb: 6, maxWidth: 640, mx: 'auto', color: c.textSecondary }}>
                A comprehensive overview of my technical expertise, programming languages, and tools.
              </Typography>
            </Box>
          </ScrollScatter>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 3.5, mb: 4 }}>
            {skillCategories.map((category, index) => (
              <ScrollScatter
                key={category.name}
                direction={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"}
                distance={200}
              >
                <Card
                  sx={{
                    borderRadius: '16px',
                    background: c.cardBg,
                    border: `1px solid ${c.accent}`,
                    p: { xs: 1.5, md: 2 },
                    boxShadow: c.cardShadow,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transform: { md: getCardTransform(index) },
                    transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    '&:hover': {
                      transform: { md: 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(-6px)' }
                    }
                  }}
                >
                  <CardContent sx={{ p: 1.6, flexGrow: 1 }}>
                    <Typography variant="h5" sx={{ color: c.textPrimary, fontWeight: 700, mb: 2, fontSize: { xs: '1.2rem', md: '1.35rem' }, letterSpacing: '-0.01em' }}>
                      {category.name}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        sx={{
                          bgcolor: c.accentBg,
                          color: c.accent,
                          border: 'none',
                          fontWeight: 600,
                          fontSize: '0.8rem',
                          borderRadius: '6px',
                          transition: 'all 0.2s',
                          '&:hover': {
                            bgcolor: 'rgba(255,159,26,0.25)',
                            color: '#ff9f1a',
                          }
                        }}
                      />
                    ))}
                  </Box>
                  </CardContent>
                </Card>
              </ScrollScatter>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
