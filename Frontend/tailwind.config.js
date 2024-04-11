/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dogboarding: {
          100: '#303030',
          200: '#3A3A3A',
          300: '#97E15F4D',
          400: '#0082CD',
          500: '#F6F7FA',
          600: '#4CAF50',
        }
      }
    },
  },
  plugins: [],
}

