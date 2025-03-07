/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FFF9E5',
          100: '#FFF2CC',
          200: '#FFE699',
          300: '#FFD966',
          400: '#FFCC33',
          500: '#FFB800',
          600: '#CC9200',
          700: '#996D00',
          800: '#664800',
          900: '#332400',
        },
      },
    },
  },
  plugins: [],
};