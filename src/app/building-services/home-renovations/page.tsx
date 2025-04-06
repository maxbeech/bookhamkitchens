'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheck, FaPhoneAlt, FaHome, FaTools } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

// Animation component (reused from other pages)
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

export default function HomeRenovationsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-gray-900">
          <Image 
            src="/images/renovation-1.jpg" 
            alt="Professional Home Renovation Services" 
            fill 
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Home Renovation Services</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Transform your living spaces with our expert renovation services, combining quality craftsmanship with innovative design.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link 
                href="/contact"
                className="px-6 py-3 bg-accent text-primary font-medium rounded-md hover:bg-accent-400 transition-colors"
              >
                Get a Free Consultation
              </Link>
              <Link 
                href="/portfolio"
                className="px-6 py-3 bg-white/20 text-white font-medium rounded-md hover:bg-white/30 transition-colors backdrop-blur-sm"
              >
                View Our Projects
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded -z-10"></div>
                <div className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-custom">
                  <Image 
                    src="/images/renovation-2.jpg" 
                    alt="Home Renovation Process" 
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
                  Expert Home Renovation Services
                </h2>
                <p className="text-gray-600 mb-6">
                  At Bookham Kitchens, our expertise extends beyond kitchens to comprehensive home renovations that elevate your living spaces. With our skilled team of designers, craftsmen, and project managers, we transform outdated or inefficient spaces into beautiful, functional areas that reflect your style and meet your needs.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you're looking to update a single room, renovate a complete floor, or refresh your entire home, our renovation services combine thoughtful design, quality materials, and expert craftsmanship to deliver exceptional results that add value to your property and enhance your lifestyle.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Comprehensive Service</h3>
                      <p className="text-gray-600 text-sm">Design, planning and full execution</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Expert Project Management</h3>
                      <p className="text-gray-600 text-sm">Timely completion and budget control</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Quality Craftsmanship</h3>
                      <p className="text-gray-600 text-sm">Skilled tradesmen and fine finishes</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Dedicated Support</h3>
                      <p className="text-gray-600 text-sm">Clear communication throughout</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Renovation Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Our Renovation Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions for every room in your home, tailored to your unique requirements and style preferences.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-custom h-full">
                <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="text-secondary h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Full Home Renovations</h3>
                <p className="text-gray-600 mb-4">
                  Comprehensive transformation of your entire home, updating structural elements, fixtures, finishes, and systems to create a cohesive, modern living environment.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                    <span className="text-gray-600">Complete design and planning</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                    <span className="text-gray-600">Structural modifications</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                    <span className="text-gray-600">Updated systems (electrical, plumbing)</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                    <span className="text-gray-600">Interior & exterior refinishing</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
            
            {/* Service 2 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-custom h-full">
                <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="text-secondary h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Bathroom Renovations</h3>
                <p className="text-gray-600 mb-4">
                  Transform your bathroom into a luxurious retreat with updated fixtures, elegant finishes, and improved functionality to create a spa-like atmosphere.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                    <span className="text-gray-600">Custom shower and bath installations</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                    <span className="text-gray-600">Premium fixtures and fittings</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                    <span className="text-gray-600">Tile and stonework</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                    <span className="text-gray-600">Waterproofing and ventilation</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
            
            {/* Service 3 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-custom h-full">
                <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="text-secondary h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Living Space Transformations</h3>
                <p className="text-gray-600 mb-4">
                  Reinvent your living rooms, dining areas, and family spaces with updated designs, improved layouts, and premium finishes for enhanced comfort and style.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                    <span className="text-gray-600">Open-concept reconfigurations</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                    <span className="text-gray-600">Custom built-ins and storage</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                    <span className="text-gray-600">Flooring updates and installations</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                    <span className="text-gray-600">Lighting design and installation</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Renovation Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Our Renovation Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A structured approach ensuring smooth, efficient, and high-quality home renovations from concept to completion.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-custom h-full border-t-4 border-secondary">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-secondary font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Consultation & Design</h3>
                <p className="text-gray-600">
                  We begin with a thorough consultation to understand your vision, needs, and budget. Our design team then creates detailed plans and 3D visualizations of your renovated space.
                </p>
              </div>
            </FadeIn>
            
            {/* Step 2 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-custom h-full border-t-4 border-secondary">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-secondary font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Planning & Preparation</h3>
                <p className="text-gray-600">
                  Once designs are approved, we develop detailed project plans, secure necessary permits, establish timelines, and coordinate with suppliers and subcontractors to ensure smooth execution.
                </p>
              </div>
            </FadeIn>
            
            {/* Step 3 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-custom h-full border-t-4 border-secondary">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-secondary font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Construction & Implementation</h3>
                <p className="text-gray-600">
                  Our skilled team executes the renovation with attention to detail, quality craftsmanship, and regular progress updates. We manage all aspects of the project to ensure minimal disruption.
                </p>
              </div>
            </FadeIn>
            
            {/* Step 4 */}
            <FadeIn direction="up" delay={0.4}>
              <div className="bg-gray-50 p-6 rounded-lg shadow-custom h-full border-t-4 border-secondary">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-secondary font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Completion & Handover</h3>
                <p className="text-gray-600">
                  We conduct thorough quality inspections, address any final adjustments, clean the renovated space, and provide you with a comprehensive walkthrough of your transformed home.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-custom">
                  <Image 
                    src="/images/renovation-3.jpg" 
                    alt="Kitchen Renovation" 
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-custom">
                  <Image 
                    src="/images/renovation-4.jpg" 
                    alt="Bathroom Renovation" 
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-custom">
                  <Image 
                    src="/images/renovation-5.jpg" 
                    alt="Living Room Renovation" 
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-custom">
                  <Image 
                    src="/images/renovation-6.jpg" 
                    alt="Home Office Renovation" 
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6 font-serif">
                  Why Choose Our Renovation Services
                </h2>
                <p className="text-gray-600 mb-6">
                  Our renovation services are distinguished by our commitment to quality, attention to detail, and customer satisfaction. We bring the same expertise and craftsmanship that has made our kitchen designs exceptional to every room in your home.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Design Excellence</h3>
                    <p className="text-gray-600">
                      Our team of designers combines creativity with practical expertise to create spaces that are both beautiful and functional. We consider your lifestyle, preferences, and the unique characteristics of your home to develop designs that exceed your expectations.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Quality Craftsmanship</h3>
                    <p className="text-gray-600">
                      Our skilled tradespeople and craftsmen bring years of experience and a commitment to excellence to every project. From precise carpentry to flawless finishes, we ensure every aspect of your renovation is completed to the highest standards.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Comprehensive Service</h3>
                    <p className="text-gray-600">
                      We handle every aspect of your renovation, from initial designs to final cleanup, coordinating all trades, managing suppliers, and ensuring all work meets building regulations. This turnkey approach ensures a stress-free experience and consistently excellent results.
                    </p>
                  </div>
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
            <div className="flex items-center justify-center mb-12">
              <div className="h-0.5 bg-white/20 w-24"></div>
              <h2 className="text-3xl font-bold px-6 font-serif">What Our Clients Say</h2>
              <div className="h-0.5 bg-white/20 w-24"></div>
            </div>
          </FadeIn>
          
          <div className="max-w-4xl mx-auto">
            <FadeIn direction="up">
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg">
                <div className="mb-6 text-accent text-6xl">"</div>
                <p className="text-white/90 mb-6 text-lg italic">
                  Bookham Kitchens transformed our entire ground floor into an open-plan living space that has completely changed how we use our home. The attention to detail was impressive, from the initial design concepts to the final finishing touches. Their team was professional, tidy, and a pleasure to have in our home. They kept us informed throughout the process and were quick to address any concerns. The project was completed on time and within our budget. We couldn't be happier with the results and have already recommended them to friends and family.
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent font-bold">JA</span>
                  </div>
                  <div>
                    <h4 className="font-bold">James & Amanda Richards</h4>
                    <p className="text-white/70">Leatherhead, Surrey</p>
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
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-serif">Ready to Transform Your Home?</h2>
                <p className="text-primary/80">
                  Contact us today for a free consultation and quote for your home renovation project.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-700 transition-colors text-center"
                >
                  Get a Free Consultation
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