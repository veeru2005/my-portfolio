import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const updateHoverState = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', updateHoverState);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', updateHoverState);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Hide cursor on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <style>
        {`
          body {
            cursor: none !important;
          }
          a, button, [role="button"], input, select, textarea {
            cursor: none !important;
          }
        `}
      </style>

      {/* Outer Circle */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? '56px' : '36px',
          height: isHovering ? '56px' : '36px',
          border: '2px solid rgba(255, 159, 26, 1)',
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: `translate(${position.x - (isHovering ? 28 : 18)}px, ${position.y - (isHovering ? 28 : 18)}px)`,
          transition: 'width 0.2s ease-out, height 0.2s ease-out, transform 0.08s ease-out, background-color 0.2s ease',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          backgroundColor: isHovering ? 'rgba(255, 159, 26, 0.15)' : 'transparent',
        }}
      />

      {/* Inner Dot */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '4px',
          height: '4px',
          backgroundColor: '#ff9f1a',
          borderRadius: '50%',
          pointerEvents: 'none',
          transform: `translate(${position.x - 2}px, ${position.y - 2}px)`,
          zIndex: 10000,
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s ease',
          boxShadow: '0 0 10px rgba(255, 159, 26, 0.8)',
        }}
      />
    </>
  );
};

export default CustomCursor;
