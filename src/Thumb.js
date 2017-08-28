import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import slug from 'slug'
import animation from './animation'

const renderMedias = (image, alt) => {
  if ('string' === typeof(image)) {
    return <img src={image} alt={alt}/>
  }
  return <div>
    <img src={image.on} alt={alt}/>
    <img src={image.off} alt={alt}/>
  </div>
}

export default class extends Component {
  constructor(props) {
    super(props)

    this.$ = null
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.visible && !this.props.visible) {
      animation.home.showThumb(this.$)
    }
  }

  render() {
    const { image, name, position } = this.props
    const id = slug(name, { lower: true })

    return (
      <Link to={'/works/' + id}>
        <figure ref={($) => this.$ = $}>
          {renderMedias(image, name)}
          <figcaption>
            <span>{name}</span>
            {position}
          </figcaption>
        </figure>
      </Link>
    )
  }
}