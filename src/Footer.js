import React from 'react'
import EmailLink from './EmailLink'
import PhoneLink from './PhoneLink'
import ExternalLink from './ExternalLink'
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
  window.animate(0)
  return false
}

export default () => {
  const address = 'emi.tan@gmail.com'
  const phone = {
    number : '+33689750218',
    label : '+33 (0)6 89 75 02 18'
  }
  const socials = [
    { url : 'http://fr.linkedin.com/in/emilietan', title : 'Linkedin' },
    { url : 'https://twitter.com/inStimable', title : 'Twitter' },
    { url : 'http://fr.pinterest.com/eterrestres/', title : 'Pinterest' },
    { url : 'https://www.tumblr.com/blog/roastedbyemi', title : 'Tumblr' }
  ]

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