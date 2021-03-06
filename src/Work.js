import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import { getPageTitle } from './utils'
import MultilineText from './MultilineText'
import './Work.css'

const renderTitle = (value) => {
  if (!value) {
    return null
  }
  return (<h3>{value}</h3>)
}

const renderFigure = (item, index) => {
  const is_video = 0 === item.indexOf('http://') || 0 === item.indexOf('https://')

  if (is_video) {
    return <div key={'video-' + index} className="video-container"><iframe title={'video-' + index} src={item} width="100%" height="auto" frameBorder="0" allowFullScreen={true} /></div>
  }
  return <figure key={'img-' + index}><img src={item} alt=""/></figure>
}

const renderFigures = (items) => {
  if (!items) {
    return null
  }
  return items.map(renderFigure)
}

const renderPresentationTitle = (value, order, url) => {
  if (!value) {
    return null
  }

  if (url) {
    value = <a href={url} target="_blank" rel="no-follow">{value}</a>
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
  return (<article>
    {renderPresentationTitle(value.title, 1)}
    {renderPresentationTitle(value.client, 2, value.url)}
    {renderPresentationText(value.text)}
    {renderPresentationTitle(value.credits, 3)}
    </article>)
}

const renderStringProject = (item, previous, next, index, max) => {
  return (<section key={index}>
      <div>
        {renderFigure(item, 0)}
        {renderNav(previous, next, index === max - 1)}
      </div>
    </section>)
}

const renderComplexProject = (item, previous, next, index, max) => {
  return (<section key={index} style={{
      backgroundColor : item.background
    }}>
      <div>
        {renderTitle(item.title)}
        {renderFigures(item.figures)}
        {renderPresentation(item.presentation)}
        {renderNav(previous, next, index === max - 1)}
      </div>
    </section>)
}

const renderProject = (items, previous, next) => {
  if (!items) {
    return null
  }

  let max = items.length

  return items.map((item, index) => ('string' === typeof(item))
    ? renderStringProject(item, previous, next, index, max)
    : renderComplexProject(item, previous, next, index, max))
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

export default ({ project, previous_project, next_project }) => {
  const title = getPageTitle(project.name)

  return (
    <div id="work">
      <Helmet
        title={title}
        meta={[{
          property: 'og:title',
          content: title
        }]}/>
      {renderProject(project.details, previous_project, next_project)}
    </div>
  )
}