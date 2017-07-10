import React from 'react'
import Work from './Work'
import slug from 'slug'
import Masonry from 'react-masonry-component'
import './Works.css'

const renderWorks = (items) => {
  return items.map(item => {
    const id = slug(item.name, { lower: true })
    
    return (<Work key={item.name} id={id} {...item} />)
  })
}

const MASONRY_OPTIONS = {
  horizontalOrder : true,
  fitWidth : true,
  gutter: 100
}

export default () => {
  const projects = [{
      name: 'Restaurant Crissier',
      position: 'art direction, website',
      image: '/images/thumbs/crissier.jpg'
  }, {
      name: 'Agence Soon x JB Martin',
      position: 'UX, art direction, website',
      image: '/images/thumbs/soon_martin.jpg'
  }, {
      name: 'Eudoxia',
      position: 'branding, art direction, website',
      image: '/images/thumbs/eudoxia.jpg'
  }, {
      name: 'Furla',
      position: 'art direction, website',
      image: '/images/thumbs/furla.jpg'
  }, {
      name: 'Digiposte',
      position: 'art direction, UI',
      image: '/images/thumbs/digiposte.jpg'
  }, {
      name: 'E-Nymphea',
      position: 'identity, website',
      image: '/images/thumbs/nymphea.jpg'
  }, {
      name: 'Perrier',
      position: 'art direction, website',
      image: '/images/thumbs/perrier.jpg'
  }, {
      name: 'Mercedes Occasions',
      position: 'identity, website',
      image: '/images/thumbs/mercedes.jpg'
  }, {
      name: 'TEDx Champs Elysées Women',
      position: 'branding, illustrations',
      image: '/images/thumbs/tedx.jpg'
  }, {
      name: 'Princesse Tam Tam',
      position: 'art direction, e-magazine',
      image: '/images/thumbs/tam_tam.jpg'
  }, {
      name: 'Warner',
      position: 'branding, event',
      image: '/images/thumbs/warner.jpg'
  }, {
      name: 'SkII',
      position: 'art direction, UI, mobile',
      image: '/images/thumbs/skii.jpg'
  }, {
      name: 'Générale optique',
      position: 'webdesign, newsletters campaignes',
      image: '/images/thumbs/generale_optique.jpg'
  }]

  return (<section id="works">
    <div>
      <Masonry options={MASONRY_OPTIONS}>{renderWorks(projects)}</Masonry>
    </div>
  </section>)
}
