import React from 'react'
import MultilineText from './MultilineText'
import { home } from './data'
import './Presentation.css'

export default () => {
  return (<section id="presentation">
    <strong>Hi.</strong>
    <MultilineText {...home}/>
  </section>)
}
