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

const renderNav = (previous, next, is_last) => {
  if (!is_last) {
    return null
  }
  return (<ul>
      {renderNavLink('previous_work', '#', 'previous project', !!previous)}
      {renderNavLink('next_work', '#', 'next project', !!next)}
      <li id="all_works"><Link to="/works">works</Link></li>
    </ul>)
}

export default ({ id }) => { 
  this.items = [
    {
      figures : [
        '/images/works/project01.jpg'
      ]
    },
    {
      background : '#F3F2F2',
      presentation : {
        client : 'Agence soon by kaliop',
        title : 'Jb Martin',
        text : [
          'Marque de chaussures française haut de gamme pour femme, elle propose des collections de souliers chics et modernes ainsi qu\'une ligne de maroquinerie confectionnée avec un sens du détail affûté.',
          'Le nouveau positionnement de la marque se reflète avec une navigation intuitive, une ambiance graphique épurée et élégante. La volonté de JB Martin est de proposer une expérience inédite de shopper en ligne tout en présentant des collections exclusives, du service et un contenu particulier sur les tendances et les styles du moment. Propulsé sous Magento, le site est conçu en responsive pour une expérience utilisateur optimatile sur desktop, tablette ou mobile.'
        ],
        credits : 'CRÉDITS PHOTOS : Jb Martin'
      }
    },
    {
      figures : [
        '/images/works/project02.jpg'
      ]
    },
    {
      background : '#F3F2F2',
      title : 'Mobile',
      figures : [
        '/images/works/project03.jpg',
        '/images/works/project04.jpg'
      ]
    }
  ]
  this.previous = null
  this.next = null

  return (
    <div id="work">
      <Helmet title="Aboutemi - Art Direction - Interface Design - Emilie Tan"/>
      {renderProject(this.items, this.previous, this.next)}
    </div>
  )
}