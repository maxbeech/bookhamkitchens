/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2A3342', // Deep navy blue
          50: '#f5f6f7',
          100: '#e6e9ec',
          200: '#c5ccd4',
          300: '#9ba8b7',
          400: '#6d7f95',
          500: '#4e5d72',
          600: '#2A3342',
          700: '#232a36',
          800: '#1a202a',
          900: '#14181f',
        },
        secondary: {
          DEFAULT: '#8B7D6B', // Warm taupe/beige
          50: '#f7f6f4',
          100: '#ece9e5',
          200: '#d9d2c9',
          300: '#c2b7a9',
          400: '#a99a88',
          500: '#8B7D6B',
          600: '#736755',
          700: '#5c5244',
          800: '#433d32',
          900: '#2e2922',
        },
        accent: {
          DEFAULT: '#D9C5B2', // Light warm beige
          100: '#F3ECE5',
          200: '#E6D9CC',
          300: '#D9C5B2',
          400: '#C0A48A',
          500: '#A78262',
        },
        dark: '#1A1A1A',
        light: '#F5F5F5',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'pattern': "url('/images/pattern.svg')",
      },
      boxShadow: {
        'custom': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'custom-lg': '0 10px 30px rgba(0, 0, 0, 0.15)',
        'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.05)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
} 