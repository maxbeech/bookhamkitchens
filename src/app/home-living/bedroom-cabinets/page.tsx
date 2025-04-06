'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

// Animation components
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

export default function BedroomCabinetsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gray-900">
          <Image 
            src="/images/bedroom-cabinets-2.jpg" 
            alt="Bespoke Bedroom Cabinets by Bookham Kitchens" 
            fill 
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Bespoke Bedroom Cabinets</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Custom-designed bedroom storage solutions tailored to your space and style, creating a peaceful and organized sanctuary.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link 
                href="/contact" 
                className="px-6 py-3 bg-accent text-primary font-medium rounded-md hover:bg-accent-400 transition-all duration-300 shadow-md"
              >
                Get a Free Design Consultation
              </Link>
              <Link 
                href="/portfolio" 
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-md hover:bg-white/20 transition-all duration-300"
              >
                View Our Bedroom Projects
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
                    src="/images/bedrooom-cabinets.jpg" 
                    alt="Custom fitted bedroom wardrobes" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded -z-10"></div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div>
                <div className="inline-block px-4 py-1 bg-accent/20 text-secondary rounded-full text-sm font-medium mb-4">
                  Bespoke Design
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6 font-serif">
                  Transform Your Bedroom with Custom Cabinetry
                </h2>
                <p className="text-gray-600 mb-6">
                  At Bookham Kitchens, our expertise extends beyond the kitchen. We design and craft beautiful, bespoke bedroom cabinets and wardrobes that maximize your space while complementing your bedroom's aesthetic.
                </p>
                <p className="text-gray-600 mb-6">
                  Our bedroom cabinetry solutions are tailored to your specific needs, whether you're looking for floor-to-ceiling wardrobes, walk-in closets, or integrated storage systems. We work closely with you to create storage solutions that are both functional and stylish.
                </p>
                <div className="border-l-4 border-accent pl-4 italic text-gray-700 my-8">
                  "A well-designed bedroom should be a peaceful sanctuary where everything has its place, allowing you to relax and recharge."
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start">
                    <FaCheck className="text-secondary mt-1 mr-2" />
                    <span className="text-gray-700">Bespoke wardrobes</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheck className="text-secondary mt-1 mr-2" />
                    <span className="text-gray-700">Sliding door systems</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheck className="text-secondary mt-1 mr-2" />
                    <span className="text-gray-700">Walk-in closets</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheck className="text-secondary mt-1 mr-2" />
                    <span className="text-gray-700">Dressing rooms</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 pattern-bg">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-accent/20 text-secondary rounded-full text-sm font-medium mb-4">
                Why Choose Us
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">The Benefits of Bespoke Bedroom Cabinets</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Discover why custom-designed bedroom storage solutions offer advantages that off-the-shelf options simply can't match.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-custom h-full">
                <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Maximized Space Utilization</h3>
                <p className="text-gray-600">
                  Our bespoke cabinets are designed to make use of every inch of available space, including awkward corners, sloped ceilings, and unusual room layouts.
                </p>
              </div>
            </FadeIn>
            
            {/* Benefit 2 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-custom h-full">
                <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Tailored to Your Lifestyle</h3>
                <p className="text-gray-600">
                  We design your bedroom storage around your specific needs and habits, with customized internal configurations for clothing, accessories, and personal items.
                </p>
              </div>
            </FadeIn>
            
            {/* Benefit 3 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-custom h-full">
                <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Seamless Design Integration</h3>
                <p className="text-gray-600">
                  Our cabinets are designed to complement your bedroom's aesthetic, with a wide range of finishes, materials, and hardware options to create a cohesive look.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Wardrobe Styles Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-accent/20 text-secondary rounded-full text-sm font-medium mb-4">
                Style Options
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Bedroom Cabinet Styles</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From traditional to contemporary, we offer a range of styles to suit your bedroom's design and your personal taste.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Style 1 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white rounded-lg shadow-custom overflow-hidden group">
                <div className="relative h-64">
                  <Image 
                    src="/images/custom-wardrobes-01.jpg" 
                    alt="Contemporary Wardrobes" 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white font-serif">Contemporary</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Clean lines, minimalist hardware, and sleek finishes characterize our contemporary wardrobes, perfect for modern bedrooms.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            {/* Style 2 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white rounded-lg shadow-custom overflow-hidden group">
                <div className="relative h-64">
                  <Image 
                    src="/images/bedrooom-cabinets.jpg" 
                    alt="Traditional Wardrobes" 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white font-serif">Traditional</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Classic design elements, rich wood finishes, and tasteful detailing create timeless wardrobes that complement period properties.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            {/* Style 3 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white rounded-lg shadow-custom overflow-hidden group">
                <div className="relative h-64">
                  <Image 
                    src="/images/bedroom-cabinets-2.jpg" 
                    alt="Walk-in Closet" 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white font-serif">Walk-in Closets</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Luxurious, organized walk-in closet systems with specialized storage for clothing, shoes, and accessories.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <div className="inline-block px-4 py-1 bg-accent/20 text-secondary rounded-full text-sm font-medium mb-4">
                  Custom Features
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6 font-serif">
                  Thoughtful Details & Smart Solutions
                </h2>
                <p className="text-gray-600 mb-8">
                  Our bespoke bedroom cabinets can be customized with a range of innovative features and thoughtful details to enhance both form and function.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="h-8 w-8 bg-accent/20 rounded-full flex items-center justify-center mr-4 mt-1">
                      <FaCheck className="text-secondary h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-1">Integrated Lighting</h3>
                      <p className="text-gray-600">
                        Motion-activated or switch-controlled interior lighting to illuminate your wardrobe contents.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-8 w-8 bg-accent/20 rounded-full flex items-center justify-center mr-4 mt-1">
                      <FaCheck className="text-secondary h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-1">Soft-Close Mechanisms</h3>
                      <p className="text-gray-600">
                        Premium drawer slides and door hinges that close silently and smoothly.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-8 w-8 bg-accent/20 rounded-full flex items-center justify-center mr-4 mt-1">
                      <FaCheck className="text-secondary h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-1">Specialized Storage</h3>
                      <p className="text-gray-600">
                        Custom compartments for jewelry, watches, ties, shoes, and other accessories.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="h-8 w-8 bg-accent/20 rounded-full flex items-center justify-center mr-4 mt-1">
                      <FaCheck className="text-secondary h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary mb-1">Pull-Out Features</h3>
                      <p className="text-gray-600">
                        Retractable mirrors, ironing boards, or laundry hampers seamlessly integrated into your cabinetry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-custom">
                  <Image 
                    src="/images/bedroom-cabinets-2.jpg"
                    alt="Bedroom cabinet interior features" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden shadow-custom">
                  <Image 
                    src="/images/custom-wardrobes-01.jpg" 
                    alt="Integrated bedroom storage" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden shadow-custom col-span-2">
                  <Image 
                    src="/images/bedrooom-cabinets.jpg" 
                    alt="Walk-in closet storage solutions" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white pattern-bg">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-accent/20 text-secondary rounded-full text-sm font-medium mb-4">
                Our Approach
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">The Design & Installation Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From initial consultation to final installation, our comprehensive process ensures your bedroom cabinetry project runs smoothly.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-custom h-full relative">
                <div className="absolute -top-5 -left-5 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">1</div>
                <h3 className="text-lg font-bold text-primary mb-3 mt-2">Consultation</h3>
                <p className="text-gray-600 text-sm">
                  We discuss your storage needs, style preferences, and budget to understand your vision.
                </p>
              </div>
            </FadeIn>
            
            {/* Step 2 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-custom h-full relative">
                <div className="absolute -top-5 -left-5 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">2</div>
                <h3 className="text-lg font-bold text-primary mb-3 mt-2">Design & Planning</h3>
                <p className="text-gray-600 text-sm">
                  Our designers create detailed plans and 3D visualizations of your bespoke bedroom cabinetry.
                </p>
              </div>
            </FadeIn>
            
            {/* Step 3 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-custom h-full relative">
                <div className="absolute -top-5 -left-5 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">3</div>
                <h3 className="text-lg font-bold text-primary mb-3 mt-2">Craftsmanship</h3>
                <p className="text-gray-600 text-sm">
                  Our skilled craftsmen build your cabinets using premium materials and precise techniques.
                </p>
              </div>
            </FadeIn>
            
            {/* Step 4 */}
            <FadeIn direction="up" delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-custom h-full relative">
                <div className="absolute -top-5 -left-5 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">4</div>
                <h3 className="text-lg font-bold text-primary mb-3 mt-2">Installation</h3>
                <p className="text-gray-600 text-sm">
                  Our professional installation team ensures your bedroom cabinets are fitted perfectly.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 font-serif">What Our Clients Say</h2>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg">
                <p className="text-white/90 text-lg italic mb-6">
                  "Bookham Kitchens designed and installed built-in wardrobes in our master bedroom and guest room. The attention to detail was exceptional, and they maximized our storage space while creating a beautiful feature in both rooms. The internal organization has transformed how we use the space."
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent font-bold">EW</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Emma & Will Parker</h4>
                    <p className="text-white/70">Cobham, Surrey</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <FadeIn direction="right">
              <div className="mb-8 md:mb-0 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-serif">
                  Transform Your Bedroom Today
                </h2>
                <p className="text-primary/80 max-w-xl">
                  Contact us to arrange a free design consultation and begin your journey to a perfectly organized bedroom.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <Link 
                href="/contact"
                className="px-8 py-4 bg-primary text-white rounded-md hover:bg-primary-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 font-medium"
              >
                Get a Free Consultation
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
} 