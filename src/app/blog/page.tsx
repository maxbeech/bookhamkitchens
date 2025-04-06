'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaTag, FaSearch, FaTimes, FaArrowRight } from 'react-icons/fa';
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

// Blog Post Type
interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content?: string;
  imageSrc: string;
  date: string;
  author: string;
  category: string;
  slug: string;
  featured?: boolean;
}

// Blog posts data
const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: '5 Kitchen Design Trends for 2023',
    excerpt: 'Discover the latest kitchen design trends that are shaping modern homes in 2023, from sustainable materials to smart technology integration.',
    imageSrc: '/images/kitchen-6.jpg',
    date: 'May 15, 2023',
    author: 'Sarah Richardson',
    category: 'design-trends',
    slug: '5-kitchen-design-trends-2023',
    featured: true,
  },
  {
    id: '2',
    title: 'How to Choose the Perfect Kitchen Worktop',
    excerpt: 'A comprehensive guide to selecting the right kitchen worktop material for your needs, considering durability, maintenance, and aesthetics.',
    imageSrc: '/images/kitchen-1.jpg',
    date: 'April 22, 2023',
    author: 'David Richardson',
    category: 'kitchen-tips',
    slug: 'choose-perfect-kitchen-worktop',
  },
  {
    id: '3',
    title: 'Maximizing Storage in Small Kitchens',
    excerpt: 'Clever storage solutions and design strategies to make the most of limited kitchen space without compromising on style or functionality.',
    imageSrc: '/images/kitchen-3.jpg',
    date: 'March 18, 2023',
    author: 'James Bennett',
    category: 'kitchen-tips',
    slug: 'maximizing-storage-small-kitchens',
    featured: true,
  },
  {
    id: '4',
    title: 'The Benefits of Cabinet Refacing vs. Replacement',
    excerpt: 'Explore the pros and cons of cabinet refacing compared to full replacement to determine which option is best for your kitchen renovation.',
    imageSrc: '/images/kitchen-5.jpeg',
    date: 'February 10, 2023',
    author: 'Sarah Richardson',
    category: 'renovations',
    slug: 'cabinet-refacing-vs-replacement',
  },
  {
    id: '5',
    title: 'Sustainable Kitchen Design: Eco-Friendly Options',
    excerpt: 'Discover how to create an environmentally conscious kitchen with sustainable materials, energy-efficient appliances, and ethical design choices.',
    imageSrc: '/images/kitchen-2.jpg',
    date: 'January 28, 2023',
    author: 'David Richardson',
    category: 'sustainability',
    slug: 'sustainable-kitchen-design',
  },
  {
    id: '6',
    title: 'Creating the Perfect Kitchen Island',
    excerpt: 'Design considerations and inspirational ideas for incorporating a functional and beautiful kitchen island into your space.',
    imageSrc: '/images/bookham-kitchen-suppliers-20.jpg',
    date: 'December 15, 2022',
    author: 'James Bennett',
    category: 'design-trends',
    slug: 'perfect-kitchen-island',
  },
];

