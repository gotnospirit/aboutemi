import React from 'react'
import { services } from './data'
import './Carousel.css'

export default () => {
  const { stuffs } = services

  return <p id="carousel">
      Some stuff I love : <span>{stuffs[0]}</span>.
    </p>
}