import React from 'react';
import { Link } from 'react-router-dom';

const onClickHandler = (e) => {
  var href = e.target.href,
      target_id = href.substr(href.indexOf('#') + 1),
      bodyRect = document.body.getBoundingClientRect(),
      el = document.getElementById(target_id),
      elemRect = el ? el.getBoundingClientRect() : null;

  if (elemRect)
  {
    window.animate(elemRect.top - bodyRect.top);
  }
};

export default ({ href, label }) => (
  <Link to={href} onClick={onClickHandler}>{label}</Link>
);