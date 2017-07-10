import React from 'react'
import MultilineText from './MultilineText'
import './AboutMe.css'

export default () => {
  const description = [
    'I\'m a French independent Digital Art Director. I create brand identities,',
    'websites/mobile interfaces, digital campaign... I am curious and love',
    'to improve your most beautiful stories. I\'m available for selective',
    'projects and collaborations. Feel free to send me an email.'
  ]
  const urls = {
    'email' : 'emi.tan@gmail.com'
  }

  return (<section id="aboutme">
    <p>
      <strong>About me.</strong>
      <MultilineText description={description} urls={urls}/>
    </p>
  </section>)
}