/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ilwu-navy':      '#00305b',  // 60% dominant
        'ilwu-navy-dark': '#001f3d',  // nav/footer
        'ilwu-blue':      '#377dbd',  // 30% secondary
        'ilwu-blue-dark': '#2d6ba0',
        'ilwu-gold':      '#fff216',  // accent - sparingly
        'ilwu-dark':      '#0F0F0F',
        'ilwu-bg':        '#F7F6F2',  // 10% light
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
