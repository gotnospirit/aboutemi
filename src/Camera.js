import React, { Component } from 'react'

const DURATION = 1200

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayed : false,
      to : 0,
      startAt : 0,
      current : 0,
      scheduler_id : null
    }

    this.scrollFrame = this.scrollFrame.bind(this)
    this.repaint = this.repaint.bind(this)
  }

  animate(to) {
    this.setState({
      to : to >> 0,
      startAt : 0,
      scheduler_id : requestAnimationFrame(this.scrollFrame)
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.repaint)
    window.addEventListener('scroll', this.repaint)

    window.animate = this.animate.bind(this)

    this.repaint()
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.repaint)
    window.removeEventListener('scroll', this.repaint)

    cancelAnimationFrame(this.state.scheduler_id)
  }

  repaint() {
    let doc = document.documentElement,
        current = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)

    this.setState({
      current : current,
      displayed : current > 0
    })
  }

  scrollFrame() {
    let now = Date.now(),
        elapsed = 0,
        startTime = this.state.startAt,
        position = 0,
        from = this.state.current,
        to = this.state.to - from,
        destination = this.state.to,
        newState = {}

    if (null === DURATION) {
      return null
    }

    if (!startTime) {
      newState.startAt = startTime = now
    }

    elapsed = now - startTime
    // Si on a dépassé la durée maximale
    if (elapsed > DURATION) {
      // on se limite à cette durée
      elapsed = DURATION
      position = destination
    } else {
      //@see http://www.robertpenner.com/easing/
      //position = DURATION ? to * Math.sqrt(1 - (elapsed = (elapsed / DURATION) - 1) * elapsed) + from : to + from; //easeOutCircular
      position = DURATION ? -to * (elapsed /= DURATION) * (elapsed - 2) + from : to + from // easeOutQuad
    }

    position = position >> 0

    if (position === destination - 1) {
      position = destination
    } else if (position === destination + 1) {
      position = destination
    }

    window.scrollTo(0, position)

    newState.current = position

    if (position !== destination) {
      newState.scheduler_id = requestAnimationFrame(this.scrollFrame)
    }
    
    this.setState(newState)
  }

  componentWillUpdate(nextProps, nextState) {
    if ('PUSH' === nextProps.action && nextProps.pathname !== this.props.pathname) {
      this.animate(0)
    }
  }

  render() {
    return <div id="Camera">
      {this.props.children}
    </div>
  }
}