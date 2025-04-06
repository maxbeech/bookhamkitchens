'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheck, FaPhoneAlt, FaRuler } from 'react-icons/fa';
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

export default function BespokeFurniturePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-gray-900">
          <Image 
            src="/images/custom-tv-unit-01.jpg" 
            alt="Bespoke Furniture by Bookham Kitchens" 
            fill 
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Bespoke Furniture</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Custom-made furniture designed specifically for your home, lifestyle, and unique spatial requirements.
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
                    src="/images/custom-tv-unit-01.jpg" 
                    alt="Custom Bespoke Furniture" 
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
                  Furniture Made Precisely for Your Home
                </h2>
                <p className="text-gray-600 mb-6">
                  At Bookham Kitchens, our expertise extends beyond the kitchen to create beautiful bespoke furniture for every room in your home. We specialize in designing and crafting custom furniture pieces that are tailored to your exact specifications, ensuring perfect integration with your space and style.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you're looking for built-in storage solutions, statement pieces, or furniture designed to overcome challenging spaces, our skilled craftsmen can bring your vision to life. Each piece is meticulously designed and manufactured using the highest quality materials and finishes to create enduring furniture that you'll cherish for years to come.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Completely Custom</h3>
                      <p className="text-gray-600 text-sm">Designed precisely for your space and needs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Superior Craftsmanship</h3>
                      <p className="text-gray-600 text-sm">Created by skilled artisans with attention to detail</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Premium Materials</h3>
                      <p className="text-gray-600 text-sm">High-quality woods and finishes that last</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Perfect Integration</h3>
                      <p className="text-gray-600 text-sm">Harmonizes beautifully with your existing décor</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Furniture Solutions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Our Bespoke Furniture Solutions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From media units to dining tables, we create beautiful custom furniture for every room in your home.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Solution 1 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white rounded-lg shadow-custom overflow-hidden h-full">
                <div className="relative h-64">
                  <Image 
                    src="/images/custom-tv-unit-01.jpg" 
                    alt="Custom Media Units" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Media Units & Entertainment Centers</h3>
                  <p className="text-gray-600">
                    Tailored storage solutions for your entertainment equipment, with integrated cable management and designed to complement your living space.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                      <span className="text-gray-600">Concealed equipment and cable storage</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                      <span className="text-gray-600">Integrated lighting options</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                      <span className="text-gray-600">Custom dimensions to fit your TV and components</span>
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
                    src="/images/kitchen-2.jpg" 
                    alt="Fitted Storage Solutions" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Fitted Storage Solutions</h3>
                  <p className="text-gray-600">
                    Maximize your space with custom storage designed to fit into alcoves, under stairs, or any challenging space in your home.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                      <span className="text-gray-600">Made-to-measure for awkward spaces</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                      <span className="text-gray-600">Optimized interior organization</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                      <span className="text-gray-600">Seamless integration with your walls and architecture</span>
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
                    src="/images/kitchen-6.jpg" 
                    alt="Statement Furniture Pieces" 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">Statement Furniture Pieces</h3>
                  <p className="text-gray-600">
                    Unique, one-of-a-kind furniture items designed to be the centerpiece of your room, from dining tables to sideboards.
                  </p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-start">
                      <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                      <span className="text-gray-600">Distinctive designs tailored to your taste</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                      <span className="text-gray-600">Premium materials and exceptional finishes</span>
                    </li>
                    <li className="flex items-start">
                      <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                      <span className="text-gray-600">Heirloom quality craftsmanship</span>
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
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Our Bespoke Furniture Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                From initial concept to final installation, we ensure every detail of your bespoke furniture is perfect.
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
                <h3 className="text-xl font-bold text-primary mb-3">Initial Consultation</h3>
                <p className="text-gray-600">
                  We begin by understanding your needs, preferences, and the specific space where your furniture will be placed. This includes taking detailed measurements and discussing materials and finishes.
                </p>
              </div>
            </FadeIn>
            
            {/* Step 2 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-6 rounded-lg shadow-custom h-full border-t-4 border-secondary">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-secondary font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Design & Visualization</h3>
                <p className="text-gray-600">
                  Our designers create detailed plans and 3D visualizations of your furniture, allowing you to see exactly how the finished piece will look in your space. We refine the design based on your feedback.
                </p>
              </div>
            </FadeIn>
            
            {/* Step 3 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white p-6 rounded-lg shadow-custom h-full border-t-4 border-secondary">
                <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-secondary font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Craftsmanship</h3>
                <p className="text-gray-600">
                  Once the design is approved, our skilled craftsmen begin creating your bespoke furniture using traditional woodworking techniques combined with modern precision tools.
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
                  Our experienced installation team delivers and precisely places your new furniture, ensuring it fits perfectly in your space and functions exactly as designed.
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
                  Materials & Craftsmanship
                </h2>
                <p className="text-gray-600 mb-6">
                  We use only the finest materials and time-honored woodworking techniques to create furniture that will last for generations.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Premium Woods</h3>
                    <p className="text-gray-600 mb-3">
                      Our bespoke furniture is crafted from carefully selected woods chosen for both beauty and durability:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                      <div className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">European Oak</span>
                          <p className="text-sm text-gray-600">Strong, versatile with beautiful grain</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">American Black Walnut</span>
                          <p className="text-sm text-gray-600">Rich, dark tones with elegant character</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Maple</span>
                          <p className="text-sm text-gray-600">Fine-grained with a subtle, light appearance</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Cherry</span>
                          <p className="text-sm text-gray-600">Warm tones that deepen beautifully with age</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Joinery Techniques</h3>
                    <p className="text-gray-600 mb-3">
                      Our craftsmen employ traditional joinery methods that ensure strength and longevity:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Dovetail Joints</span> - For exceptional strength in drawers and boxes
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Mortise and Tenon</span> - For solid, long-lasting frame construction
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Tongue and Groove</span> - For stable panel construction
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Finishes</h3>
                    <p className="text-gray-600 mb-3">
                      Each piece is meticulously finished to enhance and protect the natural beauty of the wood:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Hand-rubbed Oils</span> - Enhances grain while providing natural protection
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Traditional Wax</span> - Creates a warm, lustrous patina
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Lacquers</span> - For modern, durable surfaces in various sheens
                        </div>
                      </li>
                      <li className="flex items-start">
                        <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                        <div>
                          <span className="font-bold text-primary">Hand-painted Finishes</span> - For colored pieces that complement your décor
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
                    alt="Wood Finish Furniture" 
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-custom">
                  <Image 
                    src="/images/kitchen-3.jpg" 
                    alt="Craftsmanship Details" 
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-custom">
                  <Image 
                    src="/images/kitchen-5.jpeg" 
                    alt="Furniture Joinery" 
                    width={400}
                    height={300}
                    className="w-full h-auto"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-custom">
                  <Image 
                    src="/images/custom-tv-unit-01.jpg" 
                    alt="Custom Built Furniture" 
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
                  We commissioned Bookham Kitchens to create a bespoke media unit for our living room, and the result exceeded our expectations. The design process was collaborative and thorough, with the team carefully considering our needs and the specific dimensions of our space. The finished piece is not only beautiful and practical but has completely transformed the room. The quality of craftsmanship is exceptional, and we've received numerous compliments from visitors. We wouldn't hesitate to recommend their bespoke furniture service.
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent font-bold">EP</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Emma & Paul Stevenson</h4>
                    <p className="text-white/70">Esher, Surrey</p>
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
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-serif">Ready to Create Your Perfect Piece?</h2>
                <p className="text-primary/80">
                  Contact us today to discuss your bespoke furniture requirements.
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