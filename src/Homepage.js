import React from 'react'
import Helmet from 'react-helmet'
import Header from './Header'
import Presentation from './Presentation'
import Thumbs from './Thumbs'
import Footer from './Footer'
import './Homepage.css'

export default ({ pathname }) => (
  <div id="homepage">
    <Helmet title="Aboutemi - Art Direction - Interface Design - Emilie Tan"/>
    <Header is_homepage={true} selected={pathname}/>
    <Presentation/>
    <Thumbs/>
    <Footer/>
  </div>
)