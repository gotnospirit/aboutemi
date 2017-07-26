import React from 'react'
import EmailLink from './EmailLink'
import PhoneLink from './PhoneLink'
import ExternalLink from './ExternalLink'
import { footer } from './data'
import './Footer.css'

const renderSocials = (items) => {
  return (
    <ul>{items.map((item, index) => (
      <li key={'social-' + index}><ExternalLink href={item.url} label={item.title} /></li>
    ))}</ul>
  )
}

const onScrollToTop = (e) => {
  e.preventDefault()

  if (window.animate) {
    window.animate(0)
  }
  return false
}

export default () => {
  const { address, phone, socials } = footer;

  return (<section id="footer">
      <div>
        <address>
          <EmailLink address={address}/>
          <PhoneLink {...phone}/>
        </address>
        {renderSocials(socials)}
        <button id="scroll_top" onClick={onScrollToTop} />
      </div>
    </section>)
}