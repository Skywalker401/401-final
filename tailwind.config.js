/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{js,tx,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
      colors: {
        'darkblue': '#010D26',
        'mediumBlue' : '#455973',
        'lightBlue' : '#AAB7BF',
        'lightGray' : '#BFBEB4',
        'brown' : '#8C694A'
      }
  },
  plugins: [],
}
