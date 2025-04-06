'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheck, FaPhoneAlt, FaDesktop } from 'react-icons/fa';
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

export default function HomeOfficePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-gray-900">
          <Image 
            src="/images/custom-office-furniture-01.jpg" 
            alt="Custom Home Office Furniture by Bookham Kitchens" 
            fill 
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Custom Home Office Furniture</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Elevate your workspace with bespoke office furniture tailored to your style, space, and work requirements.
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
                View Our Portfolio
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
                    src="/images/custom-office-furniture-01.jpg" 
                    alt="Custom Home Office Design" 
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
                  Tailored Workspaces for Productivity and Style
                </h2>
                <p className="text-gray-600 mb-6">
                  With more people working from home than ever before, having a dedicated workspace that inspires productivity while complementing your home's aesthetic is essential. At Bookham Kitchens, we extend our expertise in bespoke cabinetry to create stunning, functional home office solutions.
                </p>
                <p className="text-gray-600 mb-6">
                  Our custom home office furniture is designed around your specific needs, whether you require a compact workstation that fits in a corner, a full study with extensive storage, or a multifunctional space that serves multiple purposes. We carefully consider your workflow, equipment, and storage requirements to create a space that enhances your work life.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Fully Customized</h3>
                      <p className="text-gray-600 text-sm">Designed to fit your space and workflow perfectly</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Ergonomic Design</h3>
                      <p className="text-gray-600 text-sm">Optimized for comfort and long-term wellbeing</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Integrated Technology</h3>
                      <p className="text-gray-600 text-sm">Smart cable management and power solutions</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Premium Materials</h3>
                      <p className="text-gray-600 text-sm">Durable construction that stands the test of time</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Office Furniture Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Our Home Office Solutions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From dedicated studies to clever workspace integration, we create office furniture that perfectly balances form and function.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Solution 1 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white rounded-lg shadow-custom overflow-hidden h-full">
                <div className="relative h-64">
                  <Image 
                    src="/images/custom-office-furniture-01.jpg" 
                    alt="Built-in Home Office Desks" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Built-in Desks & Workstations</h3>
                  <p className="text-gray-600">
                    Custom-fitted desks that make optimal use of your available space. From wall-to-wall installations to corner workstations, we create surfaces that provide ample workspace while integrating seamlessly with your home's architecture.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                      <span className="text-gray-600">Ergonomic height and depth calculations</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                      <span className="text-gray-600">Integrated cable management solutions</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                      <span className="text-gray-600">Built-in power and data ports</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
            
            {/* Solution 2 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white rounded-lg shadow-custom overflow-hidden h-full">
                <div className="relative h-64">
                  <Image 
                    src="/images/custom-tv-unit-01.jpg" 
                    alt="Office Storage Solutions" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Storage Solutions</h3>
                  <p className="text-gray-600">
                    From filing cabinets to bookshelves, our storage solutions help you maintain an organized, clutter-free workspace. We design with both accessibility and aesthetics in mind, ensuring your essentials are at hand but neatly contained.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                      <span className="text-gray-600">Custom filing systems and document storage</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                      <span className="text-gray-600">Display shelving for books and decorative items</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                      <span className="text-gray-600">Concealed storage for office supplies and equipment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
            
            {/* Solution 3 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white rounded-lg shadow-custom overflow-hidden h-full">
                <div className="relative h-64">
                  <Image 
                    src="/images/bedroom-cabinets-2.jpg" 
                    alt="Multi-Functional Office Spaces" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Multi-Functional Spaces</h3>
                  <p className="text-gray-600">
                    For homes where space is at a premium, we create clever solutions that allow rooms to serve multiple purposes. From hideaway desks to office-guest room combinations, we help you maximize your home's potential.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                      <span className="text-gray-600">Fold-away desks and hidden workstations</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                      <span className="text-gray-600">Convertible furniture for dual-purpose rooms</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                      <span className="text-gray-600">Space-efficient solutions for compact areas</span>
                    </li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Our Design & Installation Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From initial concept to final installation, we ensure a smooth and collaborative journey to your perfect home office.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white p-6 rounded-lg shadow-custom h-full border-t-4 border-secondary">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-secondary font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Consultation</h3>
                <p className="text-gray-600">
                  We begin by understanding your needs, work habits, and aesthetic preferences. This includes assessing your space, discussing equipment requirements, and establishing your budget and timeline.
                </p>
              </div>
            </FadeIn>
            
            {/* Step 2 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-custom h-full border-t-4 border-secondary">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-secondary font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Design Development</h3>
                <p className="text-gray-600">
                  Our designers create detailed plans and 3D visualizations of your office space, allowing you to preview the final result. We refine the design based on your feedback until every detail is perfect.
                </p>
              </div>
            </FadeIn>
            
            {/* Step 3 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-custom h-full border-t-4 border-secondary">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-secondary font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Manufacturing</h3>
                <p className="text-gray-600">
                  Once the design is approved, our skilled craftsmen begin creating your bespoke furniture using premium materials and precision techniques to ensure exceptional quality and durability.
                </p>
              </div>
            </FadeIn>
            
            {/* Step 4 */}
            <FadeIn direction="up" delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-custom h-full border-t-4 border-secondary">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-secondary font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Installation</h3>
                <p className="text-gray-600">
                  Our experienced installation team carefully fits your new office furniture, ensuring everything is perfectly aligned and functioning as designed. We complete the process with a thorough clean and final inspection.
                </p>
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
                  Premium Materials & Finishes
                </h2>
                <p className="text-gray-600 mb-6">
                  We offer a wide range of high-quality materials and finishes to create a home office that's not only functional but also a beautiful addition to your home.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Sustainable Woods</h3>
                    <p className="text-gray-600 mb-3">
                      Choose from a selection of sustainably sourced hardwoods and veneers that bring warmth and natural character to your workspace:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <li className="flex items-center">
                        <div className="h-4 w-4 bg-[#c19a6b] rounded-full mr-2"></div>
                        <span className="text-gray-600">Oak</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-4 w-4 bg-[#855e42] rounded-full mr-2"></div>
                        <span className="text-gray-600">Walnut</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-4 w-4 bg-[#d7c4ac] rounded-full mr-2"></div>
                        <span className="text-gray-600">Maple</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-4 w-4 bg-[#4e2c19] rounded-full mr-2"></div>
                        <span className="text-gray-600">Cherry</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Contemporary Finishes</h3>
                    <p className="text-gray-600 mb-3">
                      For a more modern look, consider our range of painted and laminate finishes:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <li className="flex items-center">
                        <div className="h-4 w-4 bg-[#f5f5f5] border border-gray-200 rounded-full mr-2"></div>
                        <span className="text-gray-600">Matte White</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-4 w-4 bg-[#333333] rounded-full mr-2"></div>
                        <span className="text-gray-600">Charcoal Grey</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-4 w-4 bg-[#1e3d59] rounded-full mr-2"></div>
                        <span className="text-gray-600">Navy Blue</span>
                      </li>
                      <li className="flex items-center">
                        <div className="h-4 w-4 bg-[#d9d9d9] rounded-full mr-2"></div>
                        <span className="text-gray-600">Soft Grey</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Worktop Materials</h3>
                    <p className="text-gray-600 mb-3">
                      Choose the perfect surface for your desk or workspace:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Solid Wood</span> - Beautiful, natural surface with character
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Quartz Composite</span> - Durable, stain-resistant surface
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Laminate</span> - Affordable, versatile option with many designs
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
                    src="/images/custom-office-furniture-01.jpg" 
                    alt="Wood Finish Office Desk" 
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-custom">
                  <Image 
                    src="/images/kitchen-2.jpg" 
                    alt="Contemporary Office Cabinets" 
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-custom">
                  <Image 
                    src="/images/kitchen-3.jpg" 
                    alt="Office Storage Solutions" 
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-custom">
                  <Image 
                    src="/images/kitchen-5.jpeg" 
                    alt="Office Workspace Design" 
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
                  Bookham Kitchens transformed my awkward spare room into a stunning home office that has completely changed how I work. The built-in desk and storage solutions maximize the available space, while the custom cable management means no more unsightly wires. The team listened carefully to my needs and created a space that's both beautiful and practical. I couldn't be happier with the result.
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent font-bold">RB</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Robert Blackwood</h4>
                    <p className="text-white/70">Cobham, Surrey</p>
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
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-serif">Ready to Create Your Ideal Workspace?</h2>
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