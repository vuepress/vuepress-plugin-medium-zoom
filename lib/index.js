const path = require('path')

module.exports = ({ selector = '.content img' }) => ({
  name: 'vuepress-plugin-medium-zoom',

  clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js'),

  define: {
    MZ_SELECTOR: selector,
  },
})
