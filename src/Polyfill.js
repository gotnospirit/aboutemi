import { Component } from 'react'
import scriptjs from 'scriptjs'

export default class extends Component {
  componentDidMount() {
    const src = 'scripts/svg4everybody.min.js'

    scriptjs(src, () => {
      if (window.svg4everybody) {
        window.svg4everybody()
      }
    })
  }

  render() {
    return null
  }
}