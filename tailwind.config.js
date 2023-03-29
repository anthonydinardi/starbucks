/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: 
      [
        'SoDoSans',
        'Helvetica Neue',
        'Helvetica',
        'Arial',
        'sans-serif'
      ],
      colors: {
        starbucks: '#1e3932'
      }
    },
  },
  plugins: [],
}
