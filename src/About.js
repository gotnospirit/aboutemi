import React, { Component } from 'react'
import AboutMe from './AboutMe'
import Services from './Services'
import animation from './animation'
import './About.css'

export default class extends Component {
  constructor(props) {
    super(props)

    this.$artwork = null
  }

  componentDidMount() {
    animation.about.showArtwork(this.$artwork)
  }

  render() {
    return (<div id="about">
        <AboutMe/>
        <div id="tshirt" ref={($) => this.$artwork = $}></div>
        <Services/>
      </div>)
  }
}