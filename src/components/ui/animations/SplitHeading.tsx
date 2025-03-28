'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SplitHeadingProps {
  title: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
  lineHeight?: number;
  delay?: number;
  highlightWords?: number[];
  highlightClass?: string;
}

export default function SplitHeading({
  title,
  as = 'h2',
  className = '',
  lineHeight = 1.2,
  delay = 0.1,
  highlightWords = [],
  highlightClass = 'text-secondary'
}: SplitHeadingProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  // Split the title into words
  const words = title.split(' ');

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: delay * i
      }
    })
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      rotateX: 10
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };

  // Determine which component to render based on the 'as' prop
  const Component = motion[as] as any;

  return (
    <Component
      ref={ref}
      className={`${className} overflow-hidden`}
      style={{ lineHeight }}
      variants={container}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      <span className="sr-only">{title}</span>
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-[0.25em] last:mr-0"
          aria-hidden="true"
        >
          <motion.span
            className={`inline-block ${highlightWords.includes(index) ? highlightClass : ''}`}
            variants={child}
          >
            {word}
          </motion.span>
        </motion.span>
      ))}
    </Component>
  );
} 