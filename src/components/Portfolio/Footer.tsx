import React from 'react';
import {
  Box,
  Typography,
  Container,
  IconButton,
  Divider
} from '@mui/material';
import {
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Email as EmailIcon,
  ArrowForward as ArrowForwardIcon
} from '@mui/icons-material';

const Footer = () => {
  const socialLinks = [
    { icon: <LinkedInIcon />, url: 'https://www.linkedin.com/in/veerendra-chowdary-sunkavalli-513b58309/', label: 'LinkedIn' },
    { icon: <GitHubIcon />, url: 'https://github.com/veeru2005', label: 'GitHub' },
    { icon: <EmailIcon />, url: 'mailto:sunkavalli.veerendra1973@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        pt: 0,
        pb: 5,
        background: 'linear-gradient(180deg, rgba(5,7,12,1) 0%, rgba(4,6,10,1) 100%)',
      }}
    >
      <Box className="skill-marquee" sx={{ 
        width: '100%', 
        mb: 8, 
        borderTop: '1px solid #ff9f1a', 
        borderBottom: '1px solid #ff9f1a', 
        borderLeft: 'none',
        borderRight: 'none',
        borderRadius: 0,
        background: 'rgba(255, 255, 255, 0.02)', 
        overflow: 'hidden' 
      }}>
        <Box className="skill-marquee-track" sx={{ py: 2 }}>
          {Array.from({ length: 12 }).map((_, index) => (
            <Typography
              key={`footer-loop-${index}`}
              sx={{
                color: '#ecf1ff',
                fontWeight: 800,
                letterSpacing: '0.02em',
                fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' },
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              LET'S WORK TOGETHER <Box component="span" sx={{ color: '#ff9f1a', mx: { xs: 3, md: 4 } }}>★</Box>
            </Typography>
          ))}
        </Box>
      </Box>

      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          <Box sx={{ flex: { xs: 1, md: 2 } }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 800,
                mb: 2,
                color: '#ff9f1a'
              }}
            >
              Sunkavalli Veerendra Chowdary
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#aab4cb',
                mb: 3,
                lineHeight: 1.8,
                maxWidth: 420
              }}
            >
              I design and develop modern web experiences with a focus on quality, speed, and visual clarity.
              Available for freelance collaborations and full-time opportunities.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.url}
                  target="_blank"
                  sx={{
                    color: '#dce4f5',
                    bgcolor: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    '&:hover': {
                      color: '#ff9f1a',
                      bgcolor: 'rgba(255,159,26,0.12)',
                      borderColor: 'rgba(255,159,26,0.35)',
                      transform: 'translateY(-2px)'
                    }
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>

          <Box sx={{ flex: { xs: 1, md: 0.8 }, display: 'flex', flexDirection: 'column' }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, mb: 2, color: '#f2f6ff' }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.2 }}>
              {quickLinks.map((link, index) => (
                <Box
                  key={index}
                  onClick={() => scrollToSection(link.href)}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: '#b8c3db',
                    cursor: 'pointer',
                    width: 'fit-content',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      color: '#ff9f1a',
                      transform: 'translateX(8px)'
                    },
                    '&:hover .arrow-icon': {
                      opacity: 1,
                      transform: 'translateX(0)',
                      width: 'auto',
                      ml: 1
                    }
                  }}
                >
                  <Typography variant="body2" sx={{ transition: 'color 0.3s ease' }}>
                    {link.name}
                  </Typography>
                  <ArrowForwardIcon 
                    className="arrow-icon"
                    sx={{ 
                      fontSize: '1rem', 
                      opacity: 0, 
                      width: 0,
                      ml: 0,
                      transition: 'all 0.3s ease',
                      transform: 'translateX(-10px)'
                    }} 
                  />
                </Box>
              ))}
            </Box>
          </Box>

          <Box sx={{ flex: { xs: 1, md: 1.5 } }}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, mb: 2, color: '#f2f6ff' }}
            >
              Get In Touch
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#aab4cb',
                mb: 2,
                lineHeight: 1.7
              }}
            >
              Have a project in mind? Share your scope and timeline.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#dce4f5',
                mb: 1
              }}
            >
              📧 sunkavalli.veerendra1973@gmail.com
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#dce4f5',
                mb: 1
              }}
            >
              📱 +91 7995762616
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: '#dce4f5'
              }}
            >
              📍 Rajahmundry, Andhra Pradesh, India
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 4, bgcolor: 'rgba(255,255,255,0.14)' }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            flexDirection: 'column',
            gap: 1
          }}
        >
          <Typography
            variant="body2"
            sx={{
              color: '#94a0b9'
            }}
          >
            © 2026 Sunkavalli Veerendra Chowdary. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
