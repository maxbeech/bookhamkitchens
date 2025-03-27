'use client';
import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Grafton Tennis & Squash Club</h3>
            <p className="mb-2">Est. 1888</p>
            <p className="mb-4">A premier tennis and squash club offering excellent facilities, coaching, and a vibrant social scene.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/tennis/playing" className="hover:text-secondary transition-colors">Tennis</Link></li>
              <li><Link href="/squash/playing" className="hover:text-secondary transition-colors">Squash</Link></li>
              <li><Link href="/membership" className="hover:text-secondary transition-colors">Membership</Link></li>
              <li><Link href="/news" className="hover:text-secondary transition-colors">News</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact Us</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">Grafton Lane, Bromsgrove, Worcestershire, B61 7HA</p>
            <p className="mb-4">
              <a href="tel:+441527579200" className="hover:text-secondary transition-colors">01527 579200</a>
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Facebook">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Twitter">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors" aria-label="Instagram">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm">
          <p>&copy; {currentYear} Grafton Tennis & Squash Club. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link>
            <Link href="/terms-of-use" className="hover:text-secondary transition-colors">Terms of Use</Link>
            <Link href="/safeguarding" className="hover:text-secondary transition-colors">Safeguarding</Link>
          </div>
        </div>
      </div>
    </footer>
  );
} 