import React from 'react'
import { Link } from 'react-router-dom'

export default ({ id, name, position, image}) => {
  return (
    <Link to={'/projects/' + id}>
      <figure>
        <img src={image} alt={name}/>
        <figcaption><span>{name}</span>{position}</figcaption>
      </figure>
    </Link>
  )
}
