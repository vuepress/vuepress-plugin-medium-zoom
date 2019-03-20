# vuepress-plugin-medium-zoom

[![npm](https://img.shields.io/npm/v/vuepress-plugin-medium-zoom.svg)](https://www.npmjs.com/package/vuepress-plugin-medium-zoom)
[![GitHub](https://img.shields.io/github/license/meteorlxy/vuepress-plugin-medium-zoom.svg)](https://github.com/meteorlxy/vuepress-plugin-medium-zoom/blob/master/LICENSE)

Use [medium-zoom](https://github.com/francoischalifour/medium-zoom.html) in VuePress.

This plugin will make your images zoomable in your VuePress site.

> This plugin is a fork of VuePress official plugin `@vuepress/plugin-medium-zoom` with modifications

## Usage

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

Change the default `selector` of `medium-zoom`:

```js
module.exports = {
  plugins: [
    ['vuepress-plugin-medium-zoom', {
      selector: '.my-wrapper .my-img', // default: '.content img'
    }],
  ],
}

```

Change the default `z-index` of the `medium-zoom-overlay` in `palette.styl`:

```stylus
$mediumZoomZIndex = 10000 // default: 100
```

## LICENSE

MIT
