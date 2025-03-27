'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[600px] w-full">
          <Image 
            src="/images/hero-tennis.jpg" 
            alt="Grafton Tennis and Squash Club courts" 
            fill
            priority
            className="object-cover brightness-[0.85]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-xl">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                  Welcome to Grafton Tennis & Squash Club
                </h1>
                <p className="text-xl text-white mb-8">
                  A premier sporting venue established in 1888, offering exceptional facilities for tennis and squash enthusiasts of all abilities.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/membership" className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-md font-medium transition-colors">
                    Join Our Club
                  </Link>
                  <Link href="/contact" className="bg-white hover:bg-gray-100 text-primary px-6 py-3 rounded-md font-medium transition-colors">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">About Our Club</h2>
              <p className="text-lg mb-4">
                Founded in 1888, Grafton Tennis and Squash Club has a rich history of providing exceptional sporting facilities to the community. Nestled in beautiful surroundings, our club combines tradition with modern amenities.
              </p>
              <p className="text-lg mb-6">
                Whether you're a competitive player looking for match play, a beginner seeking coaching, or simply want to enjoy the social side of sport, Grafton has something for everyone.
              </p>
              <Link href="/about" className="inline-flex items-center font-medium text-secondary hover:text-secondary/80 transition-colors">
                Learn more about our history <FaArrowRight className="ml-2" />
              </Link>
            </div>
            <div className="relative h-[400px]">
              <Image 
                src="/images/club-house.jpg" 
                alt="Grafton Tennis and Squash Club clubhouse" 
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Facilities</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Grafton offers excellent facilities for both tennis and squash players, with well-maintained courts and a welcoming clubhouse.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Tennis Courts */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/images/tennis-courts.jpg" 
                  alt="Tennis courts" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Tennis Courts</h3>
                <p className="mb-4">
                  Our club features 6 all-weather courts, including 3 floodlit courts for evening play throughout the year.
                </p>
                <Link href="/tennis/playing" className="text-secondary font-medium hover:text-secondary/80 transition-colors">
                  Learn more
                </Link>
              </div>
            </div>
            
            {/* Squash Courts */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/images/squash-courts.jpg" 
                  alt="Squash courts" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Squash Courts</h3>
                <p className="mb-4">
                  Our club provides 3 high-quality squash courts with excellent viewing areas for spectators.
                </p>
                <Link href="/squash/playing" className="text-secondary font-medium hover:text-secondary/80 transition-colors">
                  Learn more
                </Link>
              </div>
            </div>
            
            {/* Clubhouse */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image 
                  src="/images/clubhouse-interior.jpg" 
                  alt="Clubhouse interior" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Clubhouse</h3>
                <p className="mb-4">
                  Our welcoming clubhouse features a bar, social area, changing facilities, and a friendly atmosphere for members.
                </p>
                <Link href="/social" className="text-secondary font-medium hover:text-secondary/80 transition-colors">
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-primary">Latest News</h2>
            <Link href="/news" className="text-secondary font-medium hover:text-secondary/80 transition-colors">
              View all news
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Items would be loaded dynamically */}
            {/* Placeholder for now */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-light rounded-lg shadow-sm overflow-hidden">
                <div className="relative h-48">
                  <Image 
                    src={`/images/news-${item}.jpg`} 
                    alt={`News item ${item}`} 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-2">March 15, 2024</p>
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Summer League Registration Now Open
                  </h3>
                  <p className="mb-4 text-gray-700">
                    Join our summer league for competitive match play throughout the season. All abilities welcome.
                  </p>
                  <Link href={`/news/summer-league-${item}`} className="text-secondary font-medium hover:text-secondary/80 transition-colors">
                    Read more
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Community Today</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Become a member of Grafton Tennis and Squash Club and enjoy access to our excellent facilities, coaching programs, and social events.
          </p>
          <Link href="/membership" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md font-medium text-lg transition-colors inline-block">
            View Membership Options
          </Link>
        </div>
      </section>
    </main>
  );
} 