import React, { useState, useEffect } from 'react';
import Portfolio from '../components/Portfolio/Portfolio';
import Preloader from '../components/Preloader';

const Index = () => {
  const [loading, setLoading] = useState(true);

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
      {loading && <Preloader onComplete={() => setLoading(false)} onExiting={() => document.body.classList.remove('preloader-active')} />}
      <Portfolio />
    </>
  );
};

export default Index;
