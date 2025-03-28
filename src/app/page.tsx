'use client';
import React from 'react';
import Link from 'next/link';
import { FaArrowRight, FaTrophy, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import OptimizedImage from '@/components/ui/OptimizedImage';
import FadeIn from '@/components/ui/animations/FadeIn';
import ParallaxImage from '@/components/ui/animations/ParallaxImage';
import AnimatedText from '@/components/ui/animations/AnimatedText';

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
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <AnimatedText 
              text="Welcome to Grafton Tennis & Squash Club" 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              delay={0.2}
            />
            <FadeIn delay={0.4}>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                A premier sporting venue established in 1888, offering exceptional facilities for tennis and squash enthusiasts of all abilities.
              </p>
            </FadeIn>
            <FadeIn delay={0.6}>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/membership" 
                  className="group bg-secondary hover:bg-secondary/90 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Join Our Club
                  <FaArrowRight className="inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/contact" 
                  className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Contact Us
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" delay={0.2}>
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6 relative">
                  <span className="absolute -left-8 -top-4 text-6xl text-secondary/20">01</span>
                  About Our Club
                </h2>
                <p className="text-lg mb-6">
                  Founded in 1888, Grafton Tennis and Squash Club has a rich history of providing exceptional sporting facilities to the community. Nestled in beautiful surroundings, our club combines tradition with modern amenities.
                </p>
                <p className="text-lg mb-8">
                  Whether you're a competitive player looking for match play, a beginner seeking coaching, or simply want to enjoy the social side of sport, Grafton has something for everyone.
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
                <div className="relative">
                  <OptimizedImage 
                    src="/images/club-house.jpg" 
                    alt="Grafton Tennis and Squash Club clubhouse" 
                    fill
                    className="object-cover rounded-2xl shadow-2xl"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-24 bg-light relative overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeIn direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-primary mb-4 relative inline-block">
                <span className="absolute -left-8 -top-4 text-6xl text-secondary/20">02</span>
                Our Facilities
              </h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-600">
                Grafton offers excellent facilities for both tennis and squash players, with well-maintained courts and a welcoming clubhouse.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tennis Courts */}
            <FadeIn direction="up" delay={0.3}>
              <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <OptimizedImage 
                    src="/images/tennis-courts.jpg" 
                    alt="Tennis courts" 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Tennis Courts</h3>
                    <p className="text-white/90">
                      6 all-weather courts, including 3 floodlit courts
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <Link 
                    href="/tennis/playing" 
                    className="inline-flex items-center text-secondary font-medium hover:text-secondary/80 transition-colors group"
                  >
                    Learn more 
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </FadeIn>
            
            {/* Squash Courts */}
            <FadeIn direction="up" delay={0.4}>
              <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <OptimizedImage 
                    src="/images/squash-courts.jpg" 
                    alt="Squash courts" 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Squash Courts</h3>
                    <p className="text-white/90">
                      3 high-quality courts with excellent viewing areas
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <Link 
                    href="/squash/playing" 
                    className="inline-flex items-center text-secondary font-medium hover:text-secondary/80 transition-colors group"
                  >
                    Learn more 
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </FadeIn>
            
            {/* Clubhouse */}
            <FadeIn direction="up" delay={0.5}>
              <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 overflow-hidden">
                  <OptimizedImage 
                    src="/images/clubhouse-interior.jpg" 
                    alt="Clubhouse interior" 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Clubhouse</h3>
                    <p className="text-white/90">
                      Bar, social area, and changing facilities
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <Link 
                    href="/social" 
                    className="inline-flex items-center text-secondary font-medium hover:text-secondary/80 transition-colors group"
                  >
                    Learn more 
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <div className="flex justify-between items-center mb-16">
            <FadeIn direction="right" delay={0.2}>
              <h2 className="text-4xl font-bold text-primary relative">
                <span className="absolute -left-8 -top-4 text-6xl text-secondary/20">03</span>
                Latest News
              </h2>
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
                <div className="group bg-light rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <OptimizedImage 
                      src={`/images/news-${item}.jpg`} 
                      alt={`News item ${item}`} 
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-500 mb-2">March 15, 2024</p>
                    <h3 className="text-xl font-bold text-primary mb-2">
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
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        </div>
        <div className="container mx-auto px-4 relative">
          <FadeIn direction="up" delay={0.2}>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Join Our Community Today
              </h2>
              <p className="text-xl mb-8 text-white/90">
                Become a member of Grafton Tennis and Squash Club and enjoy access to our excellent facilities, coaching programs, and social events.
              </p>
              <Link 
                href="/membership" 
                className="group bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center"
              >
                View Membership Options
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
} 