import { TweenLite, TimelineLite } from 'gsap'

const showTitle = ($) => {
  var tl = new TimelineLite();

  tl.fromTo($, 1, { width: 0 }, { width: $.offsetWidth, ease: 'Power2.easeInOut' })
  tl.fromTo($.firstChild, .5, { opacity: 0 }, { opacity: 1 })

  return tl
}

const showText = ($) => {
  return TweenLite.fromTo($, 1.5, { opacity: 0 }, { opacity: 1, ease: 'Power2.easeInOut' })
}

export default {
  home: {
    showTitle,
    showText,
    showThumb($) {
      var tl = new TimelineLite();

      tl.fromTo($, 1, { opacity: 0 }, { opacity: 1, ease: 'Power2.easeOut' }, 'start')
      tl.fromTo($, .5, { y: $.offsetHeight }, { y: 0 }, 'start')

      return tl
    }
  },
  about: {
    showTitle,
    showText,
    showArtwork: showText
  }
}