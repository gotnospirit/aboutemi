import React from 'react'
import EmailLink from './EmailLink'
import PhoneLink from './PhoneLink'
import ExternalLink from './ExternalLink'
import TextCarousel from './TextCarousel'
import './Services.css'

const renderServices = (items) => {
  return (<ul>{items.map((item, index) => (
    <li key={'service-' + index}>{item}</li>
  ))}</ul>)
}

export default () => {
  const services = [
    'Art Direction',
    'UX/UI design',
    'Web design',
    'Mobile design',
    'Branding',
    'Sketches / illustrations'
  ]
  const resume = 'http://www.aboutemi.com/pdf/resume_etan.pdf'
  const address = 'emi.tan@gmail.com'
  const phone = {
    number : '+33689750218',
    label : '+33 6 89 75 02 18'
  }

  return (<section id="services">
    <div>
      <h3>Services</h3>
      {renderServices(services)}
      <address>
        <span>Download my resume <ExternalLink href={resume} label="here" /></span>
        <span><EmailLink address={address}/></span>
        <span><PhoneLink {...phone}/></span>
      </address>
    </div>
    <TextCarousel />
  </section>)
}