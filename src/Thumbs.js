import React from 'react'
import Thumb from './Thumb'
import { projects } from './data'
import Masonry from 'react-masonry-component'
import './Thumbs.css'

const renderThumbs = (items) => items.map(item => <Thumb key={item.name} {...item} />)

const MASONRY_OPTIONS = {
  horizontalOrder : true,
  fitWidth : true
}

export default () => {
  return (<section id="thumbs">
    <div>
      <Masonry options={MASONRY_OPTIONS}>
        {renderThumbs(projects)}
      </Masonry>
    </div>
  </section>)
}
