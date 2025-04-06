'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaCheck, FaPhoneAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

// Animation components (reused from homepage)
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | null;
  fullWidth?: boolean;
  className?: string;
  duration?: number;
}

const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  direction = null, 
  fullWidth = false,
  className = "",
  duration = 0.5
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
      x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        delay: delay,
        ease: [0.22, 1, 0.36, 1],
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className={`${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-gray-900">
          <Image 
            src="/images/kitchen-3.jpg" 
            alt="Bookham Kitchens Showroom" 
            fill 
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">About Bookham Kitchens</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Family-run kitchen design specialists with over two decades of experience creating beautiful spaces.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded -z-10"></div>
                <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-custom">
                  <Image 
                    src="/images/kitchen-6.jpg" 
                    alt="The Bookham Kitchens Team" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded -z-10"></div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6 font-serif">
                  Our Story
                </h2>
                <p className="text-gray-600 mb-6">
                  Bookham Kitchens was established in 1995 as a family-run business with a simple mission: to create beautiful, functional kitchens tailored to each client's unique needs and preferences. What began as a small workshop in Great Bookham has grown into one of Surrey's most respected kitchen design and installation companies.
                </p>
                <p className="text-gray-600 mb-6">
                  For over two decades, we've built our reputation on craftsmanship, attention to detail, and exceptional customer service. Our team combines traditional cabinetmaking skills with modern design techniques to create kitchens that are both timeless and contemporary.
                </p>
                <p className="text-gray-600 mb-6">
                  Today, our showroom in Leatherhead showcases our range of bespoke kitchens and cabinetry, while our workshop continues to be the heart of our business where craftsmanship and creativity flourish.
                </p>
                <div className="mt-8">
                  <Link 
                    href="/contact"
                    className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-700 transition-colors inline-flex items-center"
                  >
                    Get in Touch
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                At Bookham Kitchens, our values guide everything we do, from initial design consultations to final installation.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Value 1 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-custom h-full">
                <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Quality Craftsmanship</h3>
                <p className="text-gray-600">
                  We take pride in our work, using only the finest materials and time-tested techniques to create kitchens that last for generations.
                </p>
              </div>
            </FadeIn>
            
            {/* Value 2 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-custom h-full">
                <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Client-Focused Approach</h3>
                <p className="text-gray-600">
                  We listen carefully to our clients' needs and preferences, working collaboratively to create spaces that reflect their unique lifestyle and taste.
                </p>
              </div>
            </FadeIn>
            
            {/* Value 3 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-custom h-full">
                <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Innovative Design</h3>
                <p className="text-gray-600">
                  We blend traditional craftsmanship with contemporary design, creating kitchens that are both functional and beautiful.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-white pattern-bg">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Meet Our Team</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The dedicated professionals behind Bookham Kitchens who bring your vision to life.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white rounded-lg shadow-custom overflow-hidden">
                <div className="h-80 relative">
                  <Image 
                    src="/images/kitchen-1.jpg" 
                    alt="David Richardson" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">David Richardson</h3>
                  <p className="text-secondary mb-3">Founder & Lead Designer</p>
                  <p className="text-gray-600">
                    With over 30 years of experience in kitchen design and cabinetmaking, David founded Bookham Kitchens to pursue his passion for creating beautiful, functional spaces.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            {/* Team Member 2 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white rounded-lg shadow-custom overflow-hidden">
                <div className="h-80 relative">
                  <Image 
                    src="/images/kitchen-2.jpg" 
                    alt="Sarah Richardson" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">Sarah Richardson</h3>
                  <p className="text-secondary mb-3">Design Director</p>
                  <p className="text-gray-600">
                    Sarah brings a wealth of interior design expertise to the team, helping clients realize their vision with a keen eye for color, texture, and proportion.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            {/* Team Member 3 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white rounded-lg shadow-custom overflow-hidden">
                <div className="h-80 relative">
                  <Image 
                    src="/images/kitchen-5.jpeg" 
                    alt="James Bennett" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">James Bennett</h3>
                  <p className="text-secondary mb-3">Installation Manager</p>
                  <p className="text-gray-600">
                    James leads our installation team, ensuring every project is completed to the highest standards of craftsmanship and quality.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4 font-serif">What Our Clients Say</h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what our clients have to say about their experience with Bookham Kitchens.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg h-full">
                <FaQuoteLeft className="text-accent text-4xl mb-4" />
                <p className="text-white/90 mb-6 text-lg italic">
                  "Bookham Kitchens transformed our dated kitchen into a stunning space that's now the heart of our home. Their attention to detail and craftsmanship is exceptional, and the entire process was smooth from start to finish."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent font-bold">JT</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Jennifer Thompson</h4>
                    <p className="text-white/70">Leatherhead, Surrey</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            {/* Testimonial 2 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg h-full">
                <FaQuoteLeft className="text-accent text-4xl mb-4" />
                <p className="text-white/90 mb-6 text-lg italic">
                  "We were impressed by the team's expert knowledge and creative ideas. They designed a kitchen that perfectly suits our lifestyle and exceeded our expectations. The quality of their work is outstanding."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent font-bold">RM</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Robert & Mary Wilson</h4>
                    <p className="text-white/70">Guildford, Surrey</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <FadeIn direction="right">
              <div className="mb-8 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-serif">Ready to Transform Your Kitchen?</h2>
                <p className="text-primary/80">
                  Contact us today for a free consultation and quote.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-700 transition-colors text-center"
                >
                  Contact Us
                </Link>
                <a 
                  href="tel:+441234567890"
                  className="px-6 py-3 bg-white text-primary rounded-md hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  <FaPhoneAlt className="mr-2" />
                  01234 567 890
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
} 