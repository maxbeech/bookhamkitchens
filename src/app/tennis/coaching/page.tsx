'use client';
import React from 'react';
import Link from 'next/link';
import { FaChild, FaUserTie, FaUsers } from 'react-icons/fa';
import OptimizedImage from '@/components/ui/OptimizedImage';

export default function TennisCoaching() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[400px] w-full">
          <OptimizedImage 
            src="/images/tennis-coaching.jpg" 
            alt="Tennis Coaching at Grafton" 
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Tennis Coaching
              </h1>
              <p className="text-xl text-white max-w-2xl">
                Develop your tennis skills with our experienced coaches through individual or group sessions for all ages and abilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Our Coaching Philosophy</h2>
              <p className="text-lg mb-4">
                At Grafton Tennis and Squash Club, we believe that tennis should be accessible to everyone, regardless of age or ability. Our coaching programs are designed to help players develop their skills in a supportive and enjoyable environment.
              </p>
              <p className="text-lg mb-4">
                Our team of qualified coaches provides a comprehensive range of sessions, from beginner lessons for those new to the sport, to advanced coaching for competitive players. We focus on developing technique, tactical awareness, and physical fitness, while ensuring that everyone has fun along the way.
              </p>
              <p className="text-lg">
                Whether you're looking to take up tennis for the first time, improve your game, or compete at a higher level, our coaching team is here to help you achieve your goals.
              </p>
            </div>
            <div className="relative h-[400px]">
              <OptimizedImage 
                src="/images/tennis-coach.jpg" 
                alt="Grafton Tennis Coach" 
                fill
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Programs */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Coaching Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Junior Coaching */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <OptimizedImage 
                  src="/images/junior-tennis.jpg" 
                  alt="Junior Tennis Coaching" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FaChild className="text-primary text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Junior Coaching</h3>
                </div>
                <p className="mb-4">
                  Our junior program caters to children from 4 to 18 years old, with sessions designed to develop skills while having fun. We follow the LTA Youth program structure:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Mini Tennis Red (4-8 years)</li>
                  <li>Mini Tennis Orange (8-9 years)</li>
                  <li>Mini Tennis Green (9-10 years)</li>
                  <li>Junior Tennis (11+ years)</li>
                  <li>Junior Performance Groups</li>
                </ul>
                <p className="mb-4">
                  Sessions run after school and on weekends throughout the year, including school holidays.
                </p>
              </div>
            </div>
            
            {/* Adult Coaching */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <OptimizedImage 
                  src="/images/adult-tennis.jpg" 
                  alt="Adult Tennis Coaching" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FaUsers className="text-primary text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Adult Coaching</h3>
                </div>
                <p className="mb-4">
                  We offer a range of group coaching sessions for adults of all abilities:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Beginners - For those new to tennis or returning after a long break</li>
                  <li>Improvers - For players looking to develop their basic skills</li>
                  <li>Intermediate - For regular players wanting to refine their game</li>
                  <li>Advanced - For experienced players seeking to enhance specific aspects of their game</li>
                </ul>
                <p className="mb-4">
                  Our adult sessions run on weekday evenings and weekend mornings.
                </p>
              </div>
            </div>
            
            {/* Private Coaching */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <OptimizedImage 
                  src="/images/private-coaching.jpg" 
                  alt="Private Tennis Coaching" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <FaUserTie className="text-primary text-2xl mr-3" />
                  <h3 className="text-xl font-bold text-gray-800">Private Coaching</h3>
                </div>
                <p className="mb-4">
                  For those seeking personalized instruction, we offer one-to-one and small group private coaching:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Individual lessons tailored to your specific needs</li>
                  <li>Technical analysis and improvement</li>
                  <li>Tactical development</li>
                  <li>Match preparation</li>
                  <li>Physical conditioning for tennis</li>
                </ul>
                <p className="mb-4">
                  Private lessons can be arranged at times to suit your schedule, subject to court and coach availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Coaches */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Meet Our Coaches</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Coach 1 */}
            <div className="bg-light rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <OptimizedImage 
                  src="/images/coach-1.jpg" 
                  alt="Head Tennis Coach" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">James Thompson</h3>
                <p className="text-primary font-medium mb-3">Head Tennis Coach</p>
                <p className="mb-4">
                  James is an LTA Level 4 coach with over 15 years of coaching experience. He has worked with players of all levels, from beginners to county standard.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Qualifications:</strong> LTA Level 4, PTR Professional, First Aid Certified
                </p>
              </div>
            </div>
            
            {/* Coach 2 */}
            <div className="bg-light rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <OptimizedImage 
                  src="/images/coach-2.jpg" 
                  alt="Senior Tennis Coach" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">Sarah Lewis</h3>
                <p className="text-primary font-medium mb-3">Senior Tennis Coach</p>
                <p className="mb-4">
                  Sarah specializes in junior development and has been coaching at Grafton for 8 years. She leads our Mini Tennis program and junior performance groups.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Qualifications:</strong> LTA Level 3, LTA Youth Coach, Safeguarding Trained
                </p>
              </div>
            </div>
            
            {/* Coach 3 */}
            <div className="bg-light rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <OptimizedImage 
                  src="/images/coach-3.jpg" 
                  alt="Tennis Coach" 
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-1">David Parker</h3>
                <p className="text-primary font-medium mb-3">Tennis Coach</p>
                <p className="mb-4">
                  David focuses on adult coaching and is particularly skilled at helping beginners and improvers develop their game in a supportive environment.
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Qualifications:</strong> LTA Level 3, Disability Tennis Coach, First Aid Certified
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking and Contact */}
      <section className="py-16 bg-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-primary mb-6 text-center">Book a Coaching Session</h2>
            <p className="text-lg mb-6 text-center">
              To book a place on one of our coaching programs or enquire about private lessons, please contact our coaching team:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-center">
                <span className="font-medium w-32">Email:</span>
                <a href="mailto:coaching@graftontennisandsquash.com" className="text-secondary hover:text-secondary/80 transition-colors">
                  coaching@graftontennisandsquash.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="font-medium w-32">Phone:</span>
                <a href="tel:+441527579200" className="text-secondary hover:text-secondary/80 transition-colors">
                  01527 579200
                </a>
              </div>
            </div>
            <p className="text-center">
              Alternatively, you can speak to any of our coaches in person at the club.
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Improve Your Tennis?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Join our coaching programs today and take your game to the next level with our experienced coaching team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:coaching@graftontennisandsquash.com" className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-md font-medium transition-colors">
              Email the Coaching Team
            </a>
            <Link href="/membership" className="bg-secondary hover:bg-secondary/90 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Become a Member
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 