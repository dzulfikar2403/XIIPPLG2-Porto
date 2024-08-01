/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage:{
        'dopImg': "url('./src/assets/bgDot.png')",
        'abstract': "url('./src/assets/abstract-design.jpg')",
      }
    },
  },
  plugins: [],
}

