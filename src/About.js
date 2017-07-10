import React from 'react'
import Helmet from 'react-helmet'
import Header from './Header'
import AboutMe from './AboutMe'
import Services from './Services'
import Footer from './Footer'

export default () => (
  <div id="about">
    <Helmet title="Aboutemi - Art Direction - Interface Design - Emilie Tan"/>
    <Header/>
    <AboutMe/>
    <Services/>
    <Footer/>
  </div>
)