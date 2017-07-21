import React from 'react'
import { Link } from 'react-router-dom'
import slug from 'slug'

export default ({ name, position, image }) => {
  const id = slug(name, { lower: true })

  return (
    <Link to={'/works/' + id}>
      <figure>
        <img src={image} alt={name}/>
        <figcaption><span>{name}</span>{position}</figcaption>
      </figure>
    </Link>
  )
}
