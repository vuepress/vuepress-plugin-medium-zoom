module.exports = {
  plugins: [
    [require('../../lib/index'), {
      selector: '.theme-default-content img',

      options: {
        margin: 0,
        background: '#fff',
        scrollOffset: 40,
      },

      delay: 500,
    }],
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Page', link: '/page.html' },
    ],
  },
}
