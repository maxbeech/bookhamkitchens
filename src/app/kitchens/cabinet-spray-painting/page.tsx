'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheck, FaPhoneAlt, FaTools } from 'react-icons/fa';
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

export default function CabinetSprayPaintingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-gray-900">
          <Image 
            src="/images/kitchen-5.jpeg" 
            alt="Cabinet Spray Painting by Bookham Kitchens" 
            fill 
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Cabinet Spray Painting</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Rejuvenate your kitchen cabinetry with our professional spray painting service - a durable and flawless finish.
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
                    src="/images/kitchen-4.jpg.jpeg" 
                    alt="Spray Painted Kitchen Cabinets" 
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
                  Transform Your Kitchen with Professional Spray Painting
                </h2>
                <p className="text-gray-600 mb-6">
                  Cabinet spray painting is an excellent option to revitalize your kitchen without the expense of replacement. Our professional spray painting service provides a factory-quality finish that transforms tired, dated cabinetry into a fresh, contemporary kitchen.
                </p>
                <p className="text-gray-600 mb-6">
                  Using state-of-the-art equipment and premium paints, our skilled technicians can achieve a flawless, durable finish in virtually any color. This allows you to completely change your kitchen's appearance or simply refresh its current look with a more resilient coating.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Superior Finish</h3>
                      <p className="text-gray-600 text-sm">Factory-quality, smooth and even coverage</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Extensive Color Options</h3>
                      <p className="text-gray-600 text-sm">Choose from any RAL color or custom match</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Durable Protection</h3>
                      <p className="text-gray-600 text-sm">Resistant to chips, scratches and everyday wear</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Cost-Effective</h3>
                      <p className="text-gray-600 text-sm">Fraction of the cost of cabinet replacement</p>
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
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Our Spray Painting Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our meticulous process ensures a flawless, long-lasting finish for your kitchen cabinets:
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Step 1 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-custom h-full">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-secondary font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Assessment</h3>
                <p className="text-gray-600">
                  We begin with a thorough inspection of your cabinets to determine their condition and suitability for spray painting.
                </p>
              </div>
            </FadeIn>
            
            {/* Step 2 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-custom h-full">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-secondary font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Preparation</h3>
                <p className="text-gray-600">
                  We remove doors and hardware, thoroughly clean all surfaces, repair any damage, and meticulously sand to create the perfect base.
                </p>
              </div>
            </FadeIn>
            
            {/* Step 3 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-custom h-full">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-secondary font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Priming</h3>
                <p className="text-gray-600">
                  We apply specialized adhesion primers to ensure the paint bonds perfectly to the cabinet surface, preventing future peeling or chipping.
                </p>
              </div>
            </FadeIn>
            
            {/* Step 4 */}
            <FadeIn direction="up" delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-custom h-full">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-secondary font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Spray Painting</h3>
                <p className="text-gray-600">
                  Using professional spray equipment, we apply multiple thin coats of premium paint for a flawless, factory-like finish with no brush marks.
                </p>
              </div>
            </FadeIn>
            
            {/* Step 5 */}
            <FadeIn direction="up" delay={0.5}>
              <div className="bg-white p-6 rounded-lg shadow-custom h-full">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-secondary font-bold">5</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Finishing</h3>
                <p className="text-gray-600">
                  We reassemble all components, install new hardware if desired, and conduct a final quality inspection to ensure perfection.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Finish Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Finish Options</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from a variety of professional finishes to suit your style and practical needs:
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Option 1 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white rounded-lg shadow-custom overflow-hidden">
                <div className="relative h-64">
                  <Image 
                    src="/images/kitchen-2.jpg" 
                    alt="Satin Finish Cabinets" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Satin Finish</h3>
                  <p className="text-gray-600">
                    The most popular option, offering a subtle sheen that's practical for kitchens. Provides a smooth, easy-to-clean surface that hides minor imperfections.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            {/* Option 2 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white rounded-lg shadow-custom overflow-hidden">
                <div className="relative h-64">
                  <Image 
                    src="/images/kitchen-1.jpg" 
                    alt="Matte Finish Cabinets" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">Matte Finish</h3>
                  <p className="text-gray-600">
                    A sophisticated, low-reflective finish that creates a soft, velvety appearance. Excellent at hiding fingerprints and surface imperfections.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            {/* Option 3 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white rounded-lg shadow-custom overflow-hidden">
                <div className="relative h-64">
                  <Image 
                    src="/images/kitchen-6.jpg" 
                    alt="High Gloss Finish Cabinets" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">High Gloss</h3>
                  <p className="text-gray-600">
                    A mirror-like, reflective finish that creates a dramatic, contemporary look. Ideal for modern kitchens, it reflects light to make spaces appear larger.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Color Trends */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6 font-serif">
                  Popular Color Trends
                </h2>
                <p className="text-gray-600 mb-6">
                  While we can match any color you desire, these are some of the most popular cabinet color choices that can transform your kitchen:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Neutral Tones</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="h-6 w-6 bg-[#f5f5f5] border border-gray-200 rounded-full mt-1 mr-3"></div>
                        <div>
                          <span className="font-bold text-primary">Classic White</span> - Timeless, bright, and versatile
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 bg-[#e0e0d5] border border-gray-200 rounded-full mt-1 mr-3"></div>
                        <div>
                          <span className="font-bold text-primary">Soft Grey</span> - Sophisticated neutral that hides marks
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 bg-[#d8c9be] border border-gray-200 rounded-full mt-1 mr-3"></div>
                        <div>
                          <span className="font-bold text-primary">Warm Beige</span> - Creates an inviting, cozy atmosphere
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Bold Colors</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="h-6 w-6 bg-[#1e3d59] border border-gray-200 rounded-full mt-1 mr-3"></div>
                        <div>
                          <span className="font-bold text-primary">Navy Blue</span> - Elegant and dramatic statement color
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 bg-[#2e5d4b] border border-gray-200 rounded-full mt-1 mr-3"></div>
                        <div>
                          <span className="font-bold text-primary">Forest Green</span> - Rich and natural for a biophilic feel
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="h-6 w-6 bg-[#393939] border border-gray-200 rounded-full mt-1 mr-3"></div>
                        <div>
                          <span className="font-bold text-primary">Charcoal Black</span> - Contemporary and striking
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
                    src="/images/kitchen-3.jpg" 
                    alt="White Kitchen Cabinets" 
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-custom">
                  <Image 
                    src="/images/kitchen-5.jpeg" 
                    alt="Blue Kitchen Cabinets" 
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-custom">
                  <Image 
                    src="/images/kitchen-6.jpg" 
                    alt="Green Kitchen Cabinets" 
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-custom">
                  <Image 
                    src="/images/kitchen-4.jpg.jpeg" 
                    alt="Grey Kitchen Cabinets" 
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
                  I'm absolutely thrilled with my newly spray painted kitchen cabinets! The team at Bookham Kitchens was professional from start to finish. They took my dated oak cabinets and transformed them with a beautiful sage green finish that looks factory-perfect. The attention to detail was impressive, and they completed the work with minimal disruption. My kitchen looks brand new at a fraction of the cost!
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent font-bold">CH</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Catherine Harrison</h4>
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