/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#10B981', // Green-600
          dark: '#059669',    // Green-700
          light: '#34D399',   // Green-400
        },
        secondary: {
          DEFAULT: '#111827', // Gray-900
          light: '#1F2937',   // Gray-800
          dark: '#030712',    // Gray-950
        }
      }
    },
  },
  plugins: [],
};