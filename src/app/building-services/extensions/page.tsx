'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheck, FaPhoneAlt, FaHome, FaBuilding } from 'react-icons/fa';
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

export default function ExtensionsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-gray-900">
          <Image 
            src="/images/extension-1.jpg" 
            alt="Home Extension Services" 
            fill 
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Home Extension Services</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Create additional living space with beautifully designed and expertly built home extensions that complement your existing property.
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
                    src="/images/extension-2.jpg" 
                    alt="Home Extension Design" 
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
                  Expand Your Living Space with a Bespoke Extension
                </h2>
                <p className="text-gray-600 mb-6">
                  At Bookham Kitchens, we understand that as your family grows or your lifestyle evolves, you may need additional space without the disruption of moving. Our home extension services provide the perfect solution, allowing you to expand your living area while enhancing the value of your property.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you're looking for a rear extension to create an open-plan kitchen-diner, a side extension to add a new living room, or a two-storey extension to accommodate additional bedrooms, our team of architects, designers, and builders will work with you to create a seamless addition that complements your existing home both aesthetically and functionally.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Bespoke Designs</h3>
                      <p className="text-gray-600 text-sm">Tailored to your specific needs</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Full Project Management</h3>
                      <p className="text-gray-600 text-sm">From planning to final touches</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Quality Craftsmanship</h3>
                      <p className="text-gray-600 text-sm">Built to the highest standards</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center mt-1 mr-3">
                      <FaCheck className="text-secondary h-3 w-3" />
                    </div>
                    <div>
                      <h3 className="font-bold text-primary">Seamless Integration</h3>
                      <p className="text-gray-600 text-sm">Perfectly matched with existing property</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Types of Extensions */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Types of Extensions We Offer</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We specialize in a variety of extension types to meet your specific needs and enhance your living space.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Extension Type 1 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-white p-8 rounded-lg shadow-custom h-full">
                <div className="aspect-w-16 aspect-h-10 mb-6 rounded-lg overflow-hidden">
                  <Image 
                    src="/images/extension-3.jpg" 
                    alt="Rear Extension" 
                    width={400}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Rear Extensions</h3>
                <p className="text-gray-600 mb-4">
                  Extend your home into your garden space, ideal for creating open-plan kitchen-diners or additional family rooms that connect seamlessly with your outdoor area.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                    <span className="text-gray-600">Single or double-storey options</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                    <span className="text-gray-600">Flexible designs for various uses</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                    <span className="text-gray-600">Indoor-outdoor living solutions</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
            
            {/* Extension Type 2 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-white p-8 rounded-lg shadow-custom h-full">
                <div className="aspect-w-16 aspect-h-10 mb-6 rounded-lg overflow-hidden">
                  <Image 
                    src="/images/extension-4.jpg" 
                    alt="Side Extension" 
                    width={400}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Side Extensions</h3>
                <p className="text-gray-600 mb-4">
                  Utilize the often underused space at the side of your property to create additional rooms or extend existing ones for more spacious living.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                    <span className="text-gray-600">Perfect for semi-detached homes</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                    <span className="text-gray-600">Can include utility rooms or studies</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                    <span className="text-gray-600">Maximizes underutilized space</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
            
            {/* Extension Type 3 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="bg-white p-8 rounded-lg shadow-custom h-full">
                <div className="aspect-w-16 aspect-h-10 mb-6 rounded-lg overflow-hidden">
                  <Image 
                    src="/images/extension-5.jpg" 
                    alt="Two-Storey Extension" 
                    width={400}
                    height={250}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Two-Storey Extensions</h3>
                <p className="text-gray-600 mb-4">
                  Maximize your additional space by extending both upstairs and downstairs, providing extra bedrooms, bathrooms, or living areas.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                    <span className="text-gray-600">More cost-effective per square meter</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                    <span className="text-gray-600">Additional bedrooms and bathrooms</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-secondary h-4 w-4 mt-1 mr-2" />
                    <span className="text-gray-600">Significant increase in property value</span>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Extension Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Our Extension Process</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                A comprehensive approach from initial concept to final handover, ensuring a smooth and stress-free extension project.
              </p>
            </div>
          </FadeIn>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-secondary/20 hidden md:block"></div>
            
            <div className="space-y-12">
              {/* Step 1 */}
              <FadeIn direction="right">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                    <h3 className="text-xl font-bold text-primary mb-3">Initial Consultation</h3>
                    <p className="text-gray-600">
                      We meet with you to understand your vision, requirements, and budget. Our team assesses your property and discusses feasibility, potential designs, and planning considerations to establish a clear project brief.
                    </p>
                  </div>
                  <div className="md:w-16 flex justify-center">
                    <div className="h-16 w-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl z-10">1</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block">
                    <div className="rounded-lg overflow-hidden shadow-custom">
                      <Image 
                        src="/images/extension-consultation.jpg" 
                        alt="Initial Consultation" 
                        width={400}
                        height={250}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              {/* Step 2 */}
              <FadeIn direction="left">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 hidden md:block md:text-right">
                    <div className="rounded-lg overflow-hidden shadow-custom">
                      <Image 
                        src="/images/extension-design.jpg" 
                        alt="Design & Planning" 
                        width={400}
                        height={250}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="md:w-16 flex justify-center">
                    <div className="h-16 w-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl z-10">2</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 mb-8 md:mb-0">
                    <h3 className="text-xl font-bold text-primary mb-3">Design & Planning</h3>
                    <p className="text-gray-600">
                      Our architects create detailed designs and 3D visualizations based on your requirements. We submit planning applications and building regulations approval, handling all paperwork and negotiations with local authorities.
                    </p>
                  </div>
                </div>
              </FadeIn>
              
              {/* Step 3 */}
              <FadeIn direction="right">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right mb-8 md:mb-0">
                    <h3 className="text-xl font-bold text-primary mb-3">Construction & Project Management</h3>
                    <p className="text-gray-600">
                      Once approvals are in place, our skilled construction team begins building your extension. Our project managers oversee all aspects of the build, coordinating tradespeople, managing timelines, and ensuring quality standards are maintained.
                    </p>
                  </div>
                  <div className="md:w-16 flex justify-center">
                    <div className="h-16 w-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl z-10">3</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12 hidden md:block">
                    <div className="rounded-lg overflow-hidden shadow-custom">
                      <Image 
                        src="/images/extension-construction.jpg" 
                        alt="Construction" 
                        width={400}
                        height={250}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                </div>
              </FadeIn>
              
              {/* Step 4 */}
              <FadeIn direction="left">
                <div className="flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 hidden md:block md:text-right">
                    <div className="rounded-lg overflow-hidden shadow-custom">
                      <Image 
                        src="/images/extension-completion.jpg" 
                        alt="Completion & Handover" 
                        width={400}
                        height={250}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="md:w-16 flex justify-center">
                    <div className="h-16 w-16 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl z-10">4</div>
                  </div>
                  <div className="md:w-1/2 md:pl-12">
                    <h3 className="text-xl font-bold text-primary mb-3">Completion & Handover</h3>
                    <p className="text-gray-600">
                      We complete all finishing touches and conduct thorough quality inspections. Once everything meets our high standards, we provide you with all necessary certificates and warranties, along with a detailed walkthrough of your new space.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      
      {/* Planning & Regulations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6 font-serif">
                  Planning Permission & Building Regulations
                </h2>
                <p className="text-gray-600 mb-6">
                  Navigating the complexities of planning permissions and building regulations can be daunting. Our experienced team handles all aspects of the approval process, ensuring your extension complies with all legal requirements and proceeds smoothly.
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Permitted Development Rights</h3>
                    <p className="text-gray-600">
                      Many extensions fall under permitted development rights, which allow certain building works to be carried out without the need for planning permission. We assess your property to determine if your project qualifies and guide you through the process accordingly.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Planning Applications</h3>
                    <p className="text-gray-600">
                      For extensions requiring planning permission, we prepare and submit detailed applications, including all necessary documentation, drawings, and supporting materials. Our team manages the entire process, responding to queries and negotiating with planning officers to secure approval.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-3">Building Regulations Compliance</h3>
                    <p className="text-gray-600">
                      All extensions must comply with building regulations to ensure they are structurally sound, energy-efficient, and safe. We handle all building regulations applications and ensure your extension is built to meet or exceed these standards, arranging inspections and obtaining completion certificates.
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded -z-10"></div>
                <div className="relative rounded-lg overflow-hidden shadow-custom">
                  <Image 
                    src="/images/extension-planning.jpg" 
                    alt="Planning & Regulations" 
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary/20 rounded -z-10"></div>
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
                  We decided to add a two-storey extension to our home rather than move, and choosing Bookham Kitchens for this project was the best decision we made. From the initial design concept to the final handover, their attention to detail was exceptional. The team managed all planning issues efficiently, keeping us informed throughout the process. The construction phase was well organized with minimal disruption to our family life. The quality of work is outstanding, and the extension has transformed our home, giving us the additional bedroom and extended kitchen-diner we needed. It feels like it's always been part of the house - exactly what we wanted!
                </p>
                <div className="flex items-center">
                  <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                    <span className="text-accent font-bold">RP</span>
                  </div>
                  <div>
                    <h4 className="font-bold">Robert & Patricia Thompson</h4>
                    <p className="text-white/70">Guildford, Surrey</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Common questions about our home extension services.
              </p>
            </div>
          </FadeIn>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <FadeIn direction="up" delay={0.1}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-3">How long does an extension typically take?</h3>
                  <p className="text-gray-600">
                    The timeline varies depending on the size and complexity of the project. A single-storey rear extension typically takes 10-12 weeks for construction, while a two-storey extension might take 12-16 weeks. Planning and design phases usually add 8-12 weeks before construction begins.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn direction="up" delay={0.2}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-3">Will I need to move out during the build?</h3>
                  <p className="text-gray-600">
                    In most cases, you can remain in your home during the extension construction. We create dust barriers and schedule work to minimize disruption. For extensive renovations involving utilities, there might be short periods where services are interrupted, but we plan these carefully with you.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn direction="up" delay={0.3}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-3">How much will my extension cost?</h3>
                  <p className="text-gray-600">
                    Extension costs vary widely based on size, complexity, and specification level. As a general guide, single-storey extensions typically range from £1,500-£2,000 per square meter, while two-storey extensions can cost £1,800-£2,500 per square meter. We provide detailed quotes after initial consultations.
                  </p>
                </div>
              </FadeIn>
              
              <FadeIn direction="up" delay={0.4}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-3">Do you handle everything, including utilities?</h3>
                  <p className="text-gray-600">
                    Yes, we provide a complete end-to-end service. This includes all electrical work, plumbing, heating, and other utilities required for your extension. All our tradespeople are fully qualified and certified, and all work is completed to current building regulations standards.
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
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 font-serif">Ready to Extend Your Home?</h2>
                <p className="text-primary/80">
                  Contact us today for a free consultation and quote for your extension project.
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