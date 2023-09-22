/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'box':'-4px 5px 2px 1px rgba(0, 0, 0, 1);'
      }
    },
  },
  plugins: [],
}