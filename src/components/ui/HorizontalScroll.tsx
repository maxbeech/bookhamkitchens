'use client';
import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HorizontalScrollProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
}

export default function HorizontalScroll({
  children,
  className = '',
  speed = 1
}: HorizontalScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);
  
  // Calculate the scrollable distance
  const distance = containerWidth - windowWidth;
  
  // Get scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });
  
  // Transform the horizontal position based on vertical scroll
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance * speed]);
  
  // Set up the container width measurement
  useEffect(() => {
    const updateWidths = () => {
      if (containerRef.current) {
        // Get the width of the scrollable content
        const contentWidth = containerRef.current.scrollWidth;
        setContainerWidth(contentWidth);
        setWindowWidth(window.innerWidth);
      }
    };
    
    // Update on mount and when window resizes
    updateWidths();
    window.addEventListener('resize', updateWidths);
    
    return () => {
      window.removeEventListener('resize', updateWidths);
    };
  }, [children]);
  
  return (
    <div className={`overflow-hidden relative ${className}`}>
      <motion.div
        ref={containerRef}
        style={{ x }}
        className="flex items-start whitespace-nowrap"
      >
        {children}
      </motion.div>
    </div>
  );
} 