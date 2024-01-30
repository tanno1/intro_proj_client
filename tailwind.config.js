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
        myDarkGray: '#333333',
        myWhite: '#FFFFFF',
        myPicton: '#00A7E1',
        myLightPicton: '#6fd6ff',
        myRich: '#00171F',
        myPrussian: '#003459',
        myCerulean: '#007EA7',
      }
    },
  },
  plugins: [],
}

