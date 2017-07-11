import React from 'react'
import Helmet from 'react-helmet'
import Header from './Header'
import AboutMe from './AboutMe'
import Services from './Services'
import Footer from './Footer'

export default ({ pathname }) => (
  <div id="about">
    <Helmet title="Aboutemi - Art Direction - Interface Design - Emilie Tan"/>
    <Header selected={pathname}/>
    <AboutMe/>
    <Services/>
    <Footer/>
  </div>
)