import mediumZoom from 'medium-zoom'

/* global MZ_SELECTOR */
/* global MZ_OPTIONS */
/* global MZ_DELAY */
const mzSelector = MZ_SELECTOR
const mzOptions = JSON.parse(MZ_OPTIONS)
const mzDelay = Number(MZ_DELAY)

export default class MediumZoomPlugin {
  constructor () {
    this.instance = null
  }

  update (selector = mzSelector) {
    if (typeof window === 'undefined') return
    if (this.instance === null) {
      this.instance = mediumZoom(selector, mzOptions)
    } else {
      this.instance.detach()
      this.instance.attach(selector)
    }
  }

  updateDelay (selector, delay = mzDelay) {
    setTimeout(() => this.update(selector), delay)
  }
}
