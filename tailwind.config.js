
/** @type {import('tailwindcss').Config} */ 
module.exports = {
  mode:'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        p:"red",
        boy:'#A6D1E6'
      }
    },
  },
  plugins: [],
}