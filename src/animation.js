import { TweenLite, TimelineLite } from 'gsap'

export default {
  home: {
    showTitle($) {
      var tl = new TimelineLite();

      tl.fromTo($, 1, { width: 0 }, { width: $.offsetWidth, ease: 'Power2.easeInOut' })
      tl.fromTo($.firstChild, .5, { opacity: 0 }, { opacity: 1 })

      return tl
    },
    showText($) {
      return TweenLite.fromTo($, 1.5, { opacity: 0 }, { opacity: 1, ease: 'Power2.easeInOut' })
    }
  }
}