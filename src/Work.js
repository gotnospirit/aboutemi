import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import MultilineText from './MultilineText'
import './Work.css'

const renderTitle = (value) => {
  if (!value) {
    return null
  }
  return (<h3>{value}</h3>)
}

const renderFigures = (items) => {
  if (!items) {
    return null
  }
  return items.map((item, index) => (
    <figure key={index}><img src={item} alt=""/></figure>
  ))
}

const renderPresentationTitle = (value, order) => {
  if (!value) {
    return null
  }

  if (1 === order) {
    return <h2>{value}</h2>
  } else if (2 === order) {
    return <h3>{value}</h3>
  }
  return <h4>{value}</h4>
}

const renderPresentationText = (value) => {
  if (!value) {
    return null
  }
  return <MultilineText description={value}/>
}

const renderPresentation = (value) => {
  if (!value) {
    return null
  }
  console.log(value)
  return (<article>
    {renderPresentationTitle(value.client, 1)}
    {renderPresentationTitle(value.title, 2)}
    {renderPresentationText(value.text)}
    {renderPresentationTitle(value.credits, 3)}
    </article>)
}

const renderProject = (items, previous, next) => {
  if (!items) {
    return null
  }

  let max = items.length
  
  return items.map((item, index) => (
    <section key={index} style={{ 
      backgroundColor : item.background 
    }}>
      <div>
        {renderTitle(item.title)}
        {renderFigures(item.figures)}
        {renderPresentation(item.presentation)}
        {renderNav(previous, next, index === max - 1)}
      </div>
    </section>
  ))
}

const renderNavLink = (id, project_id, label, enabled) => {
  if (!enabled) {
    return null
  }
  return <li id={id}><Link to={'/works/' + project_id}>{label}</Link></li>
}

const renderNav = (previous_id, next_id, is_last) => {
  if (!is_last) {
    return null
  }
  return (<ul>
      {renderNavLink('previous_work', previous_id, 'previous project', !!previous_id)}
      {renderNavLink('next_work', next_id, 'next project', !!next_id)}
      <li id="all_works"><Link to="/works">works</Link></li>
    </ul>)
}

export default ({ details, previous_project, next_project }) => {
  return (
    <div id="work">
      <Helmet title="Aboutemi - Art Direction - Interface Design - Emilie Tan"/>
      {renderProject(details, previous_project, next_project)}
    </div>
  )
}