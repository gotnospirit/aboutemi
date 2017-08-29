import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ExternalLink from './ExternalLink'
import InternalLink from './InternalLink'
import EmailLink from './EmailLink'
import './Header.css'

const renderLink = (href, title) => {
  return <NavLink to={href} activeClassName="selected">{title}</NavLink>
}

export default ({ is_homepage }) => {
  const classname = is_homepage ? null : 'fixed'

  return (<header className={classname}>
    {(!is_homepage)
      ? (<h1><Link to="/">Back to homepage</Link></h1>)
      : null}
    <nav>
      {(is_homepage) 
        ? <InternalLink href="/#thumbs" label="works" />
        : renderLink('/works', 'works')}
      {renderLink('/about', 'about')}
      <ExternalLink href="http://www.inestimable.me/" label="my blog" />
      <EmailLink address="emi.tan@gmail.com" label="contact" />
    </nav>
  </header>)
}