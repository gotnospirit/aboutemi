import React from 'react'
import Helmet from 'react-helmet'
import AboutMe from './AboutMe'
import Services from './Services'

export default () => (
  <div id="about">
    <Helmet title="Aboutemi - Art Direction - Interface Design - Emilie Tan"/>
    <AboutMe/>
    <Services/>
  </div>
)