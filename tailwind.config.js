/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'lavender': '#b4befe',
        'base':'#1e1e2e'
      }
    },
    fontFamily: {
      sans: ['JetBrains Mono', 'sans-serif']
    } 
  },
  plugins: [],
}

