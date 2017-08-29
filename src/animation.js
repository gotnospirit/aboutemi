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

  tl.to($.firstChild, .5, { opacity: 0, ease: 'Power2.easeOut' }, 'tag')
  tl.to($, .5, {
    width: 0,
    paddingLeft: 0,
    paddingRight: 0,
    ease: 'Power2.easeInOut'
  }, 'tag')

  return tl
}

const hideText = ($) => {
  return TweenLite.to($, .5, { opacity: 0, ease: 'Power2.easeInOut' })
}

export default {
  home: {
    showTitle,
    showText,
    hideTitle,
    hideText
  },
  about: {
    showTitle,
    showText,
    hideTitle,
    hideText,
    showArtwork: showText,
    hideArtwork: hideText
  },
  thumbs: {
    show($) {
      var tl = new TimelineLite()

      tl.fromTo($, 1, { opacity: 0 }, { opacity: 1, ease: 'Power2.easeOut' }, 'tag')
      tl.fromTo($, .5, { y: $.offsetHeight }, { y: 0 }, 'tag')

      return tl
    },
    hide($) {
      var tl = new TimelineLite()

      tl.to($, .5, { opacity: 0, ease: 'Power2.easeOut' }, 'tag')
      tl.to($, .5, { y: $.offsetHeight }, 'tag')

      return tl
    }
  }
}