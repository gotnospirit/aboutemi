import React, { Component } from 'react'
import Thumb from './Thumb'
import { projects } from './data'
import Masonry from 'react-masonry-component'
import animation from './animation'
import { withAnimation } from './AnimationRouter'
import { TimelineLite } from 'gsap'
import './Thumbs.css'

const MASONRY_OPTIONS = {
  horizontalOrder: true,
  fitWidth: true,
  transitionDuration: 0
}

export default withAnimation(class extends Component {
  constructor(props) {
    super(props)

    this.onLayoutCompleted = this.onLayoutCompleted.bind(this)
  }

  onLayoutCompleted(items) {
    items.map(item => animation.thumbs.show(item.element.firstChild))

    this.props.leave(() => {
      var tl = new TimelineLite()

      items.map(item => tl.add(animation.thumbs.hide(item.element.firstChild), 'tag'))

      return tl
    })
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return (<section id="thumbs">
      <div>
        <Masonry
          options={MASONRY_OPTIONS}
          onLayoutComplete={this.onLayoutCompleted}>
          {projects.map(project => <Thumb key={project.name} {...project} />)}
        </Masonry>
      </div>
    </section>)
  }
})