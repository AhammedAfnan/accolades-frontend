/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",   // For App Router
    "./src/pages/**/*.{js,ts,jsx,tsx}", // For Pages Router
    "./src/components/**/*.{js,ts,jsx,tsx}", // For Components
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero':"url('/images/hero.png')",
        'technology':"url('/images/image2.png')",
      }
    },
  },
  plugins: [],
};
