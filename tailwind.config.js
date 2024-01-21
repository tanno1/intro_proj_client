/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myGray: '#EDEDE9',
        myLightGray: '#D6CCC2',
        myBeige: '#F5EBE0',
        myTan: '#E3D5CA',
        myMauve: '#D5BDAF',
      }
    },
  },
  plugins: [],
}

