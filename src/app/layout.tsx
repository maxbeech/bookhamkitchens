import React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Montserrat, Playfair_Display } from 'next/font/google';

const montserrat = Montserrat({ 
  subsets: ['latin'], 
  variable: '--font-montserrat',
  display: 'swap',
});
const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Bookham Kitchens | Bespoke Kitchen Design and Installation',
  description: 'Bookham Kitchens offers bespoke kitchen design, installation and renovation services in Surrey. Family-run business with over 20 years of experience in creating beautiful, functional kitchens.',
  keywords: 'bespoke kitchens, kitchen design, kitchen installation, fitted kitchens, kitchen renovation, Surrey, Bookham, Leatherhead',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${montserrat.variable} ${playfair.variable} font-sans`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
} 