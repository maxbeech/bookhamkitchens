/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'], // Add placeholder domain for development
    unoptimized: false, // We'll use Next.js image optimization
  },
}

module.exports = nextConfig 