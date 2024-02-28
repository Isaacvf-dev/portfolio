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
    },
  },
  plugins: [],
}

