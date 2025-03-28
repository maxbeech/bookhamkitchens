'use client';
import React from 'react';
import Link from 'next/link';
import ImageUploader from '@/components/ui/ImageUploader';

export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-primary">Admin Dashboard</h1>
          <Link href="/" className="text-secondary hover:text-secondary/80">
            Return to Site
          </Link>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Image Management</h2>
          <p className="mb-6 text-gray-600">
            This page demonstrates how you could manage images for your website.
            In a production environment, you would have a full-featured admin panel for content management.
          </p>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Current Image Library</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Display current images */}
              {[
                "tennis-courts.jpg", 
                "tennis-courts-wide.jpg", 
                "hero-tennis.jpg", 
                "club-house.jpg", 
                "squash-courts.jpg", 
                "clubhouse-interior.jpg", 
                "news-1.jpg", 
                "news-2.jpg"
              ].map((filename) => (
                <div key={filename} className="relative group">
                  <div className="aspect-square bg-gray-100 rounded-md overflow-hidden">
                    <img 
                      src={`/images/${filename}`} 
                      alt={`Library image ${filename}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                    <button className="p-2 bg-white rounded-full text-primary">
                      <span className="sr-only">Edit</span>
                      ✏️
                    </button>
                    <button className="p-2 bg-white rounded-full text-red-500">
                      <span className="sr-only">Delete</span>
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Upload New Image</h3>
            <ImageUploader />
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Image Storage Solution</h2>
          <div className="space-y-4 text-gray-600">
            <p>
              For a production website, there are several approaches for storing and serving images:
            </p>
            
            <div className="pl-4 border-l-4 border-primary">
              <h3 className="font-semibold text-gray-800">1. Local Storage on Your Server</h3>
              <p>
                Images can be stored directly on your web server in a public directory.
                This is the simplest approach but may not scale well with large numbers of images.
              </p>
            </div>
            
            <div className="pl-4 border-l-4 border-primary">
              <h3 className="font-semibold text-gray-800">2. Vercel Blob Storage</h3>
              <p>
                Vercel provides a <a href="https://vercel.com/docs/storage/vercel-blob" className="text-secondary">Blob Storage</a> solution
                specifically designed for Next.js applications to store and serve files.
              </p>
            </div>
            
            <div className="pl-4 border-l-4 border-primary">
              <h3 className="font-semibold text-gray-800">3. Cloud Storage Solutions</h3>
              <p>
                Services like AWS S3, Google Cloud Storage, or Cloudinary provide robust solutions
                for storing and serving images with global CDN capabilities.
              </p>
            </div>
            
            <p>
              For this Grafton Tennis and Squash Club website, we're using local storage with 
              Next.js image optimization to ensure good performance while keeping control of all your assets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 