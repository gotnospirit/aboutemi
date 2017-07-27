import React from 'react'
import Presentation from './Presentation'
import Artwork from './Artwork'
import Thumbs from './Thumbs'
import './Homepage.css'

export default () => (
  <div id="homepage">
    <Artwork filepath="degrade.svg" width={437} height={435} />
    <Presentation/>
    <Thumbs/>
  </div>
)