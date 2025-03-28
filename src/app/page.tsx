'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import { useScroll, motion, useTransform } from 'framer-motion';
import { FaArrowRight, FaArrowDown } from 'react-icons/fa';
import OptimizedImage from '@/components/ui/OptimizedImage';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';
import SplitHeading from '@/components/ui/animations/SplitHeading';
import SmoothReveal from '@/components/ui/animations/SmoothReveal';
import MagneticButton from '@/components/ui/animations/MagneticButton';
import MouseFollower from '@/components/ui/MouseFollower';

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax values for hero text
  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main className="flex flex-col">
      {/* Custom cursor */}
      <MouseFollower />
      
      {/* Hero Section */}
      <section ref={scrollRef} className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ParallaxImage 
            src="/images/hero-tennis.jpg" 
            alt="Grafton Tennis and Squash Club courts" 
            yOffset={100}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <motion.div style={{ y, opacity }} className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <SplitHeading 
              title="Grafton Tennis & Squash Club"
              as="h1"
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6"
              highlightWords={[0, 2]}
              delay={0.3}
            />
            
            <FadeIn delay={0.6} className="mb-12">
              <p className="text-xl md:text-2xl text-white/90">
                Established in 1888 — A premier sporting venue with exceptional facilities
              </p>
            </FadeIn>
            
            <div className="flex flex-wrap justify-center gap-6">
              <MagneticButton 
                as="a" 
                href="/membership" 
                className="bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300"
              >
                <span className="flex items-center">
                  Join Our Club
                  <FaArrowRight className="ml-2" />
                </span>
              </MagneticButton>
              
              <MagneticButton 
                as="a" 
                href="/contact" 
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 border border-white/30"
              >
                <span>Contact Us</span>
              </MagneticButton>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white"
        >
          <FaArrowDown className="animate-bounce w-6 h-6" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <SmoothReveal delay={0.2} bgColor="#ffffff">
              <div>
                <h2 className="text-sm uppercase tracking-wider text-secondary font-semibold mb-4">
                  About Our Club
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold text-primary mb-8">
                  A legacy of <span className="text-secondary">excellence</span> since 1888
                </h3>
                <p className="text-lg mb-6 text-gray-700">
                  Nestled in beautiful surroundings, Grafton Tennis and Squash Club combines rich tradition with modern amenities to provide an exceptional sporting experience.
                </p>
                <p className="text-lg mb-8 text-gray-700">
                  Whether you're a competitive player looking for match play, a beginner seeking coaching, or simply want to enjoy the social side of sport, Grafton has something for everyone.
                </p>
                <MagneticButton 
                  as="a" 
                  href="/about" 
                  className="inline-flex items-center font-medium text-secondary border-b-2 border-secondary pb-1"
                >
                  <span className="flex items-center">
                    Discover our history 
                    <FaArrowRight className="ml-2" />
                  </span>
                </MagneticButton>
              </div>
            </SmoothReveal>
            
            <SmoothReveal delay={0.4} bgColor="#ffffff">
              <div className="relative h-[600px] rounded-3xl overflow-hidden">
                <OptimizedImage 
                  src="/images/club-house.jpg" 
                  alt="Grafton Tennis and Squash Club clubhouse" 
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6 p-6 backdrop-blur-sm bg-white/10 rounded-xl border border-white/20">
                  <div className="text-white">
                    <p className="text-sm font-medium mb-1">Our Clubhouse</p>
                    <h4 className="text-2xl font-bold mb-2">A place to gather</h4>
                    <p className="text-sm opacity-80">Modern facilities with a welcoming atmosphere</p>
                  </div>
                </div>
              </div>
            </SmoothReveal>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-32 bg-light relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <SmoothReveal delay={0.2} bgColor="#f8f9fa">
              <h2 className="text-sm uppercase tracking-wider text-secondary font-semibold mb-4">
                World-Class Facilities
              </h2>
              <SplitHeading 
                title="Exceptional courts and amenities"
                className="text-4xl md:text-5xl font-bold text-primary mb-6"
                delay={0.1}
                highlightWords={[0]}
              />
              <p className="text-lg text-gray-700">
                Experience the finest tennis and squash facilities in the region, meticulously maintained to ensure optimal playing conditions.
              </p>
            </SmoothReveal>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Tennis Courts */}
            <SmoothReveal delay={0.3} bgColor="#f8f9fa" className="md:col-span-6 lg:col-span-5">
              <div className="h-full rounded-3xl overflow-hidden group relative">
                <div className="absolute inset-0 z-10">
                  <OptimizedImage 
                    src="/images/tennis-courts.jpg" 
                    alt="Tennis courts" 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="relative z-20 h-full flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">Tennis Courts</h3>
                  <p className="text-white/90 mb-6">
                    6 all-weather courts, including 3 floodlit courts for evening play
                  </p>
                  <MagneticButton 
                    as="a" 
                    href="/tennis/playing" 
                    className="inline-flex items-center text-white rounded-full bg-white/20 backdrop-blur-sm py-3 px-6 hover:bg-white/30 transition-all"
                  >
                    <span className="flex items-center">
                      Learn more 
                      <FaArrowRight className="ml-2" />
                    </span>
                  </MagneticButton>
                </div>
              </div>
            </SmoothReveal>
            
            {/* Squash Courts */}
            <SmoothReveal delay={0.4} bgColor="#f8f9fa" className="md:col-span-6 lg:col-span-7">
              <div className="h-full rounded-3xl overflow-hidden group relative">
                <div className="absolute inset-0 z-10">
                  <OptimizedImage 
                    src="/images/squash-courts.jpg" 
                    alt="Squash courts" 
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>
                <div className="relative z-20 h-full flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold text-white mb-4">Squash Courts</h3>
                  <p className="text-white/90 mb-6">
                    3 high-quality courts with excellent viewing areas and professional lighting
                  </p>
                  <MagneticButton 
                    as="a" 
                    href="/squash/playing" 
                    className="inline-flex items-center text-white rounded-full bg-white/20 backdrop-blur-sm py-3 px-6 hover:bg-white/30 transition-all"
                  >
                    <span className="flex items-center">
                      Learn more 
                      <FaArrowRight className="ml-2" />
                    </span>
                  </MagneticButton>
                </div>
              </div>
            </SmoothReveal>
            
            {/* Clubhouse */}
            <SmoothReveal delay={0.5} bgColor="#f8f9fa" className="md:col-span-12">
              <div className="relative h-[500px] rounded-3xl overflow-hidden group">
                <OptimizedImage 
                  src="/images/clubhouse-interior.jpg" 
                  alt="Clubhouse interior" 
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-lg pl-12">
                    <h3 className="text-3xl font-bold text-white mb-4">Clubhouse</h3>
                    <p className="text-white/90 mb-6">
                      Our recently renovated clubhouse features a bar, social area, and modern changing facilities, creating the perfect atmosphere for post-match relaxation.
                    </p>
                    <MagneticButton 
                      as="a" 
                      href="/social" 
                      className="inline-flex items-center text-white rounded-full bg-white/20 backdrop-blur-sm py-3 px-6 hover:bg-white/30 transition-all"
                    >
                      <span className="flex items-center">
                        Discover more 
                        <FaArrowRight className="ml-2" />
                      </span>
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </SmoothReveal>
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <SmoothReveal delay={0.2} bgColor="#305742">
              <span className="inline-block text-secondary bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-medium mb-6">
                Join Our Community
              </span>
              <SplitHeading 
                title="Become a member today"
                className="text-4xl md:text-6xl font-bold mb-8 text-white"
                delay={0.1}
              />
              <p className="text-xl mb-10 text-white/90 max-w-2xl mx-auto">
                Enjoy access to our excellent facilities, coaching programs, social events, and a vibrant community of tennis and squash enthusiasts.
              </p>
              <MagneticButton
                as="a"
                href="/membership"
                className="bg-white text-primary hover:bg-gray-100 px-10 py-5 rounded-full font-medium text-lg inline-flex items-center shadow-xl"
              >
                <span className="flex items-center">
                  View Membership Options
                  <FaArrowRight className="ml-2" />
                </span>
              </MagneticButton>
            </SmoothReveal>
          </div>
        </div>
      </section>
    </main>
  );
} 