/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'black-100': '#00000058',
        'white-100': '#ffffff28'
      },
      borderColor: {
        'black-100': '#00000058',
        'white-100': '#ffffff28'
      }
    },
  },
  plugins: [],
}