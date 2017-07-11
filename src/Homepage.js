import React from 'react'
import Helmet from 'react-helmet'
import Presentation from './Presentation'
import Thumbs from './Thumbs'
import './Homepage.css'

export default () => (
  <div id="homepage">
    <Helmet title="Aboutemi - Art Direction - Interface Design - Emilie Tan"/>
    <Presentation/>
    <Thumbs/>
  </div>
)