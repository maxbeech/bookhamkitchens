'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef } from 'react';

interface SmoothRevealProps {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
  className?: string;
  bgColor?: string;
}

export default function SmoothReveal({
  children,
  delay = 0,
  threshold = 0.2,
  className = '',
  bgColor = '#ffffff'
}: SmoothRevealProps) {
  const [ref, isInView] = useInView({
    triggerOnce: true,
    threshold,
  });

  return (
    <div className={`relative overflow-hidden ${className}`} ref={ref}>
      {children}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: isInView ? 0 : 1,
          transition: {
            duration: 1.2,
            ease: [0.645, 0.045, 0.355, 1.000], // Cubic bezier for smooth easing
            delay: delay
          }
        }}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundColor: bgColor,
          transformOrigin: 'right',
          zIndex: 5
        }}
      />
    </div>
  );
} 