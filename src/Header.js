import React from 'react'
import { Link } from 'react-router-dom'
import ExternalLink from './ExternalLink'
import InternalLink from './InternalLink'
import EmailLink from './EmailLink'
import './Header.css'

const renderLink = (href, title, selected) => {
  return (<Link to={href} className={href === selected ? 'selected' : null}>{title}</Link>)
}

export default ({ is_homepage=false, selected=null }) => (
  <header>
    {(!is_homepage)
      ? (<h1><Link to="/">Back to homepage</Link></h1>)
      : null}
    <nav>
      {(is_homepage) 
        ? <InternalLink href="#works" label="works" />
        : renderLink('/works', 'works', selected)}
      {renderLink('/about', 'about', selected)}
      <ExternalLink href="http://www.inestimable.me/" label="my blog" />
      <EmailLink address="emi.tan@gmail.com" label="contact" />
    </nav>
  </header>
)