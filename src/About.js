import React from 'react'
import AboutMe from './AboutMe'
import Services from './Services'
import './About.css'

export default () => (
  <div id="about">
    <div id="tshirt">
      <div>
        <svg role="img" viewBox="0 0 437 435">
          <use xlinkHref="home_degrade.svg#Calque_2" />
        </svg>
      </div>
    </div>
    <AboutMe/>
    <Services/>
  </div>
)