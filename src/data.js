const arrange = (projects) => {
  if (!window.matchMedia) {
    return projects
  }

  if (!window.matchMedia('(min-width: 1024px)').matches) {
    return projects
  }

  let result = [
    [], [], []
  ]
  const max = projects.length
  const nb_columns = result.length

  for (let i = 0; i < max; ++i) {
    result[i % nb_columns].push(projects[i])
  }
  return [].concat.apply([], result)
}

const projects = arrange([
  {
      name : 'Restaurant Crissier',
      position : 'art direction, website',
      image : '/images/thumbs/crissier.jpg'
  }, {
      name : 'Agence Soon x JB Martin',
      position : 'UX, art direction, website',
      image : '/images/thumbs/soon_martin.jpg',
      details : [
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
  }, {
      name : 'Eudoxia',
      position : 'branding, art direction, website',
      image : '/images/thumbs/eudoxia.jpg'
  }, {
      name : 'Furla',
      position : 'art direction, website',
      image : '/images/thumbs/furla.jpg'
  }, {
      name : 'Digiposte',
      position : 'art direction, UI',
      image : '/images/thumbs/digiposte.jpg'
  }, {
      name : 'E-Nymphea',
      position : 'identity, website',
      image : '/images/thumbs/nymphea.jpg'
  }, {
      name : 'Perrier',
      position : 'art direction, website',
      image : '/images/thumbs/perrier.jpg'
  }, {
      name : 'Mercedes Occasions',
      position : 'identity, website',
      image : '/images/thumbs/mercedes.jpg'
  }, {
      name : 'TEDx Champs Elysées Women',
      position : 'branding, illustrations',
      image : '/images/thumbs/tedx.jpg'
  }, {
      name : 'Princesse Tam Tam',
      position : 'art direction, e-magazine',
      image : '/images/thumbs/tam_tam.jpg'
  }, {
      name : 'Warner',
      position : 'branding, event',
      image : '/images/thumbs/warner.jpg'
  }, {
      name : 'SkII',
      position : 'art direction, UI, mobile',
      image : '/images/thumbs/skii.jpg'
  }, {
      name : 'Générale optique',
      position : 'webdesign, newsletters campaignes',
      image : '/images/thumbs/generale_optique.jpg'
  }
])

export {
  projects
}