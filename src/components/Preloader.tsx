import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

const GREETINGS = [
  'Hello',
  'నమస్కారం', // Telugu
  'नमस्ते', // Hindi
  'こんにちは', // Japanese
  'வணக்கம்', // Tamil
  'നമസ്കാരം', // Malayalam
  'ನಮಸ್ಕಾರ', // Kannada
  '안녕하세요', // Korean
  'नमस्कार' // Marathi
];

interface PreloaderProps {
  onComplete: () => void;
  onExiting?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete, onExiting }) => {
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Determine how long this specific word should stay on screen
    // First word "Hello" slightly longer, others faster to simulate the rapid swap
    const delay = index === 0 ? 950 : 250;

    if (index === GREETINGS.length) {
      // All greetings finished, trigger the exit slide up
      setIsExiting(true);
      if (onExiting) onExiting();
      
      // Wait for exit animation to finish before unmounting
      const exitTimer = setTimeout(() => {
        onComplete();
      }, 500); 
      return () => clearTimeout(exitTimer);
    }

    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [index, onComplete, onExiting]);

  // Once it's exiting and fully finished, we return null to remove node completely
  if (index >= GREETINGS.length && !isExiting) return null;

  const displayIndex = index >= GREETINGS.length ? GREETINGS.length - 1 : index;

  return (
    <Box className={`preloader-fixed ${isExiting ? 'preloader-hidden' : ''}`}>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 8, md: 0 } }}>
        <Box key={displayIndex} sx={{ display: 'inline-flex' }}>
          {Array.from(new (Intl as any).Segmenter(undefined, { granularity: 'grapheme' }).segment(GREETINGS[displayIndex] || '')).map(({ segment: char }: any, i: number) => (
              <span
                key={`${index}-${i}`}
                style={{
                  display: 'inline-block',
                  fontFamily: "'Outfit', sans-serif",
                  fontSize: 'clamp(2.4rem, 5vw, 4rem)',
                  fontWeight: 500,
                  color: '#f5f7ff',
                  letterSpacing: '-0.02em',
                  opacity: displayIndex === 0 ? 0 : 1,
                  animation: displayIndex === 0 ? 'preloaderDropIn 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards' : 'none',
                  animationDelay: displayIndex === 0 ? `${i * 0.05}s` : '0s'
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </Box>
      </Box>
    </Box>
  );
};

export default Preloader;
