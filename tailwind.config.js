/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/hero.svg')",        
      },
      fontFamily: {
        sans: [ "Roboto", "sans-serif" ]
      },
      keyframes: {
        slide: {
          '0%': { opacity: 0, transform: 'scale(0.8)' },          
          '100%': { opacity: 0.75, transform: 'scale(1)' },
        },
      },
      animation: {
        'slide-in': 'slide 0.5s ease-in-out',
      },
    },
  },
  plugins: [],
}

