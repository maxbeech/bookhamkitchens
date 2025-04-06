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

export default function FittedKitchensPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gray-900">
          <Image 
            src="/images/kitchen-1.jpg" 
            alt="Bespoke Fitted Kitchen by Bookham Kitchens" 
            fill 
            className="object-cover opacity-60"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/60" />
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Bespoke Fitted Kitchens</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Custom-designed kitchens tailored to your space, style, and lifestyle. Our bespoke kitchen solutions blend 
              functionality with beautiful design.
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
                View Our Kitchen Portfolio
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
                    alt="Custom fitted kitchen with island" 
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
                  Your Dream Kitchen, Expertly Crafted
                </h2>
                <p className="text-gray-600 mb-6">
                  At Bookham Kitchens, we specialize in creating truly bespoke fitted kitchens that reflect your individual style and meet your practical needs. Our fitted kitchens are designed and built to seamlessly integrate with your space, making the most of every inch while providing a stunning focal point for your home.
                </p>
                <p className="text-gray-600 mb-6">
                  From contemporary handleless designs to traditional shaker styles, our expert designers work closely with you to create a kitchen that's as unique as you are. We combine the finest materials, premium appliances, and skilled craftsmanship to deliver kitchens of exceptional quality that stand the test of time.
                </p>
                <div className="border-l-4 border-accent pl-4 italic text-gray-700 my-8">
                  "We believe that a well-designed kitchen should be both beautiful and practical, reflecting your lifestyle while enhancing your daily experience."
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="flex items-start">
                    <FaCheck className="text-secondary mt-1 mr-2" />
                    <span className="text-gray-700">Custom cabinetry</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheck className="text-secondary mt-1 mr-2" />
                    <span className="text-gray-700">Premium worktops</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheck className="text-secondary mt-1 mr-2" />
                    <span className="text-gray-700">High-quality appliances</span>
                  </div>
                  <div className="flex items-start">
                    <FaCheck className="text-secondary mt-1 mr-2" />
                    <span className="text-gray-700">Expert installation</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-20 bg-gray-50 pattern-bg">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-accent/20 text-secondary rounded-full text-sm font-medium mb-4">
                Our Approach
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">The Kitchen Design Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From initial consultation to final installation, our comprehensive process ensures that your fitted kitchen project runs smoothly.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-custom h-full relative">
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 mt-4">Initial Consultation</h3>
                <p className="text-gray-600">
                  We begin with a detailed discussion of your requirements, preferences, and budget. Our designers will visit your home to assess the space and understand your vision.
                </p>
              </div>
            </FadeIn>
            
            {/* Step 2 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-custom h-full relative">
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 mt-4">Design & Planning</h3>
                <p className="text-gray-600">
                  Our designers create detailed 3D renderings of your kitchen, allowing you to visualize the final result. We refine the design until you're completely satisfied.
                </p>
              </div>
            </FadeIn>
            
            {/* Step 3 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-custom h-full relative">
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 mt-4">Manufacturing</h3>
                <p className="text-gray-600">
                  Once the design is approved, our skilled craftsmen begin manufacturing your bespoke kitchen using the finest materials and precision techniques.
                </p>
              </div>
            </FadeIn>
            
            {/* Step 4 */}
            <FadeIn direction="up" delay={0.4}>
              <div className="bg-white p-8 rounded-lg shadow-custom h-full relative">
                <div className="absolute -top-5 -left-5 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 mt-4">Installation</h3>
                <p className="text-gray-600">
                  Our experienced installation team ensures your kitchen is fitted to the highest standards, with meticulous attention to detail and minimal disruption.
                </p>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.5}>
            <div className="text-center mt-12">
              <Link 
                href="/kitchens/design-process" 
                className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors"
              >
                Learn more about our design process
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Kitchen Styles Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-accent/20 text-secondary rounded-full text-sm font-medium mb-4">
                Style Options
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Explore Kitchen Styles</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From classic to contemporary, we offer a wide range of kitchen styles to suit every taste and preference.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Style 1 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white rounded-lg shadow-custom overflow-hidden group">
                <div className="relative h-64">
                  <Image 
                    src="/images/kitchen-3.jpg" 
                    alt="Contemporary Kitchen Style" 
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
                    Clean lines, handleless cabinets, and innovative storage solutions define our contemporary kitchens. Perfect for modern homes and open-plan living spaces.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            {/* Style 2 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white rounded-lg shadow-custom overflow-hidden group">
                <div className="relative h-64">
                  <Image 
                    src="/images/kitchen-1.jpg" 
                    alt="Shaker Kitchen Style" 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white font-serif">Shaker</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Timeless and versatile, our shaker kitchens blend traditional craftsmanship with modern functionality. A popular choice for both period and new-build homes.
                  </p>
                </div>
              </div>
            </FadeIn>
            
            {/* Style 3 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white rounded-lg shadow-custom overflow-hidden group">
                <div className="relative h-64">
                  <Image 
                    src="/images/kitchen-6.jpg" 
                    alt="Traditional Kitchen Style" 
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
                    Ornate details, rich materials, and classic proportions characterize our traditional kitchens. Ideal for creating a warm, inviting heart of the home.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.4}>
            <div className="text-center mt-12">
              <Link 
                href="/portfolio" 
                className="px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary-700 transition-colors"
              >
                View Our Kitchen Portfolio
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Materials & Finishes */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <div className="inline-block px-4 py-1 bg-accent/20 text-secondary rounded-full text-sm font-medium mb-4">
                  Quality Materials
                </div>
                <h2 className="text-3xl font-bold text-primary mb-6 font-serif">
                  Premium Materials & Finishes
                </h2>
                <p className="text-gray-600 mb-6">
                  We use only the highest quality materials in our fitted kitchens, ensuring durability, longevity, and timeless aesthetic appeal. Our extensive range of finishes allows you to personalize your kitchen to reflect your unique style.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-primary mb-2">Cabinetry Options</h3>
                    <p className="text-gray-600 text-sm">
                      Solid wood, painted finishes, high-gloss acrylic, matt lacquer, and laminate options in a spectrum of colors.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-primary mb-2">Worktop Materials</h3>
                    <p className="text-gray-600 text-sm">
                      Granite, quartz, solid wood, laminate, and composite materials, each offering unique benefits and aesthetic qualities.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-bold text-primary mb-2">Hardware & Accessories</h3>
                    <p className="text-gray-600 text-sm">
                      Premium handles, soft-close mechanisms, integrated lighting, and innovative storage solutions to enhance functionality.
                    </p>
                  </div>
                </div>
                
                <Link 
                  href="/contact" 
                  className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors"
                >
                  Schedule a showroom visit to explore our material options
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-lg overflow-hidden shadow-custom">
                  <Image 
                    src="/images/kitchen-cabinets-1.jpeg" 
                    alt="Premium kitchen cabinetry" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden shadow-custom">
                  <Image 
                    src="/images/kitchen-cabinets-closeup-1.jpeg" 
                    alt="Kitchen cabinet details" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-lg overflow-hidden shadow-custom col-span-2">
                  <Image 
                    src="/images/bookham-kitchen-suppliers-20.jpg" 
                    alt="Kitchen worktop materials" 
                    fill 
                    className="object-cover"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-white/20 text-white rounded-full text-sm font-medium mb-4">
                Client Stories
              </div>
              <h2 className="text-3xl font-bold mb-4 font-serif">What Our Clients Say</h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Hear from homeowners who have transformed their kitchens with our bespoke fitted kitchen service.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent font-bold">MB</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Michael & Belinda Thompson</h4>
                    <p className="text-white/70">Weybridge, Surrey</p>
                  </div>
                </div>
                <p className="text-white/90 italic">
                  "Bookham Kitchens transformed our outdated kitchen into a stunning, functional space that has become the heart of our home. Their attention to detail and craftsmanship is unmatched, and the team was a pleasure to work with from start to finish."
                </p>
              </div>
            </FadeIn>
            
            {/* Testimonial 2 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent font-bold">SC</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Sarah Clarke</h4>
                    <p className="text-white/70">Guildford, Surrey</p>
                  </div>
                </div>
                <p className="text-white/90 italic">
                  "The design process was collaborative and enjoyable. Bookham Kitchens listened to our ideas but also brought their expertise to the table, suggesting solutions we hadn't considered. The end result exceeded our expectations in terms of both aesthetics and functionality."
                </p>
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
              <div className="mb-8 md:mb-0 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-serif">
                  Ready to Create Your Dream Kitchen?
                </h2>
                <p className="text-primary/80 max-w-xl">
                  Contact us today to arrange a free design consultation and take the first step towards your bespoke fitted kitchen.
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