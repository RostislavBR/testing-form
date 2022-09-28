module.exports = {
  purge: [
    './public/**/*.html',
    './src/**/*.vue',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'customGreen': '#0D9488',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
