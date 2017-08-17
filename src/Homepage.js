import React from 'react'
import Presentation from './Presentation'
import Artwork from './Artwork'
import Thumbs from './Thumbs'
import './Homepage.css'

export default () => (
  <div id="homepage">
    <Presentation/>
    <Artwork id="home_degrade" filepath="home_degrade.svg#Calque_2" width={437} height={435} />
    <Thumbs/>
  </div>
)