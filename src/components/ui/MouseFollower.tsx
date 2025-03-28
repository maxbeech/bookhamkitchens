'use client';
import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function MouseFollower() {
  const [visible, setVisible] = useState(false);
  const [variant, setVariant] = useState<'default' | 'link' | 'button'>('default');
  
  // Motion values for cursor position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Add spring physics for smoother movement
  const springConfig = { damping: 25, stiffness: 400 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setVisible(true);
    };
    
    const handleLinkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.tagName === 'A' || target.closest('a')) {
        setVariant('link');
      } else if (
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.getAttribute('role') === 'button' || 
        target.closest('[role="button"]')
      ) {
        setVariant('button');
      } else {
        setVariant('default');
      }
    };
    
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleLinkHover);
    
    // Hide cursor when it leaves the window
    document.addEventListener('mouseleave', () => setVisible(false));
    document.addEventListener('mouseenter', () => setVisible(true));
    
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleLinkHover);
      document.removeEventListener('mouseleave', () => setVisible(false));
      document.removeEventListener('mouseenter', () => setVisible(true));
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full mix-blend-difference pointer-events-none z-50"
        animate={{
          opacity: visible ? 1 : 0,
          scale: variant === 'default' ? 1 : variant === 'link' ? 1.6 : 0.8,
        }}
        transition={{
          opacity: { duration: 0.15 },
          scale: { type: 'spring', damping: 15, stiffness: 150 }
        }}
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      
      {/* Cursor border */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-white rounded-full mix-blend-difference pointer-events-none z-50"
        animate={{
          opacity: visible ? 1 : 0,
          scale: variant === 'default' ? 1 : variant === 'link' ? 1.4 : 1.8,
        }}
        transition={{
          opacity: { duration: 0.15 },
          scale: { type: 'spring', damping: 15, stiffness: 150 }
        }}
        style={{
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
} 