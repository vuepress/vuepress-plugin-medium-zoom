import mediumZoom from 'medium-zoom'

/* global MZ_SELECTOR */
/* global MZ_OPTIONS */
/* global MZ_DELAY */
const mzSelector = MZ_SELECTOR
const mzOptions = JSON.parse(MZ_OPTIONS)
const mzDelay = Number(MZ_DELAY)

export default class MediumZoomPlugin {
  constructor () {
    this.mz = null
  }

  update (selector = mzSelector) {
    if (typeof window === 'undefined') return
    if (this.mz === null) {
      this.mz = mediumZoom(selector, mzOptions)
    } else {
      this.mz.detach()
      this.mz.attach(selector)
    }
  }

  updateDelay (selector, delay = mzDelay) {
    setTimeout(() => this.update(selector), delay)
  }
}
