import React from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Projects from './Projects';
import EducationCertifications from './EducationCertifications';
import Contact from './Contact';
import Footer from './Footer';

const Portfolio = () => {
  return (
    <Box sx={{ overflowX: 'clip', width: '100%', position: 'relative' }}>
      <Navbar />
      <Hero />
      <About />
      <EducationCertifications />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
};

export default Portfolio;