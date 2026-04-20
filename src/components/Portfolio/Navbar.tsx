import React, { useEffect, useRef, useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  Close as CloseIcon,
  HomeOutlined as HomeIcon,
  PersonOutline as PersonIcon,
  SchoolOutlined as SchoolIcon,
  WorkspacePremiumOutlined as CertIcon,
  WorkOutline as WorkIcon,
  EmailOutlined as EmailIcon
} from '@mui/icons-material';

const NAV_HEIGHT = 84;

const menuItems = [
  { label: 'Home', id: 'home', icon: <HomeIcon sx={{ fontSize: 18, mr: 0.8 }} /> },
  { label: 'About', id: 'about', icon: <PersonIcon sx={{ fontSize: 18, mr: 0.8 }} /> },
  { label: 'Education', id: 'education', icon: <SchoolIcon sx={{ fontSize: 18, mr: 0.8 }} /> },
  { label: 'Certificates', id: 'certificates', icon: <CertIcon sx={{ fontSize: 18, mr: 0.8 }} /> },
  { label: 'Projects', id: 'projects', icon: <WorkIcon sx={{ fontSize: 18, mr: 0.8 }} /> },
  { label: 'Contact', id: 'contact', icon: <EmailIcon sx={{ fontSize: 18, mr: 0.8 }} /> }
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const mobileNavAnchorRef = useRef<HTMLDivElement | null>(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT + 2;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setMobileOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = menuItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-20% 0px -40% 0px',
        threshold: 0
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
    };
  }, []);

  // Close navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileNavAnchorRef.current && !mobileNavAnchorRef.current.contains(event.target as Node)) {
        setMobileOpen(false);
      }
    };

    if (mobileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileOpen]);

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          bgcolor: 'transparent',
          backgroundImage: 'none',
          boxShadow: 'none',
          overflowX: 'hidden',
          width: '100%',
          pt: { xs: 1.2, md: 0.5 },
          px: 0
        }}
      >
        <Toolbar sx={{ minHeight: `${NAV_HEIGHT}px !important`, px: 0, alignItems: 'flex-start' }}>
          <Box
            ref={mobileNavAnchorRef}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              width: {
                xs: 'calc(100% - 18px)',
                sm: 'calc(100% - 28px)',
                md: 'calc(100% - 56px)',
                lg: 'calc(100% - 76px)'
              },
              maxWidth: '1320px',
              mx: 'auto',
              px: { xs: 2, sm: 2.5, md: 3 },
              py: { xs: 0.8, md: 1.2 },
              borderRadius: '16px',
              border: '1px solid #ff9f1a',
              bgcolor: isScrolled || mobileOpen ? 'rgba(7, 12, 21, 0.95)' : 'rgba(7, 12, 21, 0.85)',
              backdropFilter: 'blur(16px)',
              boxShadow: isScrolled || mobileOpen ? '0 14px 34px rgba(0,0,0,0.36)' : '0 9px 24px rgba(0,0,0,0.24)',
              transition: 'all 0.3s ease',
              mt: { xs: 1.5, sm: 2, md: 2.5 }
            }}
          >
            {/* Top Row with Logo and Toggle/Desktop Menu */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between', 
              width: '100%' 
            }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 0.9, md: 1.2 }, flexGrow: { xs: 1, md: 0 }, minWidth: { md: 200 } }}>
                <Box
                  sx={{
                    width: { xs: 36, md: 44 },
                    height: { xs: 36, md: 44 },
                    borderRadius: '10px',
                    border: '1px solid rgba(255, 159, 26, 0.56)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'rgba(255, 159, 26, 0.08)'
                  }}
                >
                  <Typography sx={{ color: '#ff9f1a', fontWeight: 'bold', fontSize: { xs: '0.95rem', md: '1.05rem' } }}>V</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography
                    sx={{
                      fontWeight: 800,
                      fontSize: { xs: '0.75rem', sm: '0.92rem', md: '1rem' },
                      color: '#ff9f1a',
                      lineHeight: 1.1,
                      letterSpacing: { xs: '0.025em', md: '0.04em' },
                      textTransform: 'uppercase'
                    }}
                  >
                    Veerendra-Portfolio
                  </Typography>
                </Box>
              </Box>

              {isMobile && (
                <IconButton
                  color="inherit"
                  edge="end"
                  onClick={handleDrawerToggle}
                  sx={{ color: '#f4f7ff', ml: 'auto' }}
                >
                  {mobileOpen ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
              )}

              {!isMobile && (
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', flexGrow: 1, gap: { md: 0.8, lg: 1.2 } }}>
                  {menuItems.map((item) => (
                    <Button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      sx={{
                        color: activeSection === item.id ? '#ff9f1a' : '#aeb8ce',
                        bgcolor: activeSection === item.id ? 'rgba(255, 159, 26, 0.09)' : 'transparent',
                        fontWeight: activeSection === item.id ? 600 : 500,
                        border: activeSection === item.id ? '1px solid rgba(255, 159, 26, 0.35)' : '1px solid transparent',
                        px: { xs: 1.4, md: 1.8 },
                        py: 1.0,
                        borderRadius: '12px',
                        lineHeight: 1.15,
                        textTransform: 'none',
                        fontSize: '0.9rem',
                        transition: 'all 0.22s ease',
                        '&:hover': {
                          bgcolor: activeSection === item.id ? 'rgba(255, 159, 26, 0.15)' : 'rgba(255,255,255,0.04)',
                          borderColor: activeSection === item.id ? 'rgba(255, 159, 26, 0.5)' : 'rgba(255,255,255,0.1)',
                          color: activeSection === item.id ? '#ffb95e' : '#e2e8f5'
                        },
                        '& .MuiButton-startIcon': { display: 'none' } 
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {React.cloneElement(item.icon as React.ReactElement, {
                          sx: { ...((item.icon as React.ReactElement).props.sx), color: activeSection === item.id ? '#ff9f1a' : '#aeb8ce' }
                        })}
                        {item.label}
                      </Box>
                    </Button>
                  ))}
                </Box>
              )}
            </Box>

            {/* Mobile Dropdown Menu */}
            {isMobile && mobileOpen && (
              <Box 
                sx={{ 
                  mt: 2, 
                  pt: 2, 
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                  animation: 'fadeIn 0.2s ease-out'
                }}
              >
                <List sx={{ p: 0 }}>
                  {menuItems.map((item) => (
                    <ListItemButton
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      sx={{
                        borderRadius: '12px',
                        mb: 1,
                        px: 2,
                        py: 1.5,
                        border: activeSection === item.id ? '1px solid rgba(255, 159, 26, 0.35)' : '1px solid transparent',
                        bgcolor: activeSection === item.id ? 'rgba(255, 159, 26, 0.08)' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1.5,
                        '&:hover': {
                          bgcolor: 'rgba(255, 255, 255, 0.04)'
                        }
                      }}
                    >
                      {React.cloneElement(item.icon as React.ReactElement, {
                        sx: { 
                          fontSize: 22, 
                          color: activeSection === item.id ? '#ff9f1a' : '#aeb8ce' 
                        }
                      })}
                      <ListItemText
                        primary={item.label}
                        sx={{
                          margin: 0,
                          '& .MuiTypography-root': {
                            color: activeSection === item.id ? '#f4f7ff' : '#aeb8ce',
                            fontWeight: activeSection === item.id ? 700 : 500,
                            fontSize: '1rem',
                            lineHeight: 1
                          }
                        }}
                      />
                    </ListItemButton>
                  ))}
                </List>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Navbar;
