const path = require('path')

module.exports = ({
  selector = '.theme-default-content img',
  options = {},
  delay = 500,
}) => ({
  name: 'vuepress-plugin-medium-zoom',

  clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js'),

  define: {
    MZ_SELECTOR: selector,
    MZ_OPTIONS: JSON.stringify(options),
    MZ_DELAY: delay,
  },
})
