import React from 'react'
import EmailLink from './EmailLink'
import PhoneLink from './PhoneLink'
import ExternalLink from './ExternalLink'
import { services } from './data'
import './Services.css'

const renderServices = (items) => {
  return (<ul>{items.map((item, index) => (
    <li key={'service-' + index}>{item}</li>
  ))}</ul>)
}

export default () => {
  const { items, resume, address, phone } = services

  return (<section id="services">
    <div>
      <h3>Services</h3>
      {renderServices(items)}
      <address>
        <span>Download my resume <ExternalLink href={resume} label="here" /></span>
        <span><EmailLink address={address}/></span>
        <span><PhoneLink {...phone}/></span>
      </address>
    </div>
    <p id="carousel">Some stuff I love : organic cosmetics.</p>
  </section>)
}