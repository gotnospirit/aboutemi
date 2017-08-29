import React, { Component } from 'react'
import animation from './animation'
import { withAnimation } from './AnimationRouter'
import './Tshirt.css'

export default withAnimation(class extends Component {
  constructor(props) {
    super(props)

    this.$ = null
  }

  componentDidMount() {
    animation.about.showArtwork(this.$)
    this.props.leave(() => animation.about.hideArtwork(this.$))
  }

  render() {
    return <div id="tshirt" ref={($) => this.$ = $}></div>
  }
})