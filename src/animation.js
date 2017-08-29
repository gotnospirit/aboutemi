import { TweenLite, TimelineLite } from 'gsap'

const showTitle = ($) => {
  var tl = new TimelineLite()

  tl.fromTo($, 1, {
    width: 0,
    paddingLeft: 0,
    paddingRight: 0
  }, {
    width: $.offsetWidth,
    paddingLeft: '.5em',
    paddingRight: '.5em',
    ease: 'Power2.easeInOut'
  })
  tl.fromTo($.firstChild, .5, { opacity: 0 }, { opacity: 1, ease: 'Power2.easeOut' })

  return tl
}

const showText = ($) => {
  return TweenLite.fromTo($, 1.5, { opacity: 0 }, { opacity: 1, ease: 'Power2.easeInOut' })
}

const hideTitle = ($) => {
  var tl = new TimelineLite()

  tl.to($.firstChild, .5, { opacity: 0, ease: 'Power2.easeOut' })
  tl.to($, 1, {
    width: 0,
    paddingLeft: 0,
    paddingRight: 0,
    ease: 'Power2.easeInOut'
  })

  return tl
}

const hideText = ($) => {
  return TweenLite.to($, 1.5, { opacity: 0, ease: 'Power2.easeInOut' })
}

export default {
  home: {
    showTitle,
    showText,
    hideTitle,
    hideText,
    showThumb($) {
      var tl = new TimelineLite()

      tl.fromTo($, 1, { opacity: 0 }, { opacity: 1, ease: 'Power2.easeOut' }, 'start')
      tl.fromTo($, .5, { y: $.offsetHeight }, { y: 0 }, 'start')

      return tl
    },
    hideThumb($) {
      var tl = new TimelineLite()

      tl.to($, 1, { opacity: 0, ease: 'Power2.easeOut' }, 'start')
      tl.to($, .5, { y: 0 }, 'start')

      return tl
    }
  },
  about: {
    showTitle,
    showText,
    hideTitle,
    hideText,
    showArtwork: showText,
    hideArtwork: hideText
  }
}