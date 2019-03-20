import zoom from 'medium-zoom'
import './styles/medium-zoom.styl'

export default {
  data: () => ({ mediumZoom: null }),

  watch: {
    '$page.path' () {
      this.mzUpdate()
    },
  },

  mounted () {
    this.mzUpdate()

    this.$vuepress.$mediumZoom = {
      update: this.mzUpdate(),
    }
  },

  methods: {
    mzUpdate () {
      setTimeout(() => {
        if (this.mediumZoom) {
          this.mediumZoom.detach()
        }
        /* global MZ_SELECTOR */
        this.mediumZoom = zoom(MZ_SELECTOR)
      }, 1000)
    },
  },
}
