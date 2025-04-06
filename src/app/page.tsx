'use client';
import React, { useRef, ReactNode } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaQuoteLeft, FaCheck, FaPhone } from 'react-icons/fa';
import { BsArrowRight } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';

// Animation components
interface FadeInProps {
  children: ReactNode;
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

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
  imgClassName?: string;
}

const ParallaxImage: React.FC<ParallaxImageProps> = ({
  src,
  alt,
  className = '',
  speed = 0.5,
  imgClassName = '',
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 300 * speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0">
        <Image 
          src={src} 
          alt={alt} 
          fill 
          className={`object-cover ${imgClassName}`}
          priority
        />
      </motion.div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
          <ParallaxImage 
          src="/images/kitchen-3.jpg" 
          alt="Beautiful bespoke kitchen by Bookham Kitchens" 
          className="absolute inset-0"
          speed={0.3}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <FadeIn delay={0.2}>
              <p className="text-accent font-medium tracking-wide uppercase mb-4">Family-Run Kitchen Design Specialists</p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight font-serif">
                Beautifully Crafted <br />
                <span className="text-accent">Bespoke Kitchens</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.6}>
              <p className="text-xl md:text-2xl text-white/90 mb-8">
                Transform your home with our premium kitchen design and installation services in Surrey.
              </p>
            </FadeIn>
            
            <FadeIn delay={0.8}>
              <div className="flex flex-wrap gap-4">
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.98 }}
                  className="shadow-custom"
                >
                  <Link 
                    href="/contact" 
                    className="group bg-accent hover:bg-accent-400 text-primary px-8 py-4 rounded-md font-medium text-lg transition-all duration-300 flex items-center"
                  >
                    Get a Free Quote
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }} 
                  whileTap={{ scale: 0.98 }}
                >
                  <Link 
                    href="/portfolio" 
                    className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-md font-medium text-lg transition-all duration-300 flex items-center"
                  >
                    View Our Work
                    <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
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

      {/* Services Preview Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">Our Services</h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-600">
                From bespoke fitted kitchens to cabinet refacing, we offer a complete range of kitchen design and installation services.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <FadeIn delay={0.1} direction="up">
              <motion.div 
                className="bg-white rounded-lg shadow-custom overflow-hidden h-full hover:shadow-custom-lg transition-shadow duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64">
                  <Image 
                    src="/images/kitchen-1.jpg" 
                    alt="Fitted Kitchens" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white font-serif">Fitted Kitchens</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Completely customized kitchen designs tailored to your space, lifestyle, and preferences.
                  </p>
                  <Link 
                    href="/kitchens/fitted" 
                    className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors group"
                  >
                    Learn more 
                    <BsArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </FadeIn>
            
            {/* Service 2 */}
            <FadeIn delay={0.2} direction="up">
              <motion.div 
                className="bg-white rounded-lg shadow-custom overflow-hidden h-full hover:shadow-custom-lg transition-shadow duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64">
                  <Image 
                    src="/images/kitchen-2.jpg" 
                    alt="Replacement Doors" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white font-serif">Replacement Doors</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Revitalize your kitchen with new cabinet doors and drawer fronts while keeping your existing cabinets.
                  </p>
                  <Link 
                    href="/kitchens/replacement-doors" 
                    className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors group"
                  >
                    Learn more 
                    <BsArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </FadeIn>
            
            {/* Service 3 */}
            <FadeIn delay={0.3} direction="up">
              <motion.div 
                className="bg-white rounded-lg shadow-custom overflow-hidden h-full hover:shadow-custom-lg transition-shadow duration-300"
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64">
                  <Image 
                    src="/images/kitchen-cabinets-1.jpeg" 
                    alt="Cabinet Spray Painting" 
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white font-serif">Cabinet Spray Painting</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Professional spray painting to transform the look of your kitchen cabinets with a durable, factory-like finish.
                  </p>
                  <Link 
                    href="/kitchens/cabinet-spray-painting" 
                    className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors group"
                  >
                    Learn more 
                    <BsArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-medium rounded hover:bg-primary hover:text-white transition-colors"
              >
                View All Services
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-light relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/20 rounded-lg transform rotate-3 z-0"></div>
                <div className="relative aspect-[4/5] w-full">
                  <Image 
                    src="/images/kitchen-5.jpeg" 
                    alt="Bookham Kitchens showroom" 
                    className="object-cover rounded-lg shadow-custom-lg"
                    fill
                  />
                  <div className="absolute bottom-0 right-0 bg-white p-4 rounded-tl-lg shadow-custom-lg transform translate-y-6 -translate-x-6">
                    <p className="text-primary font-serif font-medium">Over 20 years of excellence</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">Family-Run Bespoke Kitchen Specialists</h2>
                
                <p className="text-lg mb-6 text-gray-700">
                  At Bookham Kitchens, we've been designing and installing beautiful kitchens across Surrey for over two decades. As a family-run business, we take pride in our personal approach and attention to detail.
                </p>
                
                <p className="text-lg mb-8 text-gray-700">
                  From initial consultation to final installation, we work closely with you to create a kitchen that perfectly suits your lifestyle, tastes, and budget. Our craftsmen combine traditional techniques with innovative technology to deliver kitchens of exceptional quality and style.
                </p>
                
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <FaCheck className="text-secondary mt-1 mr-3" />
                    <span className="text-gray-700">Personalized design service</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-secondary mt-1 mr-3" />
                    <span className="text-gray-700">Premium materials and craftsmanship</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-secondary mt-1 mr-3" />
                    <span className="text-gray-700">Dedicated project management</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-secondary mt-1 mr-3" />
                    <span className="text-gray-700">Full installation service</span>
                  </li>
                </ul>
                
              <Link 
                  href="/about" 
                  className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors group"
              >
                  Learn more about us 
                  <BsArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white relative">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <FadeIn direction="up">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">Our Design Process</h2>
              <p className="text-lg max-w-3xl mx-auto text-gray-600">
                We follow a comprehensive process to ensure your new kitchen exceeds expectations
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <FadeIn delay={0.1} direction="up">
              <div className="relative">
                <div className="absolute -top-6 left-4 w-12 h-12 rounded-full bg-accent text-primary font-bold text-xl flex items-center justify-center z-10">1</div>
                <div className="pt-10 px-6 pb-6 bg-light rounded-lg shadow-custom border-t-4 border-accent">
                  <h3 className="text-xl font-bold text-primary mb-3 font-serif">Consultation</h3>
                  <p className="text-gray-600">
                    We meet to discuss your ideas, needs, and budget, measuring your space and understanding your vision.
                  </p>
                </div>
                <div className="hidden lg:block absolute top-0 right-0 h-0.5 w-full bg-accent/30 -z-10"></div>
              </div>
            </FadeIn>
            
            {/* Step 2 */}
            <FadeIn delay={0.2} direction="up">
              <div className="relative">
                <div className="absolute -top-6 left-4 w-12 h-12 rounded-full bg-accent text-primary font-bold text-xl flex items-center justify-center z-10">2</div>
                <div className="pt-10 px-6 pb-6 bg-light rounded-lg shadow-custom border-t-4 border-accent">
                  <h3 className="text-xl font-bold text-primary mb-3 font-serif">Design</h3>
                  <p className="text-gray-600">
                    Our designers create detailed plans and 3D renderings of your kitchen for your approval.
                  </p>
                </div>
                <div className="hidden lg:block absolute top-0 right-0 h-0.5 w-full bg-accent/30 -z-10"></div>
              </div>
            </FadeIn>
            
            {/* Step 3 */}
            <FadeIn delay={0.3} direction="up">
              <div className="relative">
                <div className="absolute -top-6 left-4 w-12 h-12 rounded-full bg-accent text-primary font-bold text-xl flex items-center justify-center z-10">3</div>
                <div className="pt-10 px-6 pb-6 bg-light rounded-lg shadow-custom border-t-4 border-accent">
                  <h3 className="text-xl font-bold text-primary mb-3 font-serif">Production</h3>
                  <p className="text-gray-600">
                    Once designs are approved, our craftsmen begin manufacturing your bespoke cabinets and components.
                  </p>
                </div>
                <div className="hidden lg:block absolute top-0 right-0 h-0.5 w-full bg-accent/30 -z-10"></div>
              </div>
            </FadeIn>
            
            {/* Step 4 */}
            <FadeIn delay={0.4} direction="up">
              <div className="relative">
                <div className="absolute -top-6 left-4 w-12 h-12 rounded-full bg-accent text-primary font-bold text-xl flex items-center justify-center z-10">4</div>
                <div className="pt-10 px-6 pb-6 bg-light rounded-lg shadow-custom border-t-4 border-accent">
                  <h3 className="text-xl font-bold text-primary mb-3 font-serif">Installation</h3>
                  <p className="text-gray-600">
                    Our experienced team installs your new kitchen with precision and care, ensuring perfect results.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.5}>
            <div className="text-center mt-12">
              <Link
                href="/kitchens/design-process"
                className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors group"
              >
                Learn more about our process 
                <BsArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-24 bg-primary relative">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5" />
        <div className="container mx-auto px-4 relative">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif">What Our Clients Say</h2>
              <p className="text-lg max-w-3xl mx-auto text-white/80">
                Don't just take our word for it - hear from our satisfied customers
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <FadeIn delay={0.1} direction="up">
              <div className="bg-white p-8 rounded-lg shadow-custom relative">
                <FaQuoteLeft className="text-accent/20 text-5xl absolute -top-4 -left-4" />
                <div className="mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-accent">★</span>
                  ))}
                    </div>
                <p className="text-gray-700 mb-6 italic">
                  "Bookham Kitchens transformed our outdated kitchen into a stunning, functional space. Their attention to detail and craftsmanship is exceptional. The team was professional from start to finish."
                </p>
                <div className="flex items-center">
                  <div className="ml-3">
                    <p className="font-medium text-primary">Sarah Thompson</p>
                    <p className="text-sm text-gray-500">Leatherhead</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            {/* Testimonial 2 */}
            <FadeIn delay={0.2} direction="up">
              <div className="bg-white p-8 rounded-lg shadow-custom relative">
                <FaQuoteLeft className="text-accent/20 text-5xl absolute -top-4 -left-4" />
                <div className="mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-accent">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "The design process was collaborative and enjoyable. They listened to our needs and created a kitchen that perfectly suits our lifestyle. We couldn't be happier with the result."
                </p>
                <div className="flex items-center">
                  <div className="ml-3">
                    <p className="font-medium text-primary">Michael & Jane Davies</p>
                    <p className="text-sm text-gray-500">Guildford</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            {/* Testimonial 3 */}
            <FadeIn delay={0.3} direction="up">
              <div className="bg-white p-8 rounded-lg shadow-custom relative">
                <FaQuoteLeft className="text-accent/20 text-5xl absolute -top-4 -left-4" />
                <div className="mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-accent">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "We had our cabinet doors replaced and painted. The quality of workmanship is outstanding, and it looks like we have a completely new kitchen at a fraction of the cost. Highly recommend!"
                </p>
                <div className="flex items-center">
                  <div className="ml-3">
                    <p className="font-medium text-primary">Robert Johnson</p>
                    <p className="text-sm text-gray-500">Dorking</p>
                  </div>
                </div>
              </div>
              </FadeIn>
          </div>
          
          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <Link
                href="/testimonials"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-medium rounded hover:bg-white hover:text-primary transition-colors"
              >
                Read More Testimonials
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-accent/10 relative">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-custom-lg p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
              <Image 
                src="/images/kitchen-cabinets-closeup-1.jpeg" 
                alt="Kitchen detail" 
                fill
                className="object-cover rounded-r-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
        </div>
            
            <div className="relative z-10 max-w-2xl">
              <FadeIn>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 font-serif">Ready to Transform Your Kitchen?</h2>
                <p className="text-lg text-gray-700 mb-8">
                  Contact us today for a free consultation and quote. Our expert team is ready to help you create the kitchen of your dreams.
                </p>
                
                <div className="flex flex-wrap gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                    className="shadow-custom"
              >
                <Link 
                      href="/contact" 
                      className="group bg-primary hover:bg-primary-700 text-white px-8 py-4 rounded-md font-medium text-lg transition-all duration-300 flex items-center"
                >
                      Contact Us
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
                  
                  <motion.a 
                    href="tel:+441234567890" 
                    whileHover={{ scale: 1.05 }} 
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center px-8 py-4 border-2 border-primary text-primary font-medium rounded-md hover:bg-primary/5 transition-colors text-lg"
                  >
                    <FaPhone className="mr-2 h-4 w-4" />
                    01234 567 890
                  </motion.a>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 