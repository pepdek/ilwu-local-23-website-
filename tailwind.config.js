/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ilwu-red': '#C41230',
        'ilwu-red-dark': '#9E0E26',
        'ilwu-red-light': '#E8192E',
        'ilwu-black': '#0F0F0F',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
