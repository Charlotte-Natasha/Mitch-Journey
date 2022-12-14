/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        'black':colors.black
      },
      backgroundImage: (theme) => ({
        book: "url('../src/images/about.jpeg')",
      }),
    },
    fontFamily: {
      signature: ['Great Vibes']
    },
    // screens:{
    //   lg: '1124px',
    //   xl: '1124px',
    //   '2xl': '1124px',    
    // }
  },
  plugins: [],
}
