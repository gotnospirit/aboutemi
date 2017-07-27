import React from 'react'
import Artwork from './Artwork'
import AboutMe from './AboutMe'
import Services from './Services'
import './About.css'

export default () => (
  <div id="about">
    <Artwork id="tshirt" filepath="home_degrade.svg#Calque_2" width={437} height={435} />
    <AboutMe/>
    <Services/>
  </div>
)