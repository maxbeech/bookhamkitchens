'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheck, FaPhoneAlt, FaHome, FaTools, FaHammer } from 'react-icons/fa';
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

export default function RenovationsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-gray-900">
          <Image 
            src="/images/renovation-1.jpg" 
            alt="Home Renovation Services" 
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
              Transform your living spaces with expert renovations that blend style, functionality, and craftsmanship.
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
                    alt="Home Renovation Design" 
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
                  Breathe New Life Into Your Home
                </h2>
                <p className="text-gray-600 mb-6">
                  At Bookham Kitchens, we understand that your home should evolve with your changing needs and preferences. Our comprehensive renovation services are designed to transform tired, outdated spaces into beautifully refreshed environments that reflect your style and enhance your quality of life.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you're looking to update a single room or undertake a complete home transformation, our expert team handles every aspect of the renovation process with meticulous attention to detail and unwavering commitment to quality craftsmanship.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Tailored Solutions</h3>
                      <p className="text-gray-600 text-sm">Customized to your specific needs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Full Project Management</h3>
                      <p className="text-gray-600 text-sm">From design to completion</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Expert Craftsmanship</h3>
                      <p className="text-gray-600 text-sm">Skilled professionals delivering quality</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Sustainable Options</h3>
                      <p className="text-gray-600 text-sm">Eco-friendly materials and methods</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Renovation Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Our Renovation Services</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer a comprehensive range of renovation services to transform every area of your home.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Renovation Service 1 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-custom h-full">
                <div className="aspect-w-16 aspect-h-10 mb-6 rounded-lg overflow-hidden">
                  <Image 
                    src="/images/kitchen-renovation.jpg" 
                    alt="Kitchen Renovation" 
                    width={400}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-serif">Kitchen Renovations</h3>
                <p className="text-gray-600 mb-4">
                  Transform your kitchen into a stunning, functional space that becomes the heart of your home. Our kitchen renovations combine beautiful design with practical layouts and high-quality materials.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <FaCheck className="text-secondary mr-2 h-3 w-3" />
                    <span>Custom cabinetry and storage solutions</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <FaCheck className="text-secondary mr-2 h-3 w-3" />
                    <span>Premium countertops and backsplashes</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <FaCheck className="text-secondary mr-2 h-3 w-3" />
                    <span>State-of-the-art appliance integration</span>
                  </li>
                </ul>
                <Link href="/kitchens" className="text-secondary font-medium hover:underline inline-flex items-center">
                  Learn more about our kitchen services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </FadeIn>

            {/* Renovation Service 2 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-custom h-full">
                <div className="aspect-w-16 aspect-h-10 mb-6 rounded-lg overflow-hidden">
                  <Image 
                    src="/images/bathroom-renovation.jpg" 
                    alt="Bathroom Renovation" 
                    width={400}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-serif">Bathroom Renovations</h3>
                <p className="text-gray-600 mb-4">
                  Create a luxurious bathroom retreat with our expert renovation services. We combine beautiful design with practical solutions, ensuring your bathroom is both stylish and functional.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <FaCheck className="text-secondary mr-2 h-3 w-3" />
                    <span>Modern fixtures and fittings</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <FaCheck className="text-secondary mr-2 h-3 w-3" />
                    <span>Waterproofing and tiling expertise</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <FaCheck className="text-secondary mr-2 h-3 w-3" />
                    <span>Spa-like features and ambient lighting</span>
                  </li>
                </ul>
                <Link href="/portfolio" className="text-secondary font-medium hover:underline inline-flex items-center">
                  View our bathroom transformations
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </FadeIn>

            {/* Renovation Service 3 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-custom h-full">
                <div className="aspect-w-16 aspect-h-10 mb-6 rounded-lg overflow-hidden">
                  <Image 
                    src="/images/living-space-renovation.jpg" 
                    alt="Living Space Renovation" 
                    width={400}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-serif">Living Space Renovations</h3>
                <p className="text-gray-600 mb-4">
                  Revitalize your living areas with our comprehensive renovation services. We can transform outdated spaces into modern, comfortable areas that reflect your personal style.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-600">
                    <FaCheck className="text-secondary mr-2 h-3 w-3" />
                    <span>Open-plan transformations</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <FaCheck className="text-secondary mr-2 h-3 w-3" />
                    <span>Custom built-ins and storage solutions</span>
                  </li>
                  <li className="flex items-center text-gray-600">
                    <FaCheck className="text-secondary mr-2 h-3 w-3" />
                    <span>Flooring, wall finishes, and lighting</span>
                  </li>
                </ul>
                <Link href="/home-living" className="text-secondary font-medium hover:underline inline-flex items-center">
                  Explore our living space options
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Renovation Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Our Renovation Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We follow a structured, transparent process to ensure your renovation project runs smoothly from start to finish.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Process Step 1 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-gray-50 p-8 rounded-lg border-t-4 border-secondary h-full">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-secondary">1</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-serif">Consultation</h3>
                <p className="text-gray-600">
                  We begin with an in-depth consultation to understand your vision, requirements, and budget. Our experts will assess your space and discuss possibilities.
                </p>
              </div>
            </FadeIn>
            
            {/* Process Step 2 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-gray-50 p-8 rounded-lg border-t-4 border-secondary h-full">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-secondary">2</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-serif">Design & Planning</h3>
                <p className="text-gray-600">
                  Our design team creates detailed plans for your renovation, including 3D renderings where appropriate. We finalize materials, fixtures, and finishes.
                </p>
              </div>
            </FadeIn>
            
            {/* Process Step 3 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-gray-50 p-8 rounded-lg border-t-4 border-secondary h-full">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-secondary">3</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-serif">Construction</h3>
                <p className="text-gray-600">
                  Our skilled craftsmen execute the renovation with precision and care. We manage all trades and ensure the highest standards of workmanship.
                </p>
              </div>
            </FadeIn>
            
            {/* Process Step 4 */}
            <FadeIn direction="up" delay={0.4}>
              <div className="bg-gray-50 p-8 rounded-lg border-t-4 border-secondary h-full">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-6">
                  <span className="text-xl font-bold text-secondary">4</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 font-serif">Completion</h3>
                <p className="text-gray-600">
                  We conduct a thorough inspection with you to ensure every detail meets our standards. We provide maintenance advice and ongoing support.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">What Our Clients Say</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Hear from homeowners who have transformed their spaces with our renovation services.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-custom h-full">
                <div className="flex items-center mb-4">
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Bookham Kitchens transformed our outdated kitchen into a stunning, modern space that has become the focal point of our home. Their attention to detail and craftsmanship was exceptional."
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image 
                      src="/images/testimonial-1.jpg" 
                      alt="Sarah Thompson" 
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Sarah Thompson</h4>
                    <p className="text-gray-500 text-sm">Kitchen Renovation, Leatherhead</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            {/* Testimonial 2 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-custom h-full">
                <div className="flex items-center mb-4">
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "The team at Bookham Kitchens completely renovated our bathroom and the results exceeded our expectations. They were professional, tidy, and delivered on time and within budget."
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image 
                      src="/images/testimonial-2.jpg" 
                      alt="James and Emma Wilson" 
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">James & Emma Wilson</h4>
                    <p className="text-gray-500 text-sm">Bathroom Renovation, Guildford</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            {/* Testimonial 3 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-custom h-full">
                <div className="flex items-center mb-4">
                  <div className="flex text-accent">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Our whole-house renovation was a significant project, but Bookham Kitchens managed it flawlessly. Their communication, craftsmanship, and attention to detail transformed our dated property into a modern, stylish home."
                </p>
                <div className="flex items-center">
                  <div className="mr-4">
                    <Image 
                      src="/images/testimonial-3.jpg" 
                      alt="Richard Bennett" 
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Richard Bennett</h4>
                    <p className="text-gray-500 text-sm">Full House Renovation, Epsom</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif">Ready to Transform Your Home?</h2>
              <p className="text-xl text-white/80 mb-8">
                Contact us today to schedule a free consultation and take the first step toward your dream renovation.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="px-8 py-4 bg-accent text-primary font-medium rounded-md hover:bg-accent-400 transition-colors"
                >
                  Book a Consultation
                </Link>
                <Link 
                  href="/portfolio"
                  className="px-8 py-4 bg-white/10 text-white font-medium rounded-md hover:bg-white/20 transition-colors"
                >
                  View Our Portfolio
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
} 