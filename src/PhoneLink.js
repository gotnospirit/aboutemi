import React from 'react';

export default ({ number, label=null }) => (
  <span className="phone"><a href={'tel:' + number.replace(/\s/g, '')}>{label ? label : number}</a></span>
);