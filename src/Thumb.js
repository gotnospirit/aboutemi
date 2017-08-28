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

    this.$container = null
  }

  render() {
    const { image, name, position, show } = this.props
    const id = slug(name, { lower: true })

    show.promise.then(() => animation.home.showThumb(this.$container))

    return (
      <Link to={'/works/' + id}>
        <figure ref={($) => this.$container = $}>
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