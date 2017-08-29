import React from 'react'
import Presentation from './Presentation'
import Tshirt from './Tshirt'
import Services from './Services'
import { about_me } from './data'
import animation from './animation'
import './About.css'

export default () => (
  <div id="about">
    <Presentation id="aboutme" animation={animation.about} data={about_me} />
    <Tshirt/>
    <Services/>
  </div>)