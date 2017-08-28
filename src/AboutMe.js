import React, { Component } from 'react'
import MultilineText from './MultilineText'
import { about_me } from './data'
import animation from './animation'
import './AboutMe.css'

export default class extends Component {
  constructor(props) {
    super(props)

    this.$ = null
  }

  componentDidMount() {
    animation.about.showTitle(this.$)
  }

  render() {
    return (<section id="aboutme">
      <strong ref={($) => this.$ = $}>
        <span>About me.</span>
      </strong>
      <MultilineText
        show={animation.about.showText}
        {...about_me}/>
    </section>)
  }
}
