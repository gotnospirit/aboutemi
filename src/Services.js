import React from 'react'
import EmailLink from './EmailLink'
import PhoneLink from './PhoneLink'
import ExternalLink from './ExternalLink'
import Carousel from './Carousel'
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
      <Carousel/>
    </div>
  </section>)
}