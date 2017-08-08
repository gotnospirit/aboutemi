import React, { Component } from 'react'
import { services } from './data'
import './Carousel.css'

const ANIMATION_DELAY = 1000
const VISIBILITY_DELAY = ANIMATION_DELAY + 2000

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = Object.assign(this.getNext(), {
      running : false
    })
    this.scheduler_id = null

    this.onFrame = this.onFrame.bind(this)
  }

  getNext() {
    const { stuffs } = services
    const currentIndex = this.state ? this.state.index : -1
    const nextIndex = (currentIndex < stuffs.length - 1) ? currentIndex + 1 : 0

    return {
      index : nextIndex,
      message : stuffs[nextIndex],
      visible : true,
      delay : VISIBILITY_DELAY,
      last : new Date()
    }
  }

  onFrame() {
    const now = new Date()

    if ((now - this.state.last) > this.state.delay) {
      if (this.state.visible) {
        this.setState({
          visible : false,
          delay : ANIMATION_DELAY,
          last : now
        })
      } else {
        this.setState(this.getNext())
      }
    }

    this.nextFrame()
  }

  nextFrame() {
    this.scheduler_id = requestAnimationFrame(this.onFrame)
  }

  componentDidMount() {
    this.setState({
      running : true
    })

    this.nextFrame()
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.scheduler_id)
  }

  render() {
    return <p id="carousel" className={this.state.running ? 'animated' : null}>
        Some stuff I love : <span className={this.state.visible ? 'visible' : null}>{this.state.message}</span>.
      </p>
  }
}