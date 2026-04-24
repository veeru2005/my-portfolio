import React from 'react';
import { Box, Typography, Container, Card, CardContent, Chip } from '@mui/material';
import { ScrollScatter } from '../ui/ScrollScatter';

const About: React.FC = () => {
  const getCardTransform = (index: number) => {
    const col = index % 3;
    if (col === 0) return 'perspective(1000px) rotateY(8deg) rotateX(3deg)';
    if (col === 1) return 'perspective(1000px) rotateY(0deg) rotateX(3deg)';
    return 'perspective(1000px) rotateY(-8deg) rotateX(3deg)';
  };

  const expertiseCards = [
    {
      title: 'Product-Focused Development',
      description:
        'I architect features from idea to release with practical UX decisions and maintainable code structure.'
    },
    {
      title: 'Creative Engineering Edge',
      description:
        'Design background helps me craft stronger layouts, balanced visual hierarchy, and polished interactions.'
    },
    {
      title: 'Scalable Full-Stack Delivery',
      description:
        'From React interfaces to backend APIs and cloud-ready workflows, I build systems that can grow.'
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
        background: 'linear-gradient(180deg, rgba(6,8,15,0.82) 0%, rgba(9,11,18,1) 100%)'
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
              color: '#ff9f1a',
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

          <Typography variant="h3" align="center" fontWeight={800} sx={{ mb: 1.4, color: '#f4f7ff' }}>
            About Me
          </Typography>
          
          <Typography align="center" sx={{ mb: 6, maxWidth: 640, mx: 'auto', color: '#aeb8ce' }}>
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
                border: '1px solid #ff9f1a',
                background: 'linear-gradient(160deg, rgba(12,17,28,0.9), rgba(9,12,19,0.9))',
                p: { xs: 1.5, md: 2 },
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 28px 55px rgba(0,0,0,0.45)',
              }}
            >
              <CardContent sx={{ p: { xs: 2.8, md: 3.4 } }}>
                <Typography
                  variant="h3"
                  sx={{
                    color: '#f6f8ff',
                    mb: 2,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    lineHeight: 1.1
                  }}
                >
                  Creative at the core,
                  <Box component="span" className="accent-gradient-text" sx={{ display: 'block', mt: 0.5 }}>
                    engineer in execution.
                  </Box>
                </Typography>

                <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.85, color: '#aeb8cf' }}>
                  I started with visual design and grew into full-stack development to build complete digital products.
                  This blend helps me bridge functionality and aesthetics while keeping user experience central.
                </Typography>

                <Typography variant="body1" sx={{ lineHeight: 1.85, color: '#aeb8cf' }}>
                  At KL University, I led multiple creative teams while sharpening my technical stack.
                  Today I focus on building responsive interfaces, robust application logic, and scalable systems.
                </Typography>

                <Box sx={{ mt: 2.4, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Chip label="Design Leadership" sx={{ bgcolor: 'rgba(255,159,26,0.16)', color: '#ff9f1a', borderRadius: '6px' }} />
                  <Chip label="Full-Stack Projects" sx={{ bgcolor: 'rgba(255,159,26,0.16)', color: '#ff9f1a', borderRadius: '6px' }} />
                  <Chip label="Cloud Learning Path" sx={{ bgcolor: 'rgba(255,159,26,0.16)', color: '#ff9f1a', borderRadius: '6px' }} />
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
                border: '1px solid #ff9f1a',
                background: 'linear-gradient(160deg, rgba(12,17,28,0.9), rgba(9,12,19,0.9))',
                p: { xs: 1.5, md: 2 },
                minHeight: '100%',
                boxShadow: '0 28px 55px rgba(0,0,0,0.45)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardContent sx={{ p: { xs: 2.8, md: 3.4 }, display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <Typography sx={{ color: '#cfd8ed', fontWeight: 700, mb: 1.2 }}>Core strengths</Typography>

                <Box sx={{ display: 'grid', gap: 1.2, mb: 3 }}>
                  {[
                    'Strong frontend architecture and component systems',
                    'Backend API development and database design',
                    'UI polish with performance-focused implementation',
                    'Production-ready deployment mindset'
                  ].map((point) => (
                    <Box key={point} sx={{ display: 'flex', gap: 1.2, alignItems: 'flex-start' }}>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: '50%',
                          bgcolor: '#ff9f1a',
                          mt: '8px',
                          flexShrink: 0
                        }}
                      />
                      <Typography sx={{ color: '#aeb8cf', lineHeight: 1.7 }}>{point}</Typography>
                    </Box>
                  ))}
                </Box>

                <Box
                  sx={{
                    mt: 'auto',
                    p: 2,
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, rgba(255,159,26,0.14), rgba(255,159,26,0.08))',
                    border: '1px solid #ff9f1a'
                  }}
                >
                  <Typography sx={{ color: '#edf2ff', fontWeight: 700, mb: 0.4 }}>Goal</Typography>
                  <Typography sx={{ color: '#c6d0e7', lineHeight: 1.7 }}>
                    Build modern software experiences that are visually strong, technically clean, and useful in real-world use.
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
                  border: '1px solid #ff9f1a',
                  background: 'linear-gradient(160deg, rgba(12,17,28,0.9), rgba(9,12,19,0.9))',
                  p: { xs: 1.5, md: 2 },
                  boxShadow: '0 28px 55px rgba(0,0,0,0.45)',
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
                <Typography sx={{ color: '#ff9f1a', fontWeight: 700, mb: 1.1, fontSize: '0.86rem' }}>0{index + 1}</Typography>
                <Typography variant="h6" sx={{ color: '#eef2ff', fontWeight: 700, mb: 1.2, lineHeight: 1.3 }}>
                  {item.title}
                </Typography>
                <Typography sx={{ color: '#9faaC3', lineHeight: 1.75 }}>{item.description}</Typography>
              </CardContent>
            </Card>
              </Box>
            </ScrollScatter>
          ))}
        </Box>

        {/* Added gap as separation */}
        <Box sx={{ mt: { xs: 6, md: 10 }, mb: { xs: 6, md: 8 } }} />

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
              mb: 1
            }}
          >
            Capabilities
          </Typography>

          <Typography variant="h3" align="center" fontWeight={800} sx={{ mb: 1.4, color: '#f4f7ff' }}>
            Technical Skills
          </Typography>

          <Typography align="center" sx={{ mb: 6, maxWidth: 640, mx: 'auto', color: '#aeb8ce' }}>
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
                    background: 'linear-gradient(160deg, rgba(12,17,28,0.9), rgba(9,12,19,0.9))',
                    border: '1px solid #ff9f1a',
                    p: { xs: 1.5, md: 2 },
                    boxShadow: '0 28px 55px rgba(0,0,0,0.45)',
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
                    <Typography variant="h5" sx={{ color: '#f4f7ff', fontWeight: 700, mb: 2, fontSize: { xs: '1.2rem', md: '1.35rem' }, letterSpacing: '-0.01em' }}>
                      {category.name}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {category.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        sx={{
                          bgcolor: 'rgba(255,159,26,0.16)',
                          color: '#ff9f1a',
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
      </Container>
    </Box>
  );
};

export default About;
