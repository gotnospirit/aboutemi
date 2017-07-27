import React from 'react'
import MultilineText from './MultilineText'
import { about_me } from './data'
import './AboutMe.css'

export default () => (
  <section id="aboutme">
    <p>
      <strong>About me.</strong>
      <MultilineText {...about_me}/>
    </p>
  </section>
)