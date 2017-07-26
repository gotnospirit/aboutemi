import React from 'react'
import Presentation from './Presentation'
import Artwork from './Artwork'
import Thumbs from './Thumbs'
import './Homepage.css'

export default () => (
  <div id="homepage">
    <Artwork/>
    <Presentation/>
    <Thumbs/>
  </div>
)