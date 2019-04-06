# vuepress-plugin-medium-zoom

[![npm](https://img.shields.io/npm/v/vuepress-plugin-medium-zoom.svg)](https://www.npmjs.com/package/vuepress-plugin-medium-zoom)
[![GitHub](https://img.shields.io/github/license/vuepress/vuepress-plugin-medium-zoom.svg)](https://github.com/vuepress/vuepress-plugin-medium-zoom/blob/master/LICENSE)

Use [medium-zoom](https://github.com/francoischalifour/medium-zoom) in VuePress.

This plugin will make your images zoomable in your VuePress site.

## Usage

### Basic

Install via NPM:

```sh
npm install vuepress-plugin-medium-zoom
```

Introduce in your VuePress config file:

```js
module.exports = {
  plugins: [
    'vuepress-plugin-medium-zoom',
  ],
}
```

Set the config of this plugin:

> See the [docs of medium-zoom](https://github.com/francoischalifour/medium-zoom#options) for all available options.

```js
module.exports = {
  plugins: [
    ['vuepress-plugin-medium-zoom', {
      // used to be called with `mediumZoom()` and `zoom.attach()`
      // default: '.content img'
      selector: '.my-wrapper .my-img',

      // used to be called with `mediumZoom()`
      // default: {}
      options: {
        margin: 24,
        background: '#BADA55',
        scrollOffset: 0,
      },

      // call `zoom.attach()` with delay after entering a page
      // default: 500
      delay: 1000,
    }],
  ],
}
```

Change the default `z-index` of the `medium-zoom-overlay` in `palette.styl`:

```stylus
// default: 100
$mediumZoomZIndex = 10000
```

### Advance

Update zoomable images manually in your components:

```js
// SomeComponent.vue
export default {
  methods: {
    updateImages () {
      // do something to update images in this page
      this.$nextTick(() => {
        // update mediumZoom immediately
        this.$vuepress.mediumZoom.update() // with default selector
        this.$vuepress.mediumZoom.update('.new-images') // with custom selector

        // update mediumZoom with delay
        this.$vuepress.mediumZoom.updateDelay() // with default selector and delay
        this.$vuepress.mediumZoom.updateDelay('.new-images') // with custom selector and default delay
        this.$vuepress.mediumZoom.updateDelay('.new-images', 1000) // with custom selector and delay
      })
    },
  },
}
```

Get the `mediumZoom` instance directly in your components:

> See the [docs of medium-zoom](https://github.com/francoischalifour/medium-zoom#methods) for all available methods.

```js
// SomeComponent.vue
export default {
  methods: {
    openImages () {
      // get the mediumZoom instance
      const mz = this.$vuepress.mediumZoom.mz

      // call the methods
      mz.open()
    },
  },
}
```

## LICENSE

MIT &copy; [@meteorlxy](https://github.com/meteorlxy) & [VuePress Community](https://github.com/vuepress)
