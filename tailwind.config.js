/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ["Lobster Two", "Sans serif"],
        navlinks: ["Heebo"]
      },
      backgroundImage: {
        'hero-pattern': "url('')",
      }
    },
  },
  plugins: [],
}

