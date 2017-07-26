import React from 'react'
import Thumb from './Thumb'
import { projects } from './data'
import './Thumbs.css'

const arrange = (projects) => {
  if (!window.matchMedia) {
    return projects
  }

  if (!window.matchMedia('(min-width: 1024px)').matches) {
    return projects
  }

  let result = [
    [], [], []
  ]
  const max = projects.length
  const nb_columns = result.length

  for (let i = 0; i < max; ++i) {
    result[i % nb_columns].push(projects[i])
  }
  return [].concat.apply([], result)
}

const renderThumbs = (items) => items.map(item => <Thumb key={item.name} {...item} />)

export default () => {
  return (<section id="thumbs">
    <div>
      {renderThumbs(arrange(projects))}
    </div>
  </section>)
}
