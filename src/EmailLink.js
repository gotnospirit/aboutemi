import React from 'react';

export default ({ address, label=null }) => (
  <a href={'mailto:' + address}>{label ? label : address}</a>
);