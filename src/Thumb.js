import React from 'react'
import { Link } from 'react-router-dom'
import slug from 'slug'

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
  const id = slug(name, { lower: true })

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