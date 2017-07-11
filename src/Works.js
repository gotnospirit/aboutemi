import React from 'react'
import Helmet from 'react-helmet'
import Header from './Header'
import Thumbs from './Thumbs'
import Footer from './Footer'
import './Works.css'

export default ({ pathname }) => (
  <div id="works">
    <Helmet title="Aboutemi - Art Direction - Interface Design - Emilie Tan"/>
    <Header selected={pathname}/>
    <Thumbs/>
    <Footer/>
  </div>
)