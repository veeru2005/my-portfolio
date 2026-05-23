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
  GitHub as GitHubIcon,
  Visibility as VisibilityIcon,
} from '@mui/icons-material';
import { useVisitorCount } from '../../hooks/useVisitorCount';
import { useDownloadCounter } from '../../hooks/useDownloadCounter';
import { useThemeColors } from '../../hooks/useThemeColors';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const { totalVisitors, isLoading: visitorLoading } = useVisitorCount();
  const { downloadCount, trackDownload } = useDownloadCounter();
  const c = useThemeColors();

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
                  color: c.textSecondary,
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
                  color: c.textPrimary
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
                  color: c.textSecondary,
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
                        bgcolor: c.accentChipBg,
                        color: c.accent,
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
                  href="/VEERENDRA_CHOWDARY.pdf"
                  download="VEERENDRA_CHOWDARY.pdf"
                  endIcon={<DownloadIcon />}
                  onClick={() => trackDownload()}
                  sx={{
                    px: { xs: 2.5, sm: 3.5 },
                    py: 1.4,
                    width: { xs: 'auto', sm: 'auto' },
                    background: c.accent,
                    color: c.isDark ? '#1b1205' : '#ffffff',
                    fontSize: '0.94rem',
                    fontWeight: 700,
                    borderRadius: '12px',
                    border: `1px solid ${c.accent}`,
                    boxShadow: 'none',
                    '&:hover': {
                      background: c.isDark ? '#ffab33' : '#cc7000',
                      borderColor: c.isDark ? '#ffab33' : '#cc7000',
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
                    border: `1px solid ${c.accent}`,
                    color: c.accent,
                    px: { xs: 2.5, sm: 3.5 },
                    py: 1.4,
                    width: { xs: 'auto', sm: 'auto' },
                    fontSize: '0.94rem',
                    fontWeight: 700,
                    borderRadius: '12px',
                    '&:hover': {
                      border: `1px solid ${c.isDark ? '#ffab33' : '#cc7000'}`,
                      color: c.isDark ? '#ffab33' : '#cc7000',
                      bgcolor: c.isDark ? '#0c111c' : 'rgba(232,138,0,0.06)'
                    }
                  }}
                >
                  Contact Me
                </Button>
              </Stack>

              {/* Visitor + Download Counters */}
              <Box sx={{ display: 'flex', gap: { xs: 1.5, sm: 2 }, mt: 2.5, justifyContent: { xs: 'center', md: 'flex-start' }, flexWrap: 'wrap' }}>
                {!visitorLoading && (
                  <Chip
                    icon={<VisibilityIcon sx={{ fontSize: 16, color: `${c.accent} !important` }} />}
                    label={`${totalVisitors.toLocaleString()}+ profile views`}
                    sx={{
                      bgcolor: c.accentBg,
                      color: c.accent,
                      border: `1px solid ${c.accentBorder}`,
                      fontWeight: 600,
                      fontSize: '0.78rem',
                      borderRadius: '8px',
                      animation: 'fadeInUp 0.6s ease-out',
                    }}
                  />
                )}
                <Chip
                  icon={<DownloadIcon sx={{ fontSize: 16, color: `${c.accent} !important` }} />}
                  label={`${downloadCount.toLocaleString()}+ downloads`}
                  sx={{
                    bgcolor: c.accentBg,
                    color: c.accent,
                    border: `1px solid ${c.accentBorder}`,
                    fontWeight: 600,
                    fontSize: '0.78rem',
                    borderRadius: '8px',
                    animation: 'fadeInUp 0.6s ease-out 0.1s both',
                  }}
                />
              </Box>

              <Box sx={{ display: 'flex', gap: 1.15, mt: 2.5, justifyContent: { xs: 'center', md: 'flex-start' } }}>
                <IconButton
                  sx={{
                    width: 50,
                    height: 50,
                    color: c.iconColor,
                    bgcolor: c.iconBg,
                    border: `1px solid ${c.iconBorder}`,
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      color: c.accent,
                      bgcolor: c.accentBg,
                      borderColor: c.accentBorder,
                    }
                  }}
                  href="https://www.linkedin.com/in/veerendra-chowdary-sunkavalli-513b58309"
                  target="_blank"
                  aria-label="LinkedIn profile"
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  sx={{
                    width: 50,
                    height: 50,
                    color: c.iconColor,
                    bgcolor: c.iconBg,
                    border: `1px solid ${c.iconBorder}`,
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      color: c.accent,
                      bgcolor: c.accentBg,
                      borderColor: c.accentBorder,
                    }
                  }}
                  href="https://github.com/veeru2005"
                  target="_blank"
                  aria-label="GitHub profile"
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton
                  sx={{
                    width: 50,
                    height: 50,
                    color: c.iconColor,
                    bgcolor: c.iconBg,
                    border: `1px solid ${c.iconBorder}`,
                    transition: 'all 0.25s ease',
                    '&:hover': {
                      color: c.accent,
                      bgcolor: c.accentBg,
                      borderColor: c.accentBorder,
                    }
                  }}
                  href="mailto:sunkavalli.veerendra1973@gmail.com"
                  aria-label="Send email"
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
                border: `1px solid ${c.accent}`,
                background: c.cardBg,
                p: { xs: 1, sm: 1.5, md: 2 },
                boxShadow: c.cardShadow,
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
                width={410}
                height={440}
                loading="eager"
                decoding="async"
                // @ts-ignore - fetchPriority is a valid HTML attribute
                fetchPriority="high"
                sx={{
                  width: '100%',
                  height: { xs: 'auto', sm: 380, md: 440 },
                  aspectRatio: { xs: '1 / 1', sm: '410 / 380', md: '410 / 440' },
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
                  bgcolor: c.isDark ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.03)',
                  border: `1px solid ${c.accent}`
                }}
              >
                <Typography sx={{ color: c.accent, fontSize: '0.78rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  Available for freelance
                </Typography>
                <Typography sx={{ color: c.textPrimary, fontSize: '0.9rem', mt: 0.4 }}>
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
                bgcolor: c.cardBgSolid,
                border: `1px solid ${c.accent}`,
                width: 280
              }}
            >
              <Typography sx={{ color: c.accent, fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Available for freelance
              </Typography>
              <Typography sx={{ color: c.textPrimary, fontSize: '0.82rem', mt: 0.35 }}>
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
