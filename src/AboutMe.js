import React from 'react'
import MultilineText from './MultilineText'
import { about_me } from './data'
import './AboutMe.css'

export default () => (
  <section id="aboutme">
    <strong>About me.</strong>
    <MultilineText {...about_me}/>
  </section>
)