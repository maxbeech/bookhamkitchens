'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheck, FaPhoneAlt, FaRegClock } from 'react-icons/fa';
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

export default function ReplacementDoorsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-gray-900">
          <Image 
            src="/images/kitchen-1.jpg" 
            alt="Replacement Kitchen Doors by Bookham Kitchens" 
            fill 
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Replacement Kitchen Doors</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Transform your kitchen with our premium replacement door service - a cost-effective way to achieve a stunning new look.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link 
                href="/contact"
                className="px-6 py-3 bg-accent text-primary font-medium rounded-md hover:bg-accent-400 transition-colors"
              >
                Get a Free Quote
              </Link>
              <Link 
                href="/portfolio"
                className="px-6 py-3 bg-white/20 text-white font-medium rounded-md hover:bg-white/30 transition-colors backdrop-blur-sm"
              >
                View Our Work
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
                    src="/images/kitchen-2.jpg" 
                    alt="Kitchen with Replacement Doors" 
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
                  Refresh Your Kitchen Without the Full Renovation
                </h2>
                <p className="text-gray-600 mb-6">
                  Our replacement door service offers a cost-effective and efficient way to transform your kitchen without the disruption and expense of a full renovation. By keeping your existing cabinets and replacing only the doors and drawer fronts, you can achieve a stunning new look at a fraction of the cost.
                </p>
                <p className="text-gray-600 mb-6">
                  At Bookham Kitchens, we offer an extensive range of door styles, materials, and finishes to suit any taste and budget. From classic shaker designs to sleek handleless options, our collection includes the latest trends and timeless classics.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Cost-Effective</h3>
                      <p className="text-gray-600 text-sm">Save up to 70% compared to a full kitchen renovation</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Quick Installation</h3>
                      <p className="text-gray-600 text-sm">Typically completed in just 1-2 days</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Minimal Disruption</h3>
                      <p className="text-gray-600 text-sm">Your kitchen remains usable throughout most of the process</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Extensive Selection</h3>
                      <p className="text-gray-600 text-sm">Hundreds of styles, colors, and finishes to choose from</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Our Replacement Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We've refined our door replacement process to be simple, efficient, and stress-free. Here's how we transform your kitchen:
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-custom h-full">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-secondary font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Free Consultation</h3>
                <p className="text-gray-600">
                  We'll visit your home to assess your current kitchen, discuss your requirements, and measure your cabinets precisely.
                </p>
              </div>
            </FadeIn>
            
            {/* Step 2 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-custom h-full">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-secondary font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Design & Selection</h3>
                <p className="text-gray-600">
                  Choose from our extensive range of door styles, materials, and finishes. We'll help you select the perfect options for your vision and budget.
                </p>
              </div>
            </FadeIn>
            
            {/* Step 3 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-custom h-full">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-secondary font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Preparation</h3>
                <p className="text-gray-600">
                  We'll order your custom doors and prepare for installation. Our team ensures all components are ready for a smooth installation process.
                </p>
              </div>
            </FadeIn>
            
            {/* Step 4 */}
            <FadeIn direction="up" delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-custom h-full">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-secondary font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Installation</h3>
                <p className="text-gray-600">
                  Our skilled installers will carefully remove your old doors and fit the new ones, usually completing the process in just 1-2 days with minimal disruption.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Door Styles Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Our Door Styles</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Explore our range of premium door styles to find the perfect match for your kitchen.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Style 1 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white rounded-lg shadow-custom overflow-hidden">
                <div className="relative h-64">
                  <Image 
                    src="/images/kitchen-3.jpg" 
                    alt="Shaker Style Doors" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Shaker Style</h3>
                  <p className="text-gray-600">
                    Classic five-piece doors with a recessed center panel. Versatile and timeless, these doors suit both traditional and contemporary kitchens.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            {/* Style 2 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white rounded-lg shadow-custom overflow-hidden">
                <div className="relative h-64">
                  <Image 
                    src="/images/kitchen-5.jpeg" 
                    alt="Handleless Doors" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Handleless</h3>
                  <p className="text-gray-600">
                    Sleek, minimalist doors with integrated grip profiles or push-to-open mechanisms. Perfect for modern, clean-lined kitchens.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            {/* Style 3 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white rounded-lg shadow-custom overflow-hidden">
                <div className="relative h-64">
                  <Image 
                    src="/images/kitchen-6.jpg" 
                    alt="High Gloss Doors" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">High Gloss</h3>
                  <p className="text-gray-600">
                    Contemporary doors with a reflective, polished finish. These doors create a sense of space and light in your kitchen.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Materials & Finishes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6 font-serif">
                  Materials & Finishes
                </h2>
                <p className="text-gray-600 mb-6">
                  We offer a wide range of high-quality materials and finishes to suit your style preferences and practical requirements.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Materials</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Solid Wood</span> - Natural beauty with unique grain patterns
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">MDF</span> - Stable and versatile with a smooth finish
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Vinyl Wrapped</span> - Affordable with excellent durability
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Acrylic</span> - Ultra-modern with exceptional reflective properties
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">Finishes</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Painted</span> - Available in any RAL or custom color
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Wood Grain</span> - Natural or stained to your preference
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Matt</span> - Sophisticated, fingerprint-resistant finish
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Gloss</span> - Bright, reflective surface that enhances light
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden shadow-custom">
                  <Image 
                    src="/images/kitchen-1.jpg" 
                    alt="Wood Finish Kitchen Doors" 
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-custom">
                  <Image 
                    src="/images/kitchen-2.jpg" 
                    alt="Painted Kitchen Doors" 
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-custom">
                  <Image 
                    src="/images/kitchen-3.jpg" 
                    alt="Matt Finish Kitchen Doors" 
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-custom">
                  <Image 
                    src="/images/kitchen-4.jpg.jpeg" 
                    alt="Gloss Finish Kitchen Doors" 
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
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
                  We couldn't believe the transformation! Bookham Kitchens replaced our dated kitchen doors with beautiful shaker style ones, and it looks like a completely new kitchen. The process was quick, clean, and the team was professional throughout. We've had so many compliments from friends and family.
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent font-bold">JW</span>
                  </div>
                  <div>
                    <h4 className="font-bold">James & Michelle Wilson</h4>
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
                  Get a Free Quote
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