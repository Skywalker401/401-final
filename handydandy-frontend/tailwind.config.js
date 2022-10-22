/** @type {DefaultColors} */
  const colors = require('tailwindcss/colors')

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
        'brown' : '#8C694A',
          'white': '#FFFFFF',
         rose: colors.rose,
      }
  },
  plugins: [
      require('@tailwindcss/forms'),
  ],
}
