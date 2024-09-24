/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  
  theme: {
    fontFamily: {
      museo: ['MuseoModerno', 'sans-serif'], // Menambahkan font MuseoModerno
      vt323:[  'VT323', 'sans-serif'] //font buat pixels
    },
    screens: {
      xs: '320px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {},
  },
  plugins: [],
}