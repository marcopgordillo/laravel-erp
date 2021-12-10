const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './storage/framework/views/*.php',
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  safelist: [
    {
      pattern: /fade-(enter|leave)-(active|from|to)/,
    },
  ],
  // darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Open Sans"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        orange: colors.orange,
      },
    },
  },
  plugins: [],
}
