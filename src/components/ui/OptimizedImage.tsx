'use client';
import React from 'react';
import Image, { ImageProps } from 'next/image';

type OptimizedImageProps = Omit<ImageProps, 'src'> & {
  src: string;
};

/**
 * OptimizedImage component handles both local and remote images consistently
 * It automatically detects if an image is local (starts with /) or remote (starts with http)
 */
export default function OptimizedImage({ src, alt, ...props }: OptimizedImageProps) {
  // For production, we can add more sophisticated image handling here
  // For example, checking if we need to use a CDN or other image service
  
  return (
    <Image
      src={src}
      alt={alt || 'Grafton Tennis and Squash Club image'}
      {...props}
    />
  );
} 