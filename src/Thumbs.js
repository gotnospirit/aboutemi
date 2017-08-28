import React, { Component } from 'react'
import Thumb from './Thumb'
import { projects } from './data'
import Masonry from 'react-masonry-component'
import './Thumbs.css'

const MASONRY_OPTIONS = {
  horizontalOrder: true,
  fitWidth: true,
  transitionDuration: 0
}

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }
  }

  shouldComponentUpdate() {
    return !this.state.visible
  }

  render() {
    const visible = this.state.visible

    return (<section id="thumbs">
      <div>
        <Masonry
          options={MASONRY_OPTIONS}
          onLayoutComplete={items => {
              this.setState({ visible: true })
          }}>
          {projects.map(project => <Thumb key={project.name} visible={visible} {...project} />)}
        </Masonry>
      </div>
    </section>)
  }
}
