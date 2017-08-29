import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router } from 'react-router-dom'
import { TimelineLite } from 'gsap'

export default class extends Component {
  static childContextTypes = {
    leave: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.confirm = this.confirm.bind(this)
    this.onTimelineCompleted = this.onTimelineCompleted.bind(this)

    this.leave = new TimelineLite()
    this.leave.pause()
    this.leave.eventCallback('onComplete', this.onTimelineCompleted)

    this.animate = false
    this.navigate = null

    this.history = null
  }

  componentDidMount() {
    this.unblock = this.history.block((location, action) => {
      this.animate = 'PUSH' === action && !location.hash

      return 'unleash_the_kraken'
    })
  }

  componentWillUnmount() {
    this.unblock()
  }

  onTimelineCompleted() {
    this.leave.clear()
    this.leave.pause()

    if (this.navigate) {
      this.navigate(true)
      this.navigate = null
    }
  }

  getChildContext() {
    return {
      leave: (fn) => this.leave.add(fn(), 'tag')
    }
  }

  confirm(_, callback) {
    if (this.animate) {
      this.navigate = callback
      this.leave.play(0)
    } else {
      callback(true)
    }
  }

  render() {
    return <Router ref={(c) => this.history = c.history} basename={this.props.basename} getUserConfirmation={this.confirm}>
      {this.props.children}
      </Router>  
  }
}

const withAnimation = (Component) => {
  const Consumer = (props, context) => <Component {...props} {...context} />
  Consumer.contextTypes = {
    leave: PropTypes.func
  }
  return Consumer
}

export {
  withAnimation
}