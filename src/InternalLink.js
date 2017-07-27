import React from 'react'
import { Link } from 'react-router-dom'

const onClickHandler = (e) => {
  var href = e.target.href,
      target_id = href.substr(href.indexOf('#') + 1),
      bodyRect = document.body.getBoundingClientRect(),
      el = document.getElementById(target_id),
      elemRect = el ? el.getBoundingClientRect() : null

  if (elemRect) {
    let y = elemRect.top - bodyRect.top,
        header = document.querySelector('header'),
        headerRect = header ? header.getBoundingClientRect() : null

    if (headerRect) {
      y -= (headerRect.bottom - headerRect.top)
    }

    if (window.animate) {
      window.animate(y)
    }
  }
};

export default ({ href, label }) => (
  <Link to={href} onClick={onClickHandler}>{label}</Link>
)