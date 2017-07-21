import React from 'react'
import Thumb from './Thumb'
import { projects } from './data'
import './Thumbs.css'

const renderThumbs = (items) => items.map(item => <Thumb key={item.name} {...item} />)

export default () => {
  return (<section id="thumbs">
    <div>
      {renderThumbs(projects)}
    </div>
  </section>)
}
