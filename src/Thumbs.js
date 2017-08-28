import React from 'react'
import Thumb from './Thumb'
import { projects } from './data'
import Masonry from 'react-masonry-component'
import deferred from 'deferred'
import './Thumbs.css'

const renderThumbs = (items, show) => items.map(item => <Thumb key={item.name} show={show} {...item} />)

const MASONRY_OPTIONS = {
  horizontalOrder: true,
  fitWidth: true,
  transitionDuration: 0
}

export default () => {
  const show = new deferred()

  return (<section id="thumbs">
    <div>
      <Masonry options={MASONRY_OPTIONS} onLayoutComplete={items => show.resolve()}>
        {renderThumbs(projects, show)}
      </Masonry>
    </div>
  </section>)
}
