import React, { Component } from 'react'
import ExternalLink from './ExternalLink'
import EmailLink from './EmailLink'
import { withAnimation } from './AnimationRouter'

const renderText = (value, urls) => {
  if (!urls) {
    return value
  }

  let pattern = []
  for (let key in urls) {
    pattern.push('\\b' + key + '\\b')
  }

  const re = new RegExp('(' + pattern.join('|') + ')', 'g')
  let parts = value.split(re)

  for (let i = 0, max = parts.length; i < max; ++i) {
    const label = parts[i]
    const href = urls[label]

    if (undefined !== href) {
      parts[i] = (-1 === href.indexOf('@'))
        ? <ExternalLink key={'external-link-' + i} href={href} label={label} />
        : <EmailLink key={'link-' + i} address={href} label={label} />
    }
  }
  return parts
}

const renderDescription = (value, urls) => {
  if ('[object Array]' !== Object.prototype.toString.call(value)) {
    value = [value]
  }
  return value.map((v, index) => <span key={index}>{renderText(v, urls)}</span>)
}

export default withAnimation(class extends Component {
  constructor(props) {
    super(props)

    this.$ = null
  }

  componentDidMount() {
    if (this.props.show) {
      this.props.show(this.$)
    }

    if (this.props.hide) {
      this.props.leave(() => this.props.hide(this.$))
    }
  }

  render() {
    const { description, urls } = this.props

    return <span ref={($) => this.$ = $}>{renderDescription(description, urls)}</span>
  }
})