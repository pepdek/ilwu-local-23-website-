/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ilwu-navy':      '#1B3A6B',
        'ilwu-navy-dark': '#142D56',
        'ilwu-gold':      '#F5C400',
        'ilwu-dark':      '#0F0F0F',
        'ilwu-bg':        '#F7F6F2',
        'ilwu-border':    '#E8E5DC',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        mono:    ['"DM Mono"', 'ui-monospace', 'monospace'],
      },
    },
  },
  plugins: [],
}
