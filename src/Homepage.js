import React from 'react'
import Presentation from './Presentation'
import Thumbs from './Thumbs'
import InternalLink from './InternalLink'
import './Homepage.css'

export default () => (
  <div id="homepage">
    <Presentation/>
    <div id="home_degrade">
      <InternalLink href="/#thumbs" label="works" />
      <div>
        <svg role="img" viewBox="0 0 437 435">
          <use xlinkHref="home_degrade.svg#Calque_2" />
        </svg>
      </div>
    </div>
    <Thumbs/>
  </div>
)