// Categories
const categories = [
  { id: 'all', name: 'All Categories' },
  { id: 'design-trends', name: 'Design Trends' },
  { id: 'kitchen-tips', name: 'Kitchen Tips' },
  { id: 'renovations', name: 'Renovations' },
  { id: 'sustainability', name: 'Sustainability' },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  // Filter posts based on selected category and search term
  useEffect(() => {
    let result = blogPosts;
    
    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(post => post.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const lowercasedSearch = searchTerm.toLowerCase();
      result = result.filter(
        post => 
          post.title.toLowerCase().includes(lowercasedSearch) || 
          post.excerpt.toLowerCase().includes(lowercasedSearch) ||
          post.author.toLowerCase().includes(lowercasedSearch)
      );
    }
    
    setFilteredPosts(result);
  }, [selectedCategory, searchTerm]);

  // Clear search term
  const clearSearch = () => {
    setSearchTerm('');
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-gray-900">
          <Image 
            src="/images/kitchen-2.jpg" 
            alt="Bookham Kitchens Blog" 
            fill 
            className="object-cover opacity-50"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Our Blog</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Insights, ideas, and inspiration for your kitchen and home from the Bookham Kitchens team.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white shadow-sm sticky top-[72px] z-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <div className={`flex items-center bg-gray-100 rounded-full overflow-hidden transition-all duration-300 ${
                isSearchFocused ? 'ring-2 ring-accent' : ''
              }`}>
                <div className="pl-4">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full px-3 py-2 bg-transparent border-none focus:outline-none text-sm"
                />
                {searchTerm && (
                  <button
                    onClick={clearSearch}
                    className="pr-4"
                  >
                    <FaTimes className="text-gray-400 hover:text-gray-600" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts (only show if no filters are applied) */}
      {selectedCategory === 'all' && searchTerm === '' && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <FadeIn>
              <h2 className="text-3xl font-bold text-primary mb-8 font-serif">Featured Articles</h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {blogPosts.filter(post => post.featured).map((post, index) => (
                <FadeIn key={post.id} direction="up" delay={index * 0.1}>
                  <Link href={`/blog/${post.slug}`} className="block group">
                    <div className="bg-white rounded-lg shadow-custom overflow-hidden h-full flex flex-col">
                      <div className="relative h-80 w-full overflow-hidden">
                        <Image
                          src={post.imageSrc}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 right-4 bg-accent text-primary text-xs font-bold px-2 py-1 rounded">
                          Featured
                        </div>
                      </div>
                      <div className="p-6 flex-grow flex flex-col">
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <div className="flex items-center mr-4">
                            <FaCalendarAlt className="mr-2 text-secondary" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center">
                            <FaTag className="mr-2 text-secondary" />
                            <span className="capitalize">{post.category.replace('-', ' ')}</span>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 flex-grow">
                          {post.excerpt}
                        </p>
                        <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                          <span className="text-sm text-gray-500">By {post.author}</span>
                          <span className="text-secondary font-medium flex items-center">
                            Read More
                            <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl font-bold text-primary mb-8 font-serif">
              {selectedCategory === 'all' 
                ? 'All Articles' 
                : `${categories.find(cat => cat.id === selectedCategory)?.name}`}
            </h2>
          </FadeIn>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredPosts.map((post, index) => (
                  <FadeIn key={post.id} direction="up" delay={index * 0.1}>
                    <Link href={`/blog/${post.slug}`} className="block group">
                      <div className="bg-white rounded-lg shadow-custom overflow-hidden h-full flex flex-col">
                        <div className="relative h-56 w-full overflow-hidden">
                          <Image
                            src={post.imageSrc}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6 flex-grow flex flex-col">
                          <div className="flex items-center text-sm text-gray-500 mb-3">
                            <div className="flex items-center mr-4">
                              <FaCalendarAlt className="mr-2 text-secondary" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center">
                              <FaTag className="mr-2 text-secondary" />
                              <span className="capitalize">{post.category.replace('-', ' ')}</span>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 flex-grow">
                            {post.excerpt}
                          </p>
                          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                            <span className="text-sm text-gray-500">By {post.author}</span>
                            <span className="text-secondary font-medium flex items-center">
                              Read More
                              <FaArrowRight className="ml-2 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </FadeIn>
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-16">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No articles found</h3>
              <p className="mt-1 text-sm text-gray-500">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <div className="mt-6">
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchTerm('');
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Clear filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 font-serif">
                Subscribe to Our Newsletter
              </h2>
              <p className="text-primary/80 mb-8">
                Stay up to date with the latest kitchen design trends, tips, and inspiration. We promise not to spam your inbox!
              </p>
              
              <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-700 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-primary/60 mt-4">
                By subscribing, you agree to our Privacy Policy. You can unsubscribe at any time.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
} 