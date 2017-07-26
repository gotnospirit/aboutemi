import React from 'react'
import { Link } from 'react-router-dom'
import ExternalLink from './ExternalLink'
import InternalLink from './InternalLink'
import EmailLink from './EmailLink'
import './Header.css'

const renderLink = (href, title, current_path) => {
  return (<Link to={href} className={0 === current_path.indexOf(href) ? 'selected' : null}>{title}</Link>)
}

export default ({ pathname }) => {
  const is_homepage = '/' === pathname

  return (<header>
    {(!is_homepage)
      ? (<h1><Link to="/">Back to homepage</Link></h1>)
      : null}
    <nav>
      {(is_homepage) 
        ? <InternalLink href="/#thumbs" label="works" />
        : renderLink('/works', 'works', pathname)}
      {renderLink('/about', 'about', pathname)}
      <ExternalLink href="http://www.inestimable.me/" label="my blog" />
      <EmailLink address="emi.tan@gmail.com" label="contact" />
    </nav>
  </header>)
}