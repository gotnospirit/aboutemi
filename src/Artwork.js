import React, { Component } from 'react'
import Helmet from 'react-helmet'
import './Artwork.css'

const svg4everybody = () => {
  if (window.svg4everybody) {
    window.svg4everybody()
  }
}

export default class extends Component {
  componentDidMount() {
    window.addEventListener('load', svg4everybody);
  }

  componentWillUnmount() {
    window.removeEventListener('load', svg4everybody);
  }

  render() {
    return <div id="artwork">
      <Helmet script={[ { 'src' : 'scripts/svg4everybody.min.js'} ]}/>
      <div>
        <svg role="img" viewBox="0 0 437 435">
          <use xlinkHref="degrade.svg#artwork"/>
        </svg>
      </div>
    </div>
  }
}