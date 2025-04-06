'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheck, FaPhoneAlt, FaTools, FaHardHat } from 'react-icons/fa';
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

export default function KitchenInstallationPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-gray-900">
          <Image 
            src="/images/kitchen-3.jpg" 
            alt="Professional Kitchen Installation Services" 
            fill 
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Kitchen Installation Services</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Professional installation of kitchens with meticulous attention to detail and craftsmanship.
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
                    src="/images/kitchen-6.jpg" 
                    alt="Kitchen Installation Process" 
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
                  Expert Kitchen Installation Services
                </h2>
                <p className="text-gray-600 mb-6">
                  At Bookham Kitchens, we understand that even the most beautiful kitchen design can be compromised by poor installation. That's why our professional installation service is a critical component of our complete kitchen solution. Our team of skilled installers brings years of experience and craftsmanship to ensure your kitchen is fitted to the highest standards.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you've purchased a kitchen from us or another supplier, our installation service ensures everything from cabinets and countertops to appliances and fixtures is perfectly fitted, aligned, and functioning as intended. We take care of all aspects of the installation, including plumbing, electrical work, and finishing touches.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Skilled Professionals</h3>
                      <p className="text-gray-600 text-sm">Experienced and certified installers</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Comprehensive Service</h3>
                      <p className="text-gray-600 text-sm">From demolition to final clean-up</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Attention to Detail</h3>
                      <p className="text-gray-600 text-sm">Precise fitting and perfect finishing</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Minimal Disruption</h3>
                      <p className="text-gray-600 text-sm">Efficient work and clean installation area</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Installation Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Our Installation Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A methodical approach to ensure a smooth, efficient, and high-quality kitchen installation.
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
                <h3 className="text-xl font-bold text-primary mb-3">Pre-Installation Survey</h3>
                <p className="text-gray-600">
                  We carefully assess your space, taking precise measurements and identifying any potential challenges to ensure a smooth installation process.
                </p>
              </div>
            </FadeIn>
            
            {/* Step 2 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-custom h-full">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-secondary font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Preparation & Removal</h3>
                <p className="text-gray-600">
                  We carefully remove your existing kitchen if needed, prepare the space properly, and ensure all utilities are safely disconnected and ready for reconnection.
                </p>
              </div>
            </FadeIn>
            
            {/* Step 3 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-custom h-full">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-secondary font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Cabinet Installation</h3>
                <p className="text-gray-600">
                  Our team precisely positions and secures your cabinets, ensuring they are perfectly level, square, and aligned for optimal functionality and appearance.
                </p>
              </div>
            </FadeIn>
            
            {/* Step 4 */}
            <FadeIn direction="up" delay={0.4}>
              <div className="bg-white p-6 rounded-lg shadow-custom h-full">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-secondary font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Worktop & Appliance Fitting</h3>
                <p className="text-gray-600">
                  We carefully install your worktops, sinks, and appliances, ensuring everything fits perfectly and functions correctly.
                </p>
              </div>
            </FadeIn>
            
            {/* Step 5 */}
            <FadeIn direction="up" delay={0.5}>
              <div className="bg-white p-6 rounded-lg shadow-custom h-full">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-secondary font-bold">5</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Final Touches & Inspection</h3>
                <p className="text-gray-600">
                  We add all finishing details, conduct a thorough inspection, clean the area completely, and demonstrate features of your new kitchen.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6 font-serif">
                  Comprehensive Installation Services
                </h2>
                <p className="text-gray-600 mb-6">
                  Our kitchen installation service covers all aspects of the process to ensure you receive a complete, functional, and beautiful kitchen without the stress of coordinating multiple contractors.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Cabinetry & Fittings</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Cabinet Installation</span> - Precise fitting of base and wall units
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Drawer & Door Alignment</span> - Perfect adjustment for smooth operation
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Hardware Fitting</span> - Handles, pulls, and internal mechanisms
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Worktops & Surfaces</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Worktop Templating</span> - Precise measurements for custom worktops
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Solid Surface Installation</span> - Expert fitting of stone, quartz, or solid wood
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Splashback Fitting</span> - Glass, tile, or matching worktop material
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Utilities & Appliances</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Plumbing Services</span> - Sink, tap, and dishwasher connections
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Electrical Work</span> - Lighting, socket installation, and appliance connections
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Appliance Installation</span> - Proper fitting of ovens, hobs, extractors, and integrated appliances
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
                    alt="Cabinet Installation" 
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-custom">
                  <Image 
                    src="/images/kitchen-2.jpg" 
                    alt="Worktop Installation" 
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-custom">
                  <Image 
                    src="/images/kitchen-5.jpeg" 
                    alt="Appliance Installation" 
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-custom">
                  <Image 
                    src="/images/kitchen-4.jpg.jpeg" 
                    alt="Finishing Touches" 
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
      
      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Why Choose Our Installation Service</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Experience, expertise, and a commitment to excellence make our installation service the right choice for your kitchen project.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Reason 1 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-custom h-full">
                <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <FaTools className="text-secondary h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Expert Craftsmanship</h3>
                <p className="text-gray-600">
                  Our installation team consists of highly skilled professionals with years of experience in kitchen fitting. They combine traditional craftsmanship with modern techniques to ensure every aspect of your kitchen is installed with precision and care.
                </p>
              </div>
            </FadeIn>
            
            {/* Reason 2 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-custom h-full">
                <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <FaHardHat className="text-secondary h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Project Management</h3>
                <p className="text-gray-600">
                  We take care of coordinating all aspects of your installation, from scheduling tradespeople to managing deliveries and disposal. This comprehensive approach ensures your project runs smoothly and is completed on time and to budget.
                </p>
              </div>
            </FadeIn>
            
            {/* Reason 3 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-custom h-full">
                <div className="h-16 w-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                  <svg className="text-secondary h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">Quality Assurance</h3>
                <p className="text-gray-600">
                  Every installation undergoes our rigorous quality control process. Our project manager conducts thorough inspections at key stages and upon completion to ensure every detail meets our exacting standards and your expectations.
                </p>
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
                  The installation team from Bookham Kitchens was exceptional. They arrived on time every day, worked efficiently, and the attention to detail was impressive. They encountered a few unexpected issues with our old property but solved them creatively without any delay to the project. The team was respectful of our home, keeping disruption to a minimum and cleaning thoroughly at the end of each day. The finished kitchen is stunning, and the installation quality is flawless. I couldn't recommend them highly enough.
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent font-bold">MT</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Michael & Teresa Lawrence</h4>
                    <p className="text-white/70">Dorking, Surrey</p>
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
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-serif">Ready to Install Your New Kitchen?</h2>
                <p className="text-primary/80">
                  Contact us today for a free consultation and installation quote.
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