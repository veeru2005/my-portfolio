import React from 'react';
import { Box, Typography, Container, Card, CardMedia, CardContent, CardActions, Button, Chip, IconButton } from '@mui/material';
import { Launch as LaunchIcon } from '@mui/icons-material';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { ScrollScatter } from '../ui/ScrollScatter';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string;
  liveUrl: string;
  githubUrl: string;
}

const STATIC_PROJECTS: Project[] = [
  {
    id: 3,
    title: 'Fresco Organic',
    description: 'An e-commerce website for a pure organic fruits and groceries selling platform. Features a custom coupons system for user discounts and supports exclusively Cash on Delivery (COD) based on client requirements.',
    imageUrl: 'https://res.cloudinary.com/dpff7l6hb/image/upload/v1776618413/3_bbs0bf.png',
    technologies: 'React, Node.js, MongoDB, Better Auth',
    liveUrl: 'https://frescoo.tech/',
    githubUrl: '#'
  },
   {
    id: 2,
    title: 'KLU ESPORTS Platform',
    description: 'Built the official KLU E-Sports website for events, club activities, and student achievements. Added team-leader registration using members\' email IDs to reduce manual entry and speed up competition onboarding.',
    imageUrl: 'https://res.cloudinary.com/dpff7l6hb/image/upload/v1776617167/1_fcqffj.png',
    technologies: 'React, Node.js, MongoDB, Tailwind CSS',
    liveUrl: 'https://kluesports.in',
    githubUrl: '#'
  },
  {
    id: 1,
    title: 'VIDHURA AI & Data Science Club',
    description: 'Where creativity meets technology. VIDHURA unites thinkers and creators to push AI and data science boundaries through projects, collaboration, and research.',
    imageUrl: 'https://res.cloudinary.com/dpff7l6hb/image/upload/v1760550280/lwcnwbbx9ep8j3y4lrrg.png',
    technologies: 'React, Node.js, MongoDB, Cloudinary',
    liveUrl: 'https://vidhura-klu.tech/',
    githubUrl: '#'
  }
];

const Projects: React.FC = () => {
  const headerAnimation = useScrollAnimation(0.14);
  const projectsAnimation = useScrollAnimation(0.14);

  const getProjectAnimationClass = (index: number) => {
    const mod = index % 3;
    if (mod === 0) return 'scroll-animate-cert-left';
    if (mod === 1) return 'scroll-animate-cert-up';
    return 'scroll-animate-cert-right';
  };

  const getCardTransform = (index: number) => {
    const col = index % 3;
    if (col === 0) return 'perspective(1000px) rotateY(8deg) rotateX(3deg)';
    if (col === 1) return 'perspective(1000px) rotateY(0deg) rotateX(3deg)';
    return 'perspective(1000px) rotateY(-8deg) rotateX(3deg)';
  };

  return (
    <Box
      id="projects"
      sx={{
        py: { xs: 5, md: 6 },
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(6,8,14,1) 0%, rgba(8,10,15,1) 100%)'
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
            Featured Work
          </Typography>

          <Typography variant="h3" align="center" fontWeight={800} sx={{ mb: 1.4, color: '#f4f7ff' }}>
            Projects
          </Typography>
          <Typography align="center" sx={{ mb: 5, maxWidth: 650, mx: 'auto', color: '#aeb8ce' }}>
            Production-style builds where design clarity, feature depth, and clean engineering come together.
          </Typography>
        </Box>
      </ScrollScatter>

        <Box 
          sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', lg: '1fr 1fr 1fr' }, gap: 2.3 }}
        >
          {[...STATIC_PROJECTS].sort((a, b) => b.id - a.id).map((project, index) => (
            <ScrollScatter key={project.id} direction={index % 3 === 0 ? "left" : index % 3 === 1 ? "up" : "right"} distance={200}>
              <Box
                ref={index === 0 ? projectsAnimation.ref : null}
                sx={{
                  height: '100%',
                  opacity: projectsAnimation.isVisible ? 1 : 0,
                  animationDelay: `${Math.floor(index / 3) * 150 + (index % 3) * 110}ms`
                }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: '16px',
                    border: '1px solid #ff9f1a',
                    background: 'linear-gradient(160deg, rgba(12,17,28,0.9), rgba(9,12,19,0.9))',
                    p: { xs: 1.5, md: 2 },
                    boxShadow: '0 28px 55px rgba(0,0,0,0.45)',
                    transform: { md: getCardTransform(index) },
                    transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    '&:hover': {
                      transform: { md: 'perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(-6px)' }
                    }
                  }}
                >
                <CardMedia
                  component="img"
                  height="220"
                  image={project.imageUrl}
                  alt={project.title}
                  onError={e => { e.currentTarget.src = '/placeholder.svg'; }}
                  sx={{ objectFit: 'cover', borderRadius: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
                />

                <CardContent sx={{ flexGrow: 1, p: 2, px: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#eef2ff', mb: 1.1, lineHeight: 1.3 }}>
                    {project.title}
                  </Typography>

                  <Typography variant="body2" sx={{ color: '#a8b3ca', mb: 2.3, lineHeight: 1.75 }}>
                    {project.description}
                  </Typography>

                  <Box>
                    {project.technologies.split(',').map(tech => tech.trim() && (
                      <Chip
                        key={tech}
                        label={tech.trim()}
                        size="small"
                        sx={{
                          mr: 0.8,
                          mb: 0.8,
                          bgcolor: 'rgba(255,159,26,0.16)',
                          color: '#ff9f1a',
                          border: 'none',
                          fontWeight: 600,
                          fontSize: '0.75rem',
                          borderRadius: '6px',
                          px: 0.5
                        }}
                      />
                    ))}
                  </Box>
                </CardContent>
                
                <CardActions sx={{ px: 2, pb: 2, pt: 0, gap: 1 }}>
                  <Button
                    variant="contained"
                    startIcon={<LaunchIcon />}
                    href={project.liveUrl}
                    target="_blank"
                    sx={{
                      mr: 0.6,
                      bgcolor: '#ff9f1a',
                      color: '#1a1205',
                      boxShadow: 'none',
                      '&:hover': {
                        bgcolor: '#ffab33',
                        boxShadow: 'none'
                      }
                    }}
                  >
                    Live Demo
                  </Button>
                </CardActions>
              </Card>
              </Box>
            </ScrollScatter>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
