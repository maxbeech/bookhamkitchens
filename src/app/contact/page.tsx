'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

// Animation component (reused from homepage)
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

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    projectType: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    // Simulate a form submission
    try {
      // In a real application, you would send the data to your API endpoint
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        projectType: '',
      });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-gray-900">
          <Image 
            src="/images/kitchen-2.jpg" 
            alt="Bookham Kitchens Contact" 
            fill 
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Contact Us</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Let's discuss your next project or visit our showroom to see what we can do for you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact Details and Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Details */}
            <FadeIn direction="right">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-8 font-serif">Get In Touch</h2>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex">
                    <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                      <FaPhoneAlt className="text-secondary h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary">Phone</h3>
                      <a href="tel:+441932391183" className="text-gray-600 hover:text-secondary transition-colors">
                        01932 391183
                      </a>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex">
                    <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                      <FaEnvelope className="text-secondary h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary">Email</h3>
                      <a href="mailto:sales@bookhamkitchens.co.uk" className="text-gray-600 hover:text-secondary transition-colors">
                        sales@bookhamkitchens.co.uk
                      </a>
                    </div>
                  </div>
                  
                  {/* Address */}
                  <div className="flex">
                    <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                      <FaMapMarkerAlt className="text-secondary h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary">Showroom</h3>
                      <address className="text-gray-600 not-italic">
                        25 Church Road<br />
                        Great Bookham<br />
                        Leatherhead<br />
                        Surrey, KT23 3PG
                      </address>
                    </div>
                  </div>
                  
                  {/* Opening Hours */}
                  <div className="flex">
                    <div className="h-12 w-12 bg-accent/20 rounded-full flex items-center justify-center mr-4">
                      <FaClock className="text-secondary h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-primary">Opening Hours</h3>
                      <ul className="text-gray-600">
                        <li>Monday - Friday: 9:00am - 5:30pm</li>
                        <li>Saturday: 9:00am - 4:00pm</li>
                        <li>Sunday: Closed</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Map */}
                <div className="mt-12">
                  <h3 className="text-xl font-bold text-primary mb-4 font-serif">Find Us</h3>
                  <div className="h-[300px] w-full relative rounded-lg overflow-hidden shadow-custom">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9968.626199696426!2d-0.38394484923088283!3d51.27949582563362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4875e1d5ee9da24d%3A0x9af7e8ef1c2e0804!2sGreat%20Bookham%2C%20Leatherhead!5e0!3m2!1sen!2suk!4v1665051495143!5m2!1sen!2suk" 
                      width="600" 
                      height="450" 
                      style={{ border: 0 }}
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            {/* Contact Form */}
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-gray-50 p-8 rounded-lg shadow-custom">
                <h2 className="text-2xl font-bold text-primary mb-6 font-serif">Send Us a Message</h2>
                
                {submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 text-green-800 rounded-md p-4 mb-6"
                  >
                    <p className="font-medium">Thank you for contacting us!</p>
                    <p className="mt-1">We've received your message and will get back to you as soon as possible.</p>
                    <button 
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-green-700 underline hover:text-green-900"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-800 rounded-md p-4 mb-6">
                        {error}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                        />
                      </div>
                      
                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                        />
                      </div>
                    </div>
                    
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                      />
                    </div>
                    
                    {/* Project Type */}
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                        What service are you interested in?
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                      >
                        <option value="">Please select</option>
                        <option value="fitted-kitchen">Fitted Kitchen</option>
                        <option value="replacement-doors">Replacement Doors</option>
                        <option value="cabinet-spray-painting">Cabinet Spray Painting</option>
                        <option value="bedroom-furniture">Bedroom Furniture</option>
                        <option value="home-office">Home Office</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-colors"
                      ></textarea>
                    </div>
                    
                    {/* Submit Button */}
                    <div>
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-700 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </motion.button>
                    </div>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Projects Background */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-primary mb-4 font-serif">Visit Our Showroom</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our showroom in Great Bookham showcases a range of our kitchens and materials.
                Stop by to get inspired and discuss your project in person.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Image 1 */}
            <FadeIn direction="up" delay={0.1}>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-custom group">
                <Image 
                  src="/images/kitchen-1.jpg" 
                  alt="Bookham Kitchens Showroom" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </FadeIn>
            
            {/* Image 2 */}
            <FadeIn direction="up" delay={0.2}>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-custom group">
                <Image 
                  src="/images/kitchen-3.jpg" 
                  alt="Bookham Kitchens Display Kitchen" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </FadeIn>
            
            {/* Image 3 */}
            <FadeIn direction="up" delay={0.3}>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-custom group">
                <Image 
                  src="/images/kitchen-6.jpg" 
                  alt="Bookham Kitchens Materials Display" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
} 