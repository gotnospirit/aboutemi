const basename = '/'

const projects = [{
  name: 'Restaurant de l\'hôtel de Ville Crissier',
  position: 'art direction, website',
  image: {
    'on': 'images/thumbs/crissier_on.gif',
    'off': 'images/thumbs/crissier_off.gif'
  },
  details: [
    'images/works/00_crissier.jpg',
    {
      background: '#fcfbfb',
      presentation: {
        title: 'Les ateliers Moonshine',
        client: 'Restaurant de l\'hôtel de Ville Crissier',
        text: [
          'Marque de chaussures française haut de gamme pour femme, elle propose des collections de souliers chics et modernes ainsi qu\'une ligne de maroquinerie confectionnée avec un sens du détail affûté.',
          'Le nouveau positionnement de la marque se reflète avec une navigation intuitive, une ambiance graphique épurée et élégante. La volonté de JB Martin est de proposer une expérience inédite de shopper en ligne tout en présentant des collections exclusives, du service et un contenu particulier sur les tendances et les styles du moment. Propulsé sous Magento, le site est conçu en responsive pour une expérience utilisateur optimale sur desktop, tablette ou mobile.'
        ],
        credits: 'Photo by: Restaurant de l\'hôtel de Ville Crissier'
      }
    },
    'images/works/01_crissier.jpg',
    {
      background: '#fffcf5',
      figures: [
        'images/works/02_crissier.jpg',
        'images/works/03_crissier.jpg',
        'images/works/04_crissier.jpg',
      ]
    }
  ]
}, {
  name: 'Agence Soon x JB Martin',
  position: 'UX, art direction, website',
  image: 'images/thumbs/jbm_off.jpg',
  details: [
    'images/works/00_jbm.jpg',
    {
      background: '#fcfbfb',
      presentation: {
        title: 'Agence soon by kaliop',
        client: 'JB Martin',
        text: [
          'Marque de chaussures française haut de gamme pour femme, elle propose des collections de souliers chics et modernes ainsi qu\'une ligne de maroquinerie confectionnée avec un sens du détail affûté.',
          'Le nouveau positionnement de la marque se reflète avec une navigation intuitive, une ambiance graphique épurée et élégante. La volonté de JB Martin est de proposer une expérience inédite de shopper en ligne tout en présentant des collections exclusives, du service et un contenu particulier sur les tendances et les styles du moment. Propulsé sous Magento, le site est conçu en responsive pour une expérience utilisateur optimale sur desktop, tablette ou mobile.'
        ],
        credits: 'Photo by: JB Martin'
      }
    },
    'images/works/01_jbm.jpg',
    {
      background: '#f8f7f7',
      title: 'Mobile',
      figures: [
        'images/works/02_jbm.png',
      ]
    }
  ]
}, {
  name: 'Eudoxia',
  position: 'branding, art direction, website',
  image: 'images/thumbs/eudoxia_off.gif',
  details: [
    'images/works/00_eudoxia.jpg',
    {
      background: '#fcfbfb',
      presentation: {
        client: 'Eudoxia',
        text: [
          'Marque de chaussures française haut de gamme pour femme, elle propose des collections de souliers chics et modernes ainsi qu\'une ligne de maroquinerie confectionnée avec un sens du détail affûté.',
          'Le nouveau positionnement de la marque se reflète avec une navigation intuitive, une ambiance graphique épurée et élégante. La volonté de JB Martin est de proposer une expérience inédite de shopper en ligne tout en présentant des collections exclusives, du service et un contenu particulier sur les tendances et les styles du moment. Propulsé sous Magento, le site est conçu en responsive pour une expérience utilisateur optimale sur desktop, tablette ou mobile.'
        ],
        credits: 'Photo by: Yollico Saito'
      }
    },
    'images/works/01_eudoxia.jpg',
    {
      background: '#DBECFE',
      figures: [
        'images/works/02_eudoxia.jpg',
        'images/works/03_eudoxia.jpg',
      ]
    },
    'images/works/04_eudoxia.jpg'
  ]
}, {
  name: 'Furla',
  position: 'art direction, website',
  image: {
    'on': 'images/thumbs/furla_on.jpg',
    'off': 'images/thumbs/furla_off.jpg'
  },
  details: [
    'images/works/00_furla.jpg',
    {
      background: '#fcfbfb',
      presentation: {
        client: 'Furla',
        text: [
          'Marque de chaussures française haut de gamme pour femme, elle propose des collections de souliers chics et modernes ainsi qu\'une ligne de maroquinerie confectionnée avec un sens du détail affûté.',
          'Le nouveau positionnement de la marque se reflète avec une navigation intuitive, une ambiance graphique épurée et élégante. La volonté de JB Martin est de proposer une expérience inédite de shopper en ligne tout en présentant des collections exclusives, du service et un contenu particulier sur les tendances et les styles du moment. Propulsé sous Magento, le site est conçu en responsive pour une expérience utilisateur optimatile sur desktop, tablette ou mobile.'
        ]
      }
    },
    {
      figures: [
        'images/works/01_furla.jpg',
        'images/works/02_furla.jpg',
        'images/works/03_furla.jpg',
        'images/works/04_furla.jpg',
        'images/works/05_furla.jpg',
      ]
    }
  ]
}, {
  name: 'Digiposte',
  position: 'art direction, UI',
  image: 'images/thumbs/digiposte_off.gif',
  details: [
    'images/works/00_digiposte.gif',
    {
      background: '#fcfbfb',
      presentation: {
        title: 'Agence Ekino Fullsix',
        client: 'Digiposte',
        text: [
          'Plus qu\'un simple espace de stockage, Digiposte est le coffre numérique proposé par La Poste qui vous accompagne dans l\'organisation et le stockage de tous vos documents importants grâce à une utilisation intuitive. Il vous permet de sauvegarder gratuitement et à vie 5 Go de données personnelles.'
        ]
      }
    },
    {
      background: '#e3f0fc',
      figures: [
        'https://www.youtube.com/embed/dsGV0NTNgO0?rel=0&amp;showinfo=0'
      ]
    },
    'images/works/01_digiposte.gif',
    'images/works/02_digiposte.gif',
    'images/works/03_digiposte.gif'
  ]
}, {
  name: 'E-Nymphea',
  position: 'identity, website',
  image: {
    'on': 'images/thumbs/enymphea_on.gif',
    'off': 'images/thumbs/enymphea_off.jpg'
  },
  details: [
    'images/works/00_enymphea.jpg',
    {
      background: '#fcfbfb',
      presentation: {
        title: 'Spa Collexion / Sequoiasoft',
        client: 'E-Nymphea',
        text: [
          'Marque de chaussures française haut de gamme pour femme, elle propose des collections de souliers chics et modernes ainsi qu\'une ligne de maroquinerie confectionnée avec un sens du détail affûté.',
          'Le nouveau positionnement de la marque se reflète avec une navigation intuitive, une ambiance graphique épurée et élégante. La volonté de JB Martin est de proposer une expérience inédite de shopper en ligne tout en présentant des collections exclusives, du service et un contenu particulier sur les tendances et les styles du moment. Propulsé sous Magento, le site est conçu en responsive pour une expérience utilisateur optimatile sur desktop, tablette ou mobile.'
        ]
      }
    },
    {
      figures: [
        'images/works/01_enymphea.jpg',
        'images/works/02_enymphea.jpg',
        'images/works/03_enymphea.jpg',
      ]
    },
    {
      background: '#F5F5F5',
      figures: [
        'images/works/04_enymphea.jpg',
      ]
    }
  ]
}, {
  name: 'Perrier',
  position: 'art direction, website',
  image: {
    'on': 'images/thumbs/perrier_on.gif',
    'off': 'images/thumbs/perrier_off.gif'
  },
  details: [
    'images/works/00_perrier.jpg',
    {
      background: '#fcfbfb',
      presentation: {
        client: 'Perrier',
        text: [
          'Marque de chaussures française haut de gamme pour femme, elle propose des collections de souliers chics et modernes ainsi qu\'une ligne de maroquinerie confectionnée avec un sens du détail affûté.',
          'Le nouveau positionnement de la marque se reflète avec une navigation intuitive, une ambiance graphique épurée et élégante. La volonté de JB Martin est de proposer une expérience inédite de shopper en ligne tout en présentant des collections exclusives, du service et un contenu particulier sur les tendances et les styles du moment. Propulsé sous Magento, le site est conçu en responsive pour une expérience utilisateur optimatile sur desktop, tablette ou mobile.'
        ],
        credits: 'Photo by: Perrier'
      }
    },
    {
      figures: [
        'images/works/01_perrier.gif',
        'images/works/02_perrier.jpg',
        'images/works/03_perrier.jpg',
        'images/works/04_perrier.gif',
      ]
    },
    {
      background: '#e3f0fc',
      figures: [
        'images/works/05_perrier.jpg',
        'images/works/06_perrier.jpg',
        'images/works/07_perrier.jpg',
        'images/works/08_perrier.jpg',
        'images/works/09_perrier.jpg',
      ]
    }
  ]
}, {
  name: 'Mercedes Occasions',
  position: 'identity, website',
  image: {
    'on': 'images/thumbs/mercedesoccasions_on..gif',
    'off': 'images/thumbs/mercedesoccasions_off.gif'
  },
  details: [
    'images/works/00_mercedesoccasions.jpg',
    {
      background: '#fcfbfb',
      presentation: {
        title: 'Agence proximity bbdo',
        client: 'Mercedes occasions',
        text: [
          'Marque de chaussures française haut de gamme pour femme, elle propose des collections de souliers chics et modernes ainsi qu\'une ligne de maroquinerie confectionnée avec un sens du détail affûté.',
          'Le nouveau positionnement de la marque se reflète avec une navigation intuitive, une ambiance graphique épurée et élégante. La volonté de JB Martin est de proposer une expérience inédite de shopper en ligne tout en présentant des collections exclusives, du service et un contenu particulier sur les tendances et les styles du moment. Propulsé sous Magento, le site est conçu en responsive pour une expérience utilisateur optimatile sur desktop, tablette ou mobile.'
        ]
      }
    },
    {
      background: '#e3f0fc',
      figures: [
        'images/works/01_mercedesoccasions.jpg',
        'images/works/02_mercedesoccasions.png',
        'images/works/03_mercedesoccasions.jpg',
        'images/works/04_mercedesoccasions.jpg',
      ]
    }
  ]
}, {
  name: 'TEDx Champs Elysées Women',
  position: 'branding, illustrations',
  image: {
    'on': 'images/thumbs/tedxcew_on.gif',
    'off': 'images/thumbs/tedxcew_off.gif'
  },
  details: [
    'images/works/00_tedxcewomen.jpg',
    {
      background: '#fcfbfb',
      presentation: {
        client: 'TEDx Champs Elysées Women',
        text: [
          'Marque de chaussures française haut de gamme pour femme, elle propose des collections de souliers chics et modernes ainsi qu\'une ligne de maroquinerie confectionnée avec un sens du détail affûté.',
          'Le nouveau positionnement de la marque se reflète avec une navigation intuitive, une ambiance graphique épurée et élégante. La volonté de JB Martin est de proposer une expérience inédite de shopper en ligne tout en présentant des collections exclusives, du service et un contenu particulier sur les tendances et les styles du moment. Propulsé sous Magento, le site est conçu en responsive pour une expérience utilisateur optimatile sur desktop, tablette ou mobile.'
        ],
        credits: 'Photo by: Olivier Ezratty & Emanuel Vivier'
      }
    },
    {
      figures: [
        'images/works/01_tedxcewomen.jpg',
        'images/works/02_tedxcewomen.jpg'
      ]
    },
    {
      title: 'speakers illustrations',
      figures: [
        'images/works/03_tedxcewomen.gif',
        'images/works/04_tedxcewomen.jpg',
        'images/works/05_tedxcewomen.jpg',
      ]
    },
  ]
}, {
  name: 'Princesse Tam Tam',
  position: 'art direction, e-magazine',
  image: {
    'on': 'images/thumbs/tamtam_on.jpg',
    'off': 'images/thumbs/tamtam_off.jpg'
  },
  details: [
    'images/works/00_tamtam.jpg',
    {
      background: '#fcfbfb',
      presentation: {
        client: 'Princess Tam Tam',
        text: [
          'Marque de chaussures française haut de gamme pour femme, elle propose des collections de souliers chics et modernes ainsi qu\'une ligne de maroquinerie confectionnée avec un sens du détail affûté.',
          'Le nouveau positionnement de la marque se reflète avec une navigation intuitive, une ambiance graphique épurée et élégante. La volonté de JB Martin est de proposer une expérience inédite de shopper en ligne tout en présentant des collections exclusives, du service et un contenu particulier sur les tendances et les styles du moment. Propulsé sous Magento, le site est conçu en responsive pour une expérience utilisateur optimatile sur desktop, tablette ou mobile.'
        ]
      }
    },
    {
      figures: [
        'images/works/01_tamtam.png',
        'images/works/02_tamtam.jpg',
        'images/works/03_tamtam.png',
        'images/works/04_tamtam.png'
      ]
    }
  ]
}, {
  name: 'Warner',
  position: 'branding, event',
  image: {
    'on': 'images/thumbs/warner_on.gif',
    'off': 'images/thumbs/warner_off.gif'
  },
  details: [
    'images/works/00_warner.jpg',
    {
      background: '#fcfbfb',
      presentation: {
        title: 'Agence monsieur white',
        client: 'Warner',
        text: [
          'Marque de chaussures française haut de gamme pour femme, elle propose des collections de souliers chics et modernes ainsi qu\'une ligne de maroquinerie confectionnée avec un sens du détail affûté.',
          'Le nouveau positionnement de la marque se reflète avec une navigation intuitive, une ambiance graphique épurée et élégante. La volonté de JB Martin est de proposer une expérience inédite de shopper en ligne tout en présentant des collections exclusives, du service et un contenu particulier sur les tendances et les styles du moment. Propulsé sous Magento, le site est conçu en responsive pour une expérience utilisateur optimatile sur desktop, tablette ou mobile.'
        ],
        credits: 'Photo by: Monsieur White / Warner'
      }
    },
    {
      figures: [
        'images/works/01_warner.jpg',
        'images/works/02_warner.jpg',
        'images/works/03_warner.jpg',
        'images/works/04_warner.jpg',
        'images/works/05_warner.jpg',
        'images/works/06_warner.jpg',
      ]
    }
  ]
}, {
  name: 'SkII',
  position: 'art direction, UI, mobile',
  image: {
    'on': 'images/thumbs/skII_on.jpg',
    'off': 'images/thumbs/skII_off.jpg'
  },
  details: [
    'images/works/00_skII.jpg',
    {
      background: '#fcfbfb',
      presentation: {
        client: 'SKII',
        text: [
          'Marque de chaussures française haut de gamme pour femme, elle propose des collections de souliers chics et modernes ainsi qu\'une ligne de maroquinerie confectionnée avec un sens du détail affûté.',
          'Le nouveau positionnement de la marque se reflète avec une navigation intuitive, une ambiance graphique épurée et élégante. La volonté de JB Martin est de proposer une expérience inédite de shopper en ligne tout en présentant des collections exclusives, du service et un contenu particulier sur les tendances et les styles du moment. Propulsé sous Magento, le site est conçu en responsive pour une expérience utilisateur optimatile sur desktop, tablette ou mobile.'
        ]
      }
    },
    {
      figures: [
        'images/works/01_skII.png',
        'images/works/02_skII.png'
      ]
    },
    {
      background: '#fae7e8',
      figures: [
        'images/works/03_skII.jpg',
      ]
    },
    {
      figures: [
        'images/works/04_skII.png',
        'images/works/05_skII.png'
      ]
    }
  ]
}]

