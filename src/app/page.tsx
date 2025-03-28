'use client';
import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaTrophy, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import OptimizedImage from '@/components/ui/OptimizedImage';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';
import FoxLogo from '@/components/ui/FoxLogo';
import HeroHeading from '@/components/ui/HeroHeading';
import HistoricTimeline from '@/components/ui/HistoricTimeline';
import { motion } from 'framer-motion';

const historicEvents = [
  {
    year: 1888,
    title: 'Club Foundation',
    description: 'Grafton Tennis Club was established by local enthusiasts in the Victorian era.'
  },
  {
    year: 1902,
    title: 'First Clubhouse',
    description: 'The original clubhouse was built, becoming a center for social gatherings.'
  },
  {
    year: 1924,
    title: 'County Champions',
    description: 'Grafton members won their first county championship, establishing the club\'s competitive reputation.'
  },
  {
    year: 1968,
    title: 'Squash Addition',
    description: 'The club expanded to include squash facilities, becoming Grafton Tennis & Squash Club.'
  },
  {
    year: 2012,
    title: 'Modern Renovation',
    description: 'A complete renovation of facilities, maintaining historic charm with modern amenities.'
  }
];

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <ParallaxImage 
            src="/images/hero-tennis.jpg" 
            alt="Grafton Tennis and Squash Club courts" 
            yOffset={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center mb-6">
              <FoxLogo width={70} height={70} className="mr-4" />
              <div className="h-10 w-1 bg-secondary mr-4"></div>
              <p className="text-white/90 font-serif italic">Established 1888</p>
            </div>
            
            <HeroHeading 
              title="Welcome to Grafton Tennis & Squash Club" 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-serif"
            />
            
            <FadeIn delay={0.6}>
              <p className="text-xl md:text-2xl text-white/90 mb-8 font-serif">
                A premier sporting venue with over 135 years of tradition, offering exceptional facilities for tennis and squash enthusiasts of all abilities.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.8}>
              <div className="flex flex-wrap gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link 
                    href="/membership" 
                    className="group bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg flex items-center"
                  >
                    Join Our Club
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                  <Link 
                    href="/contact" 
                    className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              </div>
            </FadeIn>
          </div>
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center pt-2">
              <motion.div 
                className="w-1 h-3 bg-white/60 rounded-full"
                animate={{ scaleY: [1, 0.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" delay={0.2}>
              <div>
                <div className="flex items-center mb-6">
                  <FoxLogo width={40} height={40} className="mr-3" />
                  <h2 className="text-4xl font-bold text-primary font-serif">Our Club</h2>
                </div>
                <p className="text-lg mb-6 text-gray-700">
                  Founded in 1888, Grafton Tennis and Squash Club has a rich history of providing exceptional sporting facilities to the community. Nestled in beautiful surroundings, our club combines tradition with modern amenities.
                </p>
                <p className="text-lg mb-8 text-gray-700">
                  The club's fox emblem represents our values of cunning strategy, agility, and community spirit. Whether you're a competitive player looking for match play, a beginner seeking coaching, or simply want to enjoy the social side of sport, Grafton has something for everyone.
                </p>
                <Link 
                  href="/about" 
                  className="inline-flex items-center font-medium text-secondary hover:text-secondary/80 transition-colors group"
                >
                  Learn more about our history 
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.4}>
              <div className="relative">
                <div className="absolute -inset-4 bg-secondary/20 rounded-3xl transform rotate-3" />
                <div className="relative aspect-[4/3] w-full">
                  <OptimizedImage 
                    src="/images/club-house.jpg" 
                    alt="Grafton Tennis and Squash Club clubhouse" 
                    className="object-cover rounded-2xl shadow-2xl"
                    fill
                  />
                  <div className="absolute bottom-0 right-0 bg-white/90 backdrop-blur-sm p-4 rounded-tl-2xl rounded-br-2xl shadow-lg transform translate-y-6 -translate-x-6">
                    <p className="text-primary font-serif italic">135+ years of sporting excellence</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Historic Timeline */}
      <section className="py-24 bg-light relative overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeIn direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <FoxLogo width={50} height={50} className="mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-primary mb-4 font-serif">Our Rich History</h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-600">
                For over a century, Grafton has been at the heart of tennis and squash in the region.
              </p>
            </div>
          </FadeIn>
          
          <HistoricTimeline events={historicEvents} className="mt-20" />
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <FadeIn direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <FoxLogo width={50} height={50} className="mx-auto mb-4" />
              <h2 className="text-4xl font-bold text-primary mb-4 font-serif">Our Facilities</h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-600">
                Grafton offers excellent facilities for both tennis and squash players, with well-maintained courts and a welcoming clubhouse.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tennis Courts */}
            <FadeIn direction="up" delay={0.3}>
              <motion.div 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              >
                <div className="relative h-64 overflow-hidden">
                  <OptimizedImage 
                    src="/images/tennis-courts.jpg" 
                    alt="Tennis courts" 
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    whileHover={{ opacity: 0.8 }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center mb-2">
                      <FoxLogo width={30} height={30} className="mr-2" animate={false} />
                      <h3 className="text-2xl font-bold text-white font-serif">Tennis Courts</h3>
                    </div>
                    <p className="text-white/90">
                      6 all-weather courts, including 3 floodlit courts
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <Link 
                    href="/tennis/playing" 
                    className="inline-flex items-center text-secondary font-medium transition-colors group"
                  >
                    Learn more 
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </FadeIn>
            
            {/* Squash Courts */}
            <FadeIn direction="up" delay={0.4}>
              <motion.div 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              >
                <div className="relative h-64 overflow-hidden">
                  <OptimizedImage 
                    src="/images/squash-courts.jpg" 
                    alt="Squash courts" 
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    whileHover={{ opacity: 0.8 }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center mb-2">
                      <FoxLogo width={30} height={30} className="mr-2" animate={false} />
                      <h3 className="text-2xl font-bold text-white font-serif">Squash Courts</h3>
                    </div>
                    <p className="text-white/90">
                      3 high-quality courts with excellent viewing areas
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <Link 
                    href="/squash/playing" 
                    className="inline-flex items-center text-secondary font-medium transition-colors group"
                  >
                    Learn more 
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </FadeIn>
            
            {/* Clubhouse */}
            <FadeIn direction="up" delay={0.5}>
              <motion.div 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
              >
                <div className="relative h-64 overflow-hidden">
                  <OptimizedImage 
                    src="/images/clubhouse-interior.jpg" 
                    alt="Clubhouse interior" 
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                    whileHover={{ opacity: 0.8 }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center mb-2">
                      <FoxLogo width={30} height={30} className="mr-2" animate={false} />
                      <h3 className="text-2xl font-bold text-white font-serif">Clubhouse</h3>
                    </div>
                    <p className="text-white/90">
                      Bar, social area, and changing facilities
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <Link 
                    href="/social" 
                    className="inline-flex items-center text-secondary font-medium transition-colors group"
                  >
                    Learn more 
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-24 bg-light relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-16">
            <FadeIn direction="right" delay={0.2}>
              <div className="flex items-center mb-6 md:mb-0">
                <FoxLogo width={40} height={40} className="mr-3" />
                <h2 className="text-4xl font-bold text-primary font-serif">Latest News</h2>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.3}>
              <Link 
                href="/news" 
                className="inline-flex items-center text-secondary font-medium hover:text-secondary/80 transition-colors group"
              >
                View all news 
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <FadeIn key={item} direction="up" delay={0.2 + index * 0.1}>
                <motion.div 
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden"
                  whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                >
                  <div className="relative h-48 overflow-hidden">
                    <OptimizedImage 
                      src={`/images/news-${item}.jpg`} 
                      alt={`News item ${item}`} 
                      fill
                      className="object-cover transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-secondary text-white text-sm font-bold py-1 px-3 rounded-full">
                      NEWS
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2 flex items-center">
                      <span className="inline-block w-3 h-3 bg-primary rounded-full mr-2"></span>
                      March 15, 2024
                    </p>
                    <h3 className="text-xl font-bold text-primary mb-2 font-serif">
                      Summer League Registration Now Open
                    </h3>
                    <p className="mb-4 text-gray-700">
                      Join our summer league for competitive match play throughout the season. All abilities welcome.
                    </p>
                    <Link 
                      href={`/news/summer-league-${item}`} 
                      className="inline-flex items-center text-secondary font-medium hover:text-secondary/80 transition-colors group"
                    >
                      Read more 
                      <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30" />
        </div>
        <div className="container mx-auto px-4 relative">
          <FadeIn direction="up" delay={0.2}>
            <div className="max-w-3xl mx-auto text-center">
              <FoxLogo width={60} height={60} className="mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
                Join Our Community Today
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Become a member of Grafton Tennis and Squash Club and enjoy access to our excellent facilities, coaching programs, and social events.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-block"
              >
                <Link 
                  href="/membership" 
                  className="group bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:shadow-lg inline-flex items-center"
                >
                  View Membership Options
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </div>
          </FadeIn>
          
          {/* Fox silhouette */}
          <motion.div 
            className="absolute bottom-0 right-0 opacity-20 -mb-10 -mr-10 w-64 h-64"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <OptimizedImage
              src="/images/fox-logo.svg"
              alt="Fox logo"
              width={256}
              height={256}
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
} 