import React from 'react'
import { Link } from 'react-router-dom'
import { getSlug } from './utils'

const renderMedias = (image, alt) => {
  if ('string' === typeof(image)) {
    return <img src={image} alt={alt}/>
  }
  return <div>
    <img src={image.on} alt={alt}/>
    <img src={image.off} alt={alt}/>
  </div>
}

export default ({ image, name, position }) => {
  const id = getSlug(name)

  return (
    <Link to={'/works/' + id}>
      <figure>
        {renderMedias(image, name)}
        <figcaption>
          <span>{name}</span>
          {position}
        </figcaption>
      </figure>
    </Link>
  )
}