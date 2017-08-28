import React, { Component } from 'react'
import animation from './animation'
import './Tshirt.css'

export default class extends Component {
  constructor(props) {
    super(props)

    this.$ = null
  }

  componentDidMount() {
    animation.about.showArtwork(this.$)
  }

  render() {
    return <div id="tshirt" ref={($) => this.$ = $}></div>
  }
}