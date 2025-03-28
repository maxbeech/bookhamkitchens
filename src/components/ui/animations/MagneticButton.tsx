'use client';
import { motion, useAnimation, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState, MouseEvent, ReactNode } from 'react';

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number;
  onClick?: () => void;
  href?: string;
  radius?: number;
  as?: 'button' | 'a' | 'div';
}

export default function MagneticButton({
  children,
  className = '',
  strength = 40,
  onClick,
  href,
  radius = 600,
  as = 'button'
}: MagneticButtonProps) {
  // Using any type for ref to accommodate different HTML element types
  const ref = useRef<any>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  // Motion values for x and y movement
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Springs for smoother animation
  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  // Handle mouse movement over the button
  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from center
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Calculate distance from center
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    
    // Only apply effect if within radius
    if (distance < radius) {
      // Set motion values proportionally to distance from center
      x.set(distanceX / 5 * strength / 100);
      y.set(distanceY / 5 * strength / 100);
    }
  };

  // Reset position when mouse leaves
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };
  
  // Button animations
  const buttonVariants = {
    hover: { scale: 1.05 },
    rest: { scale: 1 }
  };
  
  const commonProps = {
    className: `relative ${className}`,
    onMouseMove: handleMouseMove,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: handleMouseLeave,
    onClick,
  };
  
  const Component = as === 'a' ? motion.a : as === 'div' ? motion.div : motion.button;
  
  return (
    <Component
      {...commonProps}
      ref={ref}
      href={as === 'a' ? href : undefined}
      style={{
        x: springX,
        y: springY,
      }}
      animate={isHovered ? 'hover' : 'rest'}
      variants={buttonVariants}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {children}
    </Component>
  );
} 