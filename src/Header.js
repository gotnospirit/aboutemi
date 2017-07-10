import React from 'react'
import { Link } from 'react-router-dom'
import ExternalLink from './ExternalLink'
import InternalLink from './InternalLink'
import EmailLink from './EmailLink'
import './Header.css'

export default () => (
  <header>
    <h1><Link to="/">Back to homepage</Link></h1>
    <nav>
      <InternalLink href="#works" label="works" />
      <InternalLink href="#about" label="about" />
      <ExternalLink href="http://www.inestimable.me/" label="my blog" />
      <EmailLink address="emi.tan@gmail.com" label="contact" />
    </nav>
  </header>
)