import './styles/medium-zoom.styl'

export default {
  data: () => ({
    mediumZoom: null,
    mz: null,
  }),

  watch: {
    '$page.path' () {
      this.mzUpdate()
    },
  },

  mounted () {
    // temp fix for https://github.com/francoischalifour/medium-zoom/issues/94
    this.mz = require('medium-zoom').default

    this.mzUpdate()

    this.$vuepress.$mediumZoom = {
      update: this.mzUpdate(),
    }
  },

  methods: {
    mzUpdate () {
      setTimeout(() => {
        if (!this.mz) return

        if (this.mediumZoom) {
          this.mediumZoom.detach()
        }
        /* global MZ_SELECTOR */
        this.mediumZoom = this.mz(MZ_SELECTOR)
      }, 1000)
    },
  },
}
