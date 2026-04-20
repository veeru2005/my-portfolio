import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  Box,
  Typography,
  Button,
  Container,
  Chip,
  IconButton,
  Stack
} from '@mui/material';
import {
  ArrowOutward as ArrowOutwardIcon,
  Download as DownloadIcon,
  Email as EmailIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon
} from '@mui/icons-material';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const skills = [
    'React', 'TypeScript', 'Spring Boot', 'Node.js', 'MongoDB',
    'C', 'Java', 'JavaScript', 'Vite', 'Tailwind CSS', 'Express',
    'Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Azure', 'GCP', 'CI/CD',
    'MySQL', 'UI/UX', 'Adobe Photoshop', 'Canva', 'Premiere Pro', 'DaVinci'
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="home"
      sx={{
        minHeight: { xs: 'auto', md: '100svh' },
        pt: { xs: 13, md: 19 },
        pb: { xs: 8, md: 10 },
        position: 'relative',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Box
        className="hero-grid-pattern"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.34
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'minmax(0, 1fr)', md: '1fr 1fr' },
            gap: { xs: 3, md: 8 },
            alignItems: 'center'
          }}
        >
          <Box
            className={isMobile ? "scroll-animate-cert-up" : "scroll-animate-left"}
            sx={{
              textAlign: { xs: 'center', md: 'left' },
              order: { xs: 2, md: 1 },
              minWidth: 0,
              animationDelay: '100ms'
            }}
          >
            <Box>
              <Typography
                sx={{
                  color: '#b8c3dd',
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                fontWeight: 600,
                fontSize: { xs: '0.72rem', sm: '0.8rem' },
                mb: 2
              }}
            >
              Full-Stack Developer + Creative Designer
            </Typography>

            <Typography
              component="h1"
              sx={{
                fontSize: { xs: '1.75rem', sm: '2.4rem', md: '3.1rem', lg: '3.6rem' },
                lineHeight: { xs: 1.1, md: 1.05 },
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: '#f5f7ff'
              }}
            >
              <Box component="span" sx={{ whiteSpace: { xs: 'normal', sm: 'nowrap' } }}>Sunkavalli Veerendra</Box> <br />
              Chowdary
            </Typography>

            <Typography
              sx={{
                mt: 1,
                mb: 3,
                fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.55rem' },
                fontWeight: 600,
                whiteSpace: { xs: 'normal', sm: 'nowrap' }
              }}
              className="accent-gradient-text"
            >
              Building immersive, high-performance web products.
            </Typography>

            <Typography
              sx={{
                color: '#a6b0c6',
                mb: 3,
                fontSize: { xs: '0.96rem', md: '1.07rem' },
                lineHeight: 1.8,
                maxWidth: 620,
                mx: { xs: 'auto', md: 0 }
              }}
            >
              I blend software engineering with strong design direction to craft polished user experiences.
              From frontend interactions to backend logic, I build products that feel modern, fast, and professional.
            </Typography>

            <Box
              sx={{
                mb: 4,
                width: '100%',
                maxWidth: { xs: '100%', md: '620px' },
                overflow: 'hidden',
                position: 'relative',
                mx: { xs: 'auto', md: 0 },
                maskImage: { xs: 'none', md: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' },
                WebkitMaskImage: { xs: 'none', md: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }
              }}
            >
              <Box 
                className="skill-marquee-track" 
                sx={{ 
                  gap: 1.5,
                  alignItems: 'center',
                  py: 1
                }}
              >
                {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
                  <Chip
                    key={`${skill}-${index}`}
                    label={skill}
                    sx={{
                      bgcolor: '#302313',
                      color: '#ff9f1a',
                      border: 'none',
                      fontWeight: 600,
                      fontSize: '0.85rem',
                      borderRadius: '8px',
                      px: 0.5
                    }}
                  />
                ))}
              </Box>
            </Box>

            <Stack direction={{ xs: 'row', sm: 'row' }} spacing={1.6} sx={{ alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <Button
                variant="contained"
                component="a"
                href="/Veerendra's_Resume.pdf"
                download="Veerendra's_Resume.pdf"
                endIcon={<DownloadIcon />}
                sx={{
                  px: { xs: 2.5, sm: 3.5 },
                  py: 1.4,
                  width: { xs: 'auto', sm: 'auto' },
                  background: '#ff9f1a',
                  color: '#1b1205',
                  fontSize: '0.94rem',
                  fontWeight: 700,
                  borderRadius: '12px',
                  border: '1px solid #ff9f1a',
                  boxShadow: 'none',
                  '&:hover': {
                    background: '#ffab33',
                    borderColor: '#ffab33',
                    boxShadow: 'none'
                  }
                }}
              >
                Download CV
              </Button>

              <Button
                variant="outlined"
                startIcon={<EmailIcon />}
                onClick={() => scrollToSection('contact')}
                sx={{
                  border: '1px solid #ff9f1a',
                  color: '#ff9f1a',
                  px: { xs: 2.5, sm: 3.5 },
                  py: 1.4,
                  width: { xs: 'auto', sm: 'auto' },
                  fontSize: '0.94rem',
                  fontWeight: 700,
                  borderRadius: '12px',
                  '&:hover': {
                    border: '1px solid #ffab33',
                    color: '#ffab33',
                    bgcolor: '#0c111c'
                  }
                }}
              >
                Contact Me
              </Button>
            </Stack>

            <Box sx={{ display: 'flex', gap: 1.15, mt: 3.5, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <IconButton
                sx={{
                  width: 50,
                  height: 50,
                  color: '#dce4f5',
                  bgcolor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    color: '#ff9f1a',
                    bgcolor: 'rgba(255,159,26,0.13)',
                    borderColor: 'rgba(255,159,26,0.62)',
                    boxShadow: '0 0 0 1px rgba(255,159,26,0.2) inset'
                  }
                }}
                href="https://www.linkedin.com/in/veerendra-chowdary-sunkavalli-513b58309"
                target="_blank"
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton
                sx={{
                  width: 50,
                  height: 50,
                  color: '#dce4f5',
                  bgcolor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    color: '#ff9f1a',
                    bgcolor: 'rgba(255,159,26,0.13)',
                    borderColor: 'rgba(255,159,26,0.62)',
                    boxShadow: '0 0 0 1px rgba(255,159,26,0.2) inset'
                  }
                }}
                href="https://github.com/veeru2005"
                target="_blank"
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                sx={{
                  width: 50,
                  height: 50,
                  color: '#dce4f5',
                  bgcolor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.14)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    color: '#ff9f1a',
                    bgcolor: 'rgba(255,159,26,0.13)',
                    borderColor: 'rgba(255,159,26,0.62)',
                    boxShadow: '0 0 0 1px rgba(255,159,26,0.2) inset'
                  }
                }}
                href="mailto:sunkavalli.veerendra1973@gmail.com"
              >
                <EmailIcon />
              </IconButton>
            </Box>
            </Box>
          </Box>

          <Box
            className={isMobile ? "scroll-animate-mobile-down" : "scroll-animate-right"}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              order: { xs: 1, md: 2 },
              mb: { xs: 0.5, md: 0 },
              minWidth: 0,
              animationDelay: '300ms'
            }}
          >
            <Box
              sx={{
                width: { xs: 130, sm: 340, md: 410 },
                height: { xs: 130, sm: 'auto', md: 'auto' },
                maxWidth: 430,
                borderRadius: '16px',
                border: '1px solid #ff9f1a',
                background: 'linear-gradient(160deg, rgba(12,17,28,0.9), rgba(9,12,19,0.9))',
                p: { xs: 1, sm: 1.5, md: 2 },
                boxShadow: '0 28px 55px rgba(0,0,0,0.45)',
                transform: { xs: 'none', md: 'perspective(1000px) rotateY(-8deg) rotateX(3deg)' },
                transition: 'transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                '&:hover': {
                  transform: { md: 'perspective(1000px) rotateY(-2deg) rotateX(0deg) translateY(-6px)' }
                }
              }}
            >
              <Box
                component="img"
                src="Web.jpg"
                alt="Sunkavalli Veerendra Chowdary"
                sx={{
                  width: '100%',
                  height: { xs: '100%', sm: 380, md: 440 },
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  borderRadius: { xs: '10px', sm: '12px' }
                }}
              />

              <Box
                sx={{
                  display: { xs: 'none', sm: 'block' },
                  mt: 1.5,
                  px: 1.4,
                  py: 1,
                  borderRadius: '16px',
                  bgcolor: 'rgba(255,255,255,0.04)',
                  border: '1px solid #ff9f1a'
                }}
              >
                <Typography sx={{ color: '#ff9f1a', fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Available for freelance
                </Typography>
                <Typography sx={{ color: '#d9e1f5', fontSize: '0.9rem', mt: 0.4 }}>
                  Full Stack Web Apps | UI/UX Focused Delivery
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: { xs: 'block', sm: 'none' },
                mt: 1.25,
                px: 1.2,
                py: 0.9,
                borderRadius: '14px',
                bgcolor: '#0c111c',
                border: '1px solid #ff9f1a',
                width: 280
              }}
            >
              <Typography sx={{ color: '#ff9f1a', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Available for freelance
              </Typography>
              <Typography sx={{ color: '#d9e1f5', fontSize: '0.82rem', mt: 0.35 }}>
                Full Stack Web Apps | UI/UX Focused Delivery
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
