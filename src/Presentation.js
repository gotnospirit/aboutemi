import React, { Component } from 'react'
import MultilineText from './MultilineText'
import { home } from './data'
import animation from './animation'
import './Presentation.css'

export default class extends Component {
  constructor(props) {
    super(props)

    this.$ = null
  }

  componentDidMount() {
    animation.home.showTitle(this.$)
  }

  render() {
    return (<section id="presentation">
      <strong ref={($) => this.$ = $}>
        <span>Hi.</span>
      </strong>
      <MultilineText
        show={animation.home.showText}
        {...home}/>
    </section>)
  }
}
