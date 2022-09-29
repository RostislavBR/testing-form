const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'darkGreen': '#0D9488',
      'lightGreen': '#16A34A',
    }),
    maxWidth: {
      'popupMaxWidth': '793px',
      'inputMaxWidth': '170px'
    },
    inset: {
      '1/2': '50%',
    },
    extend: {
      fontFamily: {
        'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
