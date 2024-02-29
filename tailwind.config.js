/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "linear-gradient(180deg, rgba(23, 2, 80, .1) 0%, rgba(23, 2, 80, .2) 50%, rgb(46 16 101) 100%),url('/src/assets/hero.svg')",        
        'tech-pattern': [
          "linear-gradient(180deg, rgba(23, 2, 80, .1) 0%, rgba(23, 2, 80, .2) 50%, rgb(46 16 101) 100%)",
          "linear-gradient(360deg, rgba(23, 2, 80, .2) 0%, rgba(23, 2, 80, .2) 20%, rgba(23, 2, 80, .1) 40%, rgba(23, 2, 80, .1) 80%, rgb(46 16 101) 100%)",
          "url('/src/assets/tech.svg')"
        ]       
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

