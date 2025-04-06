'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaRegLightbulb, FaRegEdit, FaTools, FaCheck, FaPhoneAlt } from 'react-icons/fa';
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

export default function KitchenDesignProcessPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-gray-900">
          <Image 
            src="/images/kitchen-6.jpg" 
            alt="Kitchen Design Process" 
            fill 
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Our Kitchen Design Process</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Discover our detailed approach to creating your perfect kitchen, from initial concept to final installation.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link 
                href="/contact"
                className="px-6 py-3 bg-accent text-primary font-medium rounded-md hover:bg-accent-400 transition-colors"
              >
                Start Your Journey
              </Link>
              <Link 
                href="/portfolio"
                className="px-6 py-3 bg-white/20 text-white font-medium rounded-md hover:bg-white/30 transition-colors backdrop-blur-sm"
              >
                See Our Work
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
                    src="/images/kitchen-3.jpg" 
                    alt="Kitchen Design Planning" 
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
                  Crafting Your Dream Kitchen
                </h2>
                <p className="text-gray-600 mb-6">
                  At Bookham Kitchens, we believe that creating your perfect kitchen should be an enjoyable journey. Our proven design process ensures that every detail is considered, resulting in a kitchen that perfectly balances aesthetics and functionality.
                </p>
                <p className="text-gray-600 mb-6">
                  From the initial consultation to the final installation, we work collaboratively with you, keeping you informed and involved every step of the way. Our experienced designers and craftsmen bring together creativity, technical expertise, and premium materials to create a kitchen that exceeds your expectations.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Collaborative Approach</h3>
                      <p className="text-gray-600 text-sm">Your vision and needs guide our design process</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Transparent Communication</h3>
                      <p className="text-gray-600 text-sm">Clear timelines and costs throughout the project</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Detail-Oriented</h3>
                      <p className="text-gray-600 text-sm">Every aspect carefully considered and refined</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Expert Craftsmanship</h3>
                      <p className="text-gray-600 text-sm">Skilled professionals at every stage</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Detailed Process Steps */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Our Design Journey</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From concept to completion, we'll guide you through every step of creating your perfect kitchen.
              </p>
            </div>
          </FadeIn>
          
          {/* Step 1 */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <FadeIn direction="right" className="lg:col-span-5">
                <div className="relative rounded-lg overflow-hidden shadow-custom h-[400px]">
                  <Image 
                    src="/images/kitchen-2.jpg" 
                    alt="Initial Consultation" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <div className="bg-white/90 h-16 w-16 rounded-full flex items-center justify-center">
                      <span className="text-primary text-2xl font-bold">01</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn direction="left" delay={0.2} className="lg:col-span-7">
                <div className="lg:pl-8">
                  <div className="flex items-center mb-4">
                    <FaRegLightbulb className="text-secondary text-2xl mr-3" />
                    <h3 className="text-2xl font-bold text-primary font-serif">Initial Consultation</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Every great kitchen begins with a conversation. We'll meet with you to discuss your vision, requirements, and budget. This is the time to share your inspirations, lifestyle needs, and any challenges with your current kitchen.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <FaCheck className="text-secondary mt-1 mr-3" />
                      <p className="text-gray-600">We'll discuss your cooking habits, storage needs, and how you use your kitchen</p>
                    </div>
                    <div className="flex items-start">
                      <FaCheck className="text-secondary mt-1 mr-3" />
                      <p className="text-gray-600">We'll assess your existing space and take preliminary measurements</p>
                    </div>
                    <div className="flex items-start">
                      <FaCheck className="text-secondary mt-1 mr-3" />
                      <p className="text-gray-600">We'll establish a realistic budget and timeline for your project</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <FadeIn direction="right" className="lg:col-span-7 lg:order-2">
                <div className="lg:pl-8">
                  <div className="flex items-center mb-4">
                    <FaRegEdit className="text-secondary text-2xl mr-3" />
                    <h3 className="text-2xl font-bold text-primary font-serif">Design & Planning</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Our design team will create detailed plans for your kitchen, taking into account spatial constraints, traffic flow, and functional zones. We'll present you with 2D and 3D visualizations, allowing you to see how your kitchen will look before any work begins.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <FaCheck className="text-secondary mt-1 mr-3" />
                      <p className="text-gray-600">We'll create multiple layout options to find the perfect solution</p>
                    </div>
                    <div className="flex items-start">
                      <FaCheck className="text-secondary mt-1 mr-3" />
                      <p className="text-gray-600">You'll explore material samples, fixtures, and appliance options</p>
                    </div>
                    <div className="flex items-start">
                      <FaCheck className="text-secondary mt-1 mr-3" />
                      <p className="text-gray-600">We'll refine the design based on your feedback until it's perfect</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn direction="left" delay={0.2} className="lg:col-span-5 lg:order-1">
                <div className="relative rounded-lg overflow-hidden shadow-custom h-[400px]">
                  <Image 
                    src="/images/kitchen-1.jpg" 
                    alt="Kitchen Design Planning" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <div className="bg-white/90 h-16 w-16 rounded-full flex items-center justify-center">
                      <span className="text-primary text-2xl font-bold">02</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <FadeIn direction="right" className="lg:col-span-5">
                <div className="relative rounded-lg overflow-hidden shadow-custom h-[400px]">
                  <Image 
                    src="/images/kitchen-5.jpeg" 
                    alt="Kitchen Manufacturing" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <div className="bg-white/90 h-16 w-16 rounded-full flex items-center justify-center">
                      <span className="text-primary text-2xl font-bold">03</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn direction="left" delay={0.2} className="lg:col-span-7">
                <div className="lg:pl-8">
                  <div className="flex items-center mb-4">
                    <FaTools className="text-secondary text-2xl mr-3" />
                    <h3 className="text-2xl font-bold text-primary font-serif">Manufacturing & Preparation</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Once the design is finalized, our skilled craftsmen begin creating your custom kitchen components. We use premium materials and precision manufacturing techniques to ensure exceptional quality and longevity.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <FaCheck className="text-secondary mt-1 mr-3" />
                      <p className="text-gray-600">We'll order all materials and components to your exact specifications</p>
                    </div>
                    <div className="flex items-start">
                      <FaCheck className="text-secondary mt-1 mr-3" />
                      <p className="text-gray-600">Our workshop will craft custom cabinetry with precision and care</p>
                    </div>
                    <div className="flex items-start">
                      <FaCheck className="text-secondary mt-1 mr-3" />
                      <p className="text-gray-600">We'll coordinate deliveries and prepare your home for installation</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
          
          {/* Step 4 */}
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <FadeIn direction="right" className="lg:col-span-7 lg:order-2">
                <div className="lg:pl-8">
                  <div className="flex items-center mb-4">
                    <FaTools className="text-secondary text-2xl mr-3" />
                    <h3 className="text-2xl font-bold text-primary font-serif">Installation & Completion</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    Our experienced installation team will transform your space with minimal disruption to your home life. We pride ourselves on meticulous attention to detail, ensuring every component is perfectly fitted and functioning flawlessly.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <FaCheck className="text-secondary mt-1 mr-3" />
                      <p className="text-gray-600">Our skilled installers will work efficiently and cleanly</p>
                    </div>
                    <div className="flex items-start">
                      <FaCheck className="text-secondary mt-1 mr-3" />
                      <p className="text-gray-600">We'll coordinate with plumbers, electricians, and other tradespeople</p>
                    </div>
                    <div className="flex items-start">
                      <FaCheck className="text-secondary mt-1 mr-3" />
                      <p className="text-gray-600">We'll conduct a final walk-through to ensure everything meets our high standards</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              <FadeIn direction="left" delay={0.2} className="lg:col-span-5 lg:order-1">
                <div className="relative rounded-lg overflow-hidden shadow-custom h-[400px]">
                  <Image 
                    src="/images/kitchen-4.jpg.jpeg" 
                    alt="Kitchen Installation" 
                    fill 
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <div className="bg-white/90 h-16 w-16 rounded-full flex items-center justify-center">
                      <span className="text-primary text-2xl font-bold">04</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs about the design process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Common questions about our kitchen design process and what to expect.
              </p>
            </div>
          </FadeIn>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* FAQ 1 */}
              <FadeIn direction="up" delay={0.1}>
                <div className="bg-gray-50 rounded-lg p-8 shadow-custom">
                  <h3 className="text-xl font-bold text-primary mb-4">How long does the entire kitchen design process take?</h3>
                  <p className="text-gray-600">
                    The timeline varies depending on the complexity and scope of your project. Typically, from initial consultation to completed installation, most projects take between 8-12 weeks. During your consultation, we'll provide a more accurate timeline based on your specific requirements and our current schedule.
                  </p>
                </div>
              </FadeIn>
              
              {/* FAQ 2 */}
              <FadeIn direction="up" delay={0.2}>
                <div className="bg-gray-50 rounded-lg p-8 shadow-custom">
                  <h3 className="text-xl font-bold text-primary mb-4">Do I need to know exactly what I want before our first meeting?</h3>
                  <p className="text-gray-600">
                    Not at all! While it's helpful to have some ideas or inspiration, our design team is skilled at guiding you through the process. We'll ask the right questions to understand your needs and preferences, and can provide suggestions based on our experience. Many clients find their vision evolves significantly during the design process.
                  </p>
                </div>
              </FadeIn>
              
              {/* FAQ 3 */}
              <FadeIn direction="up" delay={0.3}>
                <div className="bg-gray-50 rounded-lg p-8 shadow-custom">
                  <h3 className="text-xl font-bold text-primary mb-4">Can you work with my existing kitchen layout?</h3>
                  <p className="text-gray-600">
                    Yes, we can work with your existing layout if it functions well for you. However, part of our design process involves analyzing your space for optimal flow and functionality. We often suggest modifications to improve ergonomics, storage, and overall usability, even when keeping the basic footprint the same.
                  </p>
                </div>
              </FadeIn>
              
              {/* FAQ 4 */}
              <FadeIn direction="up" delay={0.4}>
                <div className="bg-gray-50 rounded-lg p-8 shadow-custom">
                  <h3 className="text-xl font-bold text-primary mb-4">What happens if I want to make changes during the process?</h3>
                  <p className="text-gray-600">
                    We understand that visualizing the final result can be challenging, and sometimes you may want to make changes after seeing things take shape. We build some flexibility into our process, particularly during the design phase. Once manufacturing begins, significant changes become more difficult and potentially costly. We'll always discuss the implications of any requested changes with you.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <FadeIn direction="right">
              <div className="mb-8 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-serif">Ready to Start Your Kitchen Journey?</h2>
                <p className="text-primary/80">
                  Contact us today to arrange your free initial consultation.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-700 transition-colors text-center"
                >
                  Book a Consultation
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