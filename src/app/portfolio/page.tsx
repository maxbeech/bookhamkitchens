'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaTimes, FaArrowRight } from 'react-icons/fa';
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

// Project Type
interface Project {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  category: string;
  location: string;
  featured?: boolean;
  projectUrl: string;
  completed: string;
}

// Portfolio projects data
const projects: Project[] = [
  {
    id: '1',
    title: 'Modern Shaker Kitchen',
    description: 'A contemporary take on the classic shaker style, featuring custom cabinetry in a soft sage green finish.',
    imageSrc: '/images/kitchen-1.jpg',
    category: 'fitted-kitchens',
    location: 'Guildford, Surrey',
    featured: true,
    projectUrl: '/portfolio/modern-shaker-kitchen',
    completed: 'September 2022',
  },
  {
    id: '2',
    title: 'Traditional Oak Kitchen',
    description: 'Classic oak cabinetry with granite worktops, designed for a period property in Leatherhead.',
    imageSrc: '/images/kitchen-2.jpg',
    category: 'fitted-kitchens',
    location: 'Leatherhead, Surrey',
    projectUrl: '/portfolio/traditional-oak-kitchen',
    completed: 'July 2022',
  },
  {
    id: '3',
    title: 'Sleek Handleless Kitchen',
    description: 'A minimalist kitchen design with handleless cabinetry and integrated appliances for a clean look.',
    imageSrc: '/images/kitchen-3.jpg',
    category: 'fitted-kitchens',
    location: 'Woking, Surrey',
    featured: true,
    projectUrl: '/portfolio/sleek-handleless-kitchen',
    completed: 'May 2022',
  },
  {
    id: '4',
    title: 'Cabinet Door Refacing',
    description: 'Complete transformation of an existing kitchen with new cabinet doors and drawer fronts.',
    imageSrc: '/images/kitchen-4.jpg.jpeg',
    category: 'replacement-doors',
    location: 'Bookham, Surrey',
    projectUrl: '/portfolio/cabinet-door-refacing',
    completed: 'April 2022',
  },
  {
    id: '5',
    title: 'Spray Painted Kitchen Cabinets',
    description: 'Revitalized kitchen with professionally spray painted cabinets in a contemporary blue finish.',
    imageSrc: '/images/kitchen-5.jpeg',
    category: 'cabinet-spray-painting',
    location: 'Dorking, Surrey',
    projectUrl: '/portfolio/spray-painted-kitchen',
    completed: 'March 2022',
  },
  {
    id: '6',
    title: 'Luxury Kitchen with Island',
    description: 'A spacious kitchen featuring a large central island, quartz countertops, and high-end appliances.',
    imageSrc: '/images/kitchen-6.jpg',
    category: 'fitted-kitchens',
    location: 'Esher, Surrey',
    featured: true,
    projectUrl: '/portfolio/luxury-kitchen-island',
    completed: 'February 2022',
  },
  {
    id: '7',
    title: 'Custom Bedroom Wardrobes',
    description: 'Built-in wardrobes designed to maximize storage while complementing the bedroom aesthetic.',
    imageSrc: '/images/bedroom-cabinets-2.jpg',
    category: 'bedroom-furniture',
    location: 'Weybridge, Surrey',
    projectUrl: '/portfolio/custom-bedroom-wardrobes',
    completed: 'January 2022',
  },
  {
    id: '8',
    title: 'Home Office Suite',
    description: 'A comprehensive home office solution with custom-built desk, shelving, and storage cabinets.',
    imageSrc: '/images/custom-office-furniture-01.jpg',
    category: 'home-office',
    location: 'Reigate, Surrey',
    projectUrl: '/portfolio/home-office-suite',
    completed: 'December 2021',
  },
  {
    id: '9',
    title: 'Bespoke TV Unit',
    description: 'Custom designed TV and media cabinet with integrated storage and cable management.',
    imageSrc: '/images/custom-tv-unit-01.jpg',
    category: 'bespoke-furniture',
    location: 'Cobham, Surrey',
    projectUrl: '/portfolio/bespoke-tv-unit',
    completed: 'November 2021',
  },
];

// Categories for filtering
const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'fitted-kitchens', name: 'Fitted Kitchens' },
  { id: 'replacement-doors', name: 'Replacement Doors' },
  { id: 'cabinet-spray-painting', name: 'Cabinet Spray Painting' },
  { id: 'bedroom-furniture', name: 'Bedroom Furniture' },
  { id: 'home-office', name: 'Home Office' },
  { id: 'bespoke-furniture', name: 'Bespoke Furniture' },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  // Filter projects based on selected category and search term
  useEffect(() => {
    let result = projects;
    
    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(project => project.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const lowercasedSearch = searchTerm.toLowerCase();
      result = result.filter(
        project => 
          project.title.toLowerCase().includes(lowercasedSearch) || 
          project.description.toLowerCase().includes(lowercasedSearch) ||
          project.location.toLowerCase().includes(lowercasedSearch)
      );
    }
    
    setFilteredProjects(result);
  }, [selectedCategory, searchTerm]);

  // Clear search term
  const clearSearch = () => {
    setSearchTerm('');
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-gray-900">
          <Image 
            src="/images/kitchen-6.jpg" 
            alt="Bookham Kitchens Portfolio" 
            fill 
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-serif">Our Portfolio</h1>
            <p className="text-xl text-white/90 max-w-3xl">
              Explore our showcase of bespoke kitchens and cabinetry, designed and installed throughout Surrey.
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
                  ref={searchRef}
                  type="text"
                  placeholder="Search projects..."
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

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white rounded-lg shadow-custom overflow-hidden group"
                  >
                    <Link href={project.projectUrl} className="block">
                      <div className="relative h-64 w-full overflow-hidden">
                        <Image
                          src={project.imageSrc}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {project.featured && (
                          <div className="absolute top-4 right-4 bg-accent text-primary text-xs font-bold px-2 py-1 rounded">
                            Featured
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors">
                            {project.title}
                          </h3>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap items-center justify-between text-sm text-gray-500">
                          <span>{project.location}</span>
                          <span>{project.completed}</span>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
                          <span className="text-secondary font-medium">View Details</span>
                          <FaArrowRight className="text-secondary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
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
              <h3 className="mt-2 text-sm font-medium text-gray-900">No projects found</h3>
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

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <FadeIn direction="right">
              <div className="mb-8 md:mb-0 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-2 font-serif">
                  Ready to Start Your Project?
                </h2>
                <p className="text-white/80 max-w-xl">
                  Contact our team today to discuss your requirements and arrange a free consultation.
                </p>
              </div>
            </FadeIn>
            
            <FadeIn direction="left" delay={0.2}>
              <Link 
                href="/contact"
                className="px-8 py-4 bg-accent text-primary rounded-md hover:bg-accent-400 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 font-medium"
              >
                Get in Touch
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
} 