const about_me = {
  title : 'About me.',
  description : [
    'I\'m a French independent Digital Art Director. I create brand identities,',
    'websites/mobile interfaces, digital campaign... I am curious and love',
    'to improve your most beautiful stories. I\'m available for selective',
    'projects and collaborations. Feel free to send me an email.'
  ],
  urls : {
    'email' : 'emi.tan@gmail.com'
  }
}

const footer = {
  address : 'emi.tan@gmail.com',
  phone : {
    number : '+33689750218',
    label : '+33 (0)6 89 75 02 18'
  },
  socials : [
    {
       url : 'http://fr.linkedin.com/in/emilietan',
       title : 'Linkedin'
    }, {
      url : 'https://twitter.com/inStimable',
      title : 'Twitter'
    }, {
      url : 'http://fr.pinterest.com/eterrestres/',
      title : 'Pinterest'
    }, {
      url : 'https://www.tumblr.com/blog/roastedbyemi',
      title : 'Tumblr'
    }
  ]
}

const home = {
  title : 'Hi.',
  description : [
    'I\'m Emilie Tan, Digital Art Director',
    'based in Paris, France and I\'m willing',
    'to work everywhere in the world.'
  ]
}

const services = {
  items : [
    'Art Direction',
    'UX/UI design',
    'Web design',
    'Mobile design',
    'Branding',
    'Sketches / illustrations'
  ],
  resume : 'http://www.aboutemi.com/pdf/resume_etan.pdf',
  address : 'emi.tan@gmail.com',
  phone : {
    number : '+33689750218',
    label : '+33 6 89 75 02 18'
  },
  stuffs : [
    'food',
    'travel',
    'latte',
    'super-heros',
    'organic cosmetics',
    'photography'
  ]
}

const page_title = ['Aboutemi', 'Art Direction', 'Interface Design', 'Emilie Tan']

export {
  basename,
  projects,
  about_me,
  footer,
  home,
  services,
  page_title
}