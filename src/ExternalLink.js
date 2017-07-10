import React from 'react';

export default ({ href, label=null, title=null, className=null }) => (
  <a href={href} target="_blank" className={className} title={title} rel="noopener noreferrer">{label}</a>
);