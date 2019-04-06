import MediumZoomPlugin from './MediumZoomPlugin'
import './styles/medium-zoom.styl'

export default {
  watch: {
    '$page.path' () {
      if (this.$vuepress.mediumZoom === 'undefined') return
      this.$vuepress.mediumZoom.updateDelay()
    },
  },

  mounted () {
    this.$vuepress.mediumZoom = new MediumZoomPlugin()
    this.$vuepress.mediumZoom.updateDelay()
  },
}
