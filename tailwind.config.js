module.exports = {
  content: [
    './**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          normal: '#12416A',
        },
        gray: {
          normal: '#B3B3B3',
        },
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
