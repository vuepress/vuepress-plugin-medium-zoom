const path = require('path')

module.exports = ({ selector = '.content img' }) => ({
  clientRootMixin: path.resolve(__dirname, 'clientRootMixin.js'),

  define: {
    MZ_SELECTOR: selector,
  },
})
