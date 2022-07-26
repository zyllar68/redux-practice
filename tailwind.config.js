/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      'dark-bullace': '#3a2244',
      'semi-dark-bullace': '#614e69',
      bullace: '#897a8f',
      'light-bullace': '#b0a7b4',
      font: '#d8d3da',
      black: '#000000',
      white: '#ffffff',
    },
    padding: {
      DEFAULT: '1rem',
      xsm: '.5rem',
      sm: '2rem',
      lg: '4rem',
      xl: '5rem',
      '2xl': '6rem',
    },
    extend: {},
  },
  plugins: [],
}
