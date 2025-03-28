'use client';
import React from 'react';
import Link from 'next/link';
import { FaCalendarAlt, FaUsers, FaTrophy } from 'react-icons/fa';
import OptimizedImage from '@/components/ui/OptimizedImage';

export default function TennisPlaying() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[400px] w-full">
          <OptimizedImage 
            src="/images/tennis-courts-wide.jpg" 
            alt="Grafton Tennis Courts" 
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Tennis at Grafton
              </h1>
              <p className="text-xl text-white max-w-2xl">
                Enjoy playing tennis on our excellent courts, with options for casual play, organized sessions, and competitive matches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-8">Our Tennis Facilities</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative h-[400px]">
              <OptimizedImage 
                src="/images/tennis-courts.jpg" 
                alt="Grafton Tennis Courts" 
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Tennis Courts</h3>
              <p className="text-lg mb-4">
                Grafton Tennis and Squash Club boasts 6 all-weather courts, providing excellent playing surfaces throughout the year:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>3 floodlit courts for evening play</li>
                <li>All courts feature high-quality all-weather surfaces</li>
                <li>Courts are maintained to the highest standards</li>
                <li>Court booking available through our MYCOURTS system</li>
              </ul>
              <p className="text-lg">
                Our courts are available for members to book via our online booking system. Non-members can also book courts at certain times - please contact the club for details.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-light p-8 rounded-lg shadow-sm">
              <FaCalendarAlt className="text-primary text-3xl mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Court Booking</h3>
              <p className="mb-4">
                Members can book courts up to 7 days in advance through our MYCOURTS system. Courts are available from 8am until 10pm daily (with lighting on the floodlit courts).
              </p>
              <Link 
                href="https://graftonltc.mycourts.co.uk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary font-medium hover:text-secondary/80 transition-colors"
              >
                Book a court
              </Link>
            </div>
            
            <div className="bg-light p-8 rounded-lg shadow-sm">
              <FaUsers className="text-primary text-3xl mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Social Tennis</h3>
              <p className="mb-4">
                We offer regular social tennis sessions throughout the week, providing an opportunity to play with a variety of members in a friendly environment.
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Monday evening: Mixed social, 6:30pm - 9pm</li>
                <li>Wednesday morning: Mixed social, 9:30am - 12pm</li>
                <li>Saturday afternoon: Club social, 2pm - 5pm</li>
              </ul>
              <p>All abilities welcome!</p>
            </div>
            
            <div className="bg-light p-8 rounded-lg shadow-sm">
              <FaTrophy className="text-primary text-3xl mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Competitive Play</h3>
              <p className="mb-4">
                For those seeking competition, we offer various opportunities:
              </p>
              <ul className="list-disc pl-5 space-y-1 mb-4">
                <li>Club tournaments throughout the year</li>
                <li>Men's, women's, and mixed teams in local leagues</li>
                <li>Box leagues for internal competition</li>
                <li>Regular friendly matches with other clubs</li>
              </ul>
              <Link href="/tennis/competitions" className="text-secondary font-medium hover:text-secondary/80 transition-colors">
                Competition details
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Court Rules Section */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-primary mb-6">Court Rules & Etiquette</h2>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="mb-4">
                To ensure everyone enjoys their tennis at Grafton, we ask all players to observe the following rules:
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>Appropriate tennis footwear must be worn at all times</li>
                <li>Please respect court bookings and vacate promptly for the next players</li>
                <li>Ensure the gates are closed when entering/leaving the courts</li>
                <li>Take all belongings and rubbish with you when leaving</li>
                <li>Keep noise to a reasonable level to respect players on other courts</li>
                <li>Observe fair play and good sportsmanship</li>
              </ul>
              <p className="text-lg font-medium text-primary">
                Thank you for helping to maintain our facilities and the friendly atmosphere at the club.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Become a member of Grafton Tennis and Squash Club today and enjoy access to our excellent tennis facilities, coaching programs, and social events.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/membership" className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors">
              View Membership Options
            </Link>
            <Link href="/tennis/coaching" className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Explore Tennis Coaching
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 