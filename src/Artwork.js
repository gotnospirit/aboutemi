import React from 'react'
import './Artwork.css'

export default ({ filepath, width, height }) => (
  <div id="artwork">
      <div>
        <svg role="img" viewBox={'0 0 ' + width + ' ' + height}>
          <use xlinkHref={filepath + '#artwork'}/>
        </svg>
      </div>
  </div>
)