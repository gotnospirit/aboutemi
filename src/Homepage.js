import React from 'react'
import Helmet from 'react-helmet'
import Header from './Header'
import Presentation from './Presentation'
import Works from './Works'
import Footer from './Footer'
import './Homepage.css'

export default ({ pathname }) => (
  <div id="homepage">
    <Helmet title="Aboutemi - Art Direction - Interface Design - Emilie Tan"/>
    <Header is_homepage={true} selected={pathname}/>
    <Presentation/>
    <Works/>
    <Footer/>
  </div>
)