import React, { lazy, Suspense } from 'react';
import { Box } from '@mui/material';
import Navbar from './Navbar';
import Hero from './Hero';

// Lazy load below-the-fold sections for better Lighthouse performance
const About = lazy(() => import('./About'));
const EducationCertifications = lazy(() => import('./EducationCertifications'));
const Projects = lazy(() => import('./Projects'));
const GitHubActivity = lazy(() => import('./GitHubActivity'));
const Testimonials = lazy(() => import('./Testimonials'));
const Blog = lazy(() => import('./Blog'));
const PerformanceBadge = lazy(() => import('./PerformanceBadge'));
const Contact = lazy(() => import('./Contact'));
const Footer = lazy(() => import('./Footer'));
const EasterEgg = lazy(() => import('./EasterEgg'));

const Portfolio = () => {
  return (
    <Box component="main" sx={{ overflowX: 'clip', width: '100%', position: 'relative' }}>
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <About />
        <EducationCertifications />
        <Projects />
        <GitHubActivity />
        <Testimonials />
        <Blog />
        <PerformanceBadge />
        <Contact />
        <Footer />
        <EasterEgg />
      </Suspense>
    </Box>
  );
};

export default Portfolio;