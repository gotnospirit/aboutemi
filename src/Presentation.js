import React, { Component } from 'react'
import MultilineText from './MultilineText'
import { withAnimation } from './AnimationRouter'

export default withAnimation(class extends Component {
  constructor(props) {
    super(props)

    this.$ = null
  }

  componentDidMount() {
    const { animation, leave } = this.props

    animation.showTitle(this.$)
    leave(() => animation.hideTitle(this.$))
  }

  render() {
    const { id, animation, data } = this.props
    const { title, ...multiline } = data

    return (<section id={id}>
      <strong ref={($) => this.$ = $}>
        <span>{title}</span>
      </strong>
      <MultilineText
        show={animation.showText}
        hide={animation.hideText}
        {...multiline}/>
    </section>)
  }
})