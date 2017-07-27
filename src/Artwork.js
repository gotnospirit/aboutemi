import React from 'react'

export default ({ filepath, width, height, ...props }) => (
  <div {...props}>
      <div>
        <svg role="img" viewBox={'0 0 ' + width + ' ' + height}>
          <use xlinkHref={filepath}/>
        </svg>
      </div>
  </div>
)