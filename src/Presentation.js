import React from 'react'
import MultilineText from './MultilineText'
import './Presentation.css'

export default () => {
  const description = [
    'I\'m Emilie Tan, Digital Art Director',
    'based in Paris, France and I\'m willing',
    'to work everywhere in the world.'
  ]
  
  return (<section id="presentation">
    <p>
      <strong>Hi.</strong>
      <MultilineText description={description}/>
    </p>
  </section>)
}
