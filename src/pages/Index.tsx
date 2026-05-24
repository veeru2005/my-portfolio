import React, { useState, useEffect } from 'react';
import Portfolio from '../components/Portfolio/Portfolio';
import Preloader from '../components/Preloader';

const Index = () => {
  const [loading, setLoading] = useState(() => {
    if (typeof window === 'undefined') return false;
    try {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const isMobile = window.matchMedia('(max-width: 899px)').matches;
      const connection = typeof navigator !== 'undefined' ? (navigator as any).connection : undefined;
      const saveData = !!connection?.saveData;
      const deviceMemory = typeof navigator !== 'undefined' ? (navigator as any).deviceMemory : undefined;
      const lowMemory = typeof deviceMemory === 'number' && deviceMemory <= 4;
      return !prefersReducedMotion && !isMobile && !saveData && !lowMemory;
    } catch {
      return false;
    }
  });

  // Prevent scrolling while the preloader is covering the screen
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('preloader-active');
      window.scrollTo(0, 0); 
    } else {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('preloader-active');
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.body.classList.remove('preloader-active');
    };
  }, [loading]);

  return (
    <>
      {loading && (
        <Preloader
          onComplete={() => setLoading(false)}
          onExiting={() => document.body.classList.remove('preloader-active')}
        />
      )}
      <Portfolio />
    </>
  );
};

export default Index;
