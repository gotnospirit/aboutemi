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
        client: 'The Hotel de ville Crissier restaurant',
        text: [
          'The Hôtel de ville de Crissier restaurant in Switzerland offers exceptional service and Franck Giovannini’s, the successor to Benoit Violier a Michelin three star chef signature cuisine',
          'The objective of the graphic redesign of the website was both to offer a design that matches the quality of the dishes served and to meet in responsive development standards. The idea was to enhance this elaborate cuisine with warm colors. Large visuals / full-screen videos of the leader in action give the user an immersive experience that acts as a mouth-watering teaser.'
        ],
        credits: 'Photo by: The Hôtel de ville de Crissier restaurant'
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
  name: 'JB Martin x Agence Soon',
  position: 'UX, art direction, website',
  image: {
    'on': 'images/thumbs/jbm_on.jpg',
    'off': 'images/thumbs/jbm_off.jpg'
  },
  details: [
    'images/works/00_jbm.jpg',
    {
      background: '#fcfbfb',
      presentation: {
        title: 'Agence soon by kaliop',
        client: 'JB Martin',
        url: 'https://www.jbmartinparis.com/',
        text: [
          'JB Martin is a high quality French women shoes brand that offers chic and modern collections and a line of leatherware made with a sense of detail.',
          'The new positioning of the brand is reflected with intuitive navigation as well as clean and elegant atmosphere. JB Martin\'s aim is to offer an unprecedented experience online shopping with presenting exclusive collections, services and particular content on trends, styles of the day. Powered by Magento, the website is responsively designed for an optimal user experience on desktop, tablet or mobile.'
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
  image: {
    'on': 'images/thumbs/eudoxia_on.gif',
    'off': 'images/thumbs/eudoxia_off.gif'
  },
  details: [
    'images/works/00_eudoxia.jpg',
    {
      background: '#fcfbfb',
      presentation: {
        client: 'Eudoxia',
        url: 'http://www.eudoxia.com/',
        text: [
          'Eudoxia is a new brand of French cosmetics that draws its powers from the virtues of plants that grow naturally between the Mediterranean sea and the summits of the Valley of Wonders.',
          'The direct sale channel is the most practical way to communicate on the originality and unique richness of the brand. For this we choose WooCommerce, a Wordpress online marketing solution. This solution allowed us to enhance the range by presenting the products in their natural setting. We produced a photo spread to highlight the origins of the cosmetic formulas as well as the passion and know-how of the brand\'s creator. All the while making sales the priority.'
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
          'Furla makes bags and handbags, shoes, and small leather goods. The brand\'s DNA is Italian, as is its taste for quality, which emanates from all collections and creations, where colors, patterns and materials delicately together.',
          'Proposal for a mini-website presentation on the iconic Candy Bag. Colorful and simple, this website highlights the entire collection as well as the evolution and manufacturing timeline.'
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
        title: 'Ekino Agency Fullsix Havas Group',
        client: 'Digiposte',
        url: 'https://secure.digiposte.fr/identification-plus',
        text: [
          'More than just a storage space, Digiposte is the digital safe deposit box offered by La Poste that helps you to easily organize your administrative documents, thanks to a user-friendy interface. It allows you to save 5 GB of personal data permanently or free of charge.',
          'In collaboration with a UX team, we created an ergonomic platform and an intuitive interface, playing closer attention to the color contrasts of images and texts, thus making reading easiler. The result is a smooth course, clear entrances and AA-rated content accessibility.'
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
        url: 'http://www.sequoiasoft.com/solutions/e-nymphea-module-reservation-en-ligne-spa/',
        text: [
          'Directly linked to E-NYMPHEA, the management tool of choice for spas and wellness centers, E-Nymphea Collexion optimises online booking to boost the wellness field.E-Nymphea Collexion is an innovation created by Sequoiasoft and Spa Collexion.',
          'We worked on a fully-responsive design platform with a simple structure that fits each wellness center and spa. Each showcase can be customized. The content is displayed through different elements that can be moved, added or removed.'
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
        client: 'Perrier®',
        text: [
          'PERRIER® is a one hundred year old bubbly mineral water whose unique sparkle is recognized through out the world.', 'Creation of a atmosphere revolving around cocktail recipes using this sparkling water. Lifestyle illustrations and visuals combine to give a friendly and relaxed ambiance.'
        ],
        credits: 'Photo by: Perrier®'
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
        title: 'Proximity bbdo Agency ',
        client: 'Mercedes occasions',
        text: [
          '"Les Occasions Exclusives" are VIP meetings that offer the best rental vehicles at competitive rates and access to premium services.', 'Presentation and catalog produced in an original mood using symbols that convey exclusivity, strength and luxury.'
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
        url: 'http://tedxchampselysees.com/tedxchampselyseeswomen/',
        text: [
          'The first Edition of TEDxCEWomen is an independent event organized under license from TED. This event aims to promote the sharing of ideas through conferences.', 'Design and creation of illustrations / portraits introducing the program’s speakers different personalities, based on the theme "Invented Here".'
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
          'Princess Tam Tam is a French brand with detailed, creative and fashionable know-how, young and feminine created by women for women!', 'Creation of editorial and graphic guidelines of the online magazine. We used a lookbook approach and the lifestyle spirit to bring the collection and the brand to life.'
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
        title: 'monsieur white Agency',
        client: 'Warner',
        url: 'https://legolasgamer.com/roman-photo-de-la-soiree-mkc-le-mortal-kombat-club/',
        text: [
          'For the launch of Mortel Kombat’s game, the MKC invites the gamer, journalist and blogger communities to fight IRL on a giant screen in a secret place.', 'We created an event website especially for gamers featuring games, puzzles and challenges to get participants to accept their invitations.'
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
          'SK-II, a Japanese cosmetics brand, combines state-of-the-art technology and something know-how with the powers of nature.', 'Mobile skin diagnosis. This app allows to choose the right treatment according to skin type. The selection of recommended products linked directly to the e-shop. The simplicity and playfulness of the application are reflected in a plain yet refined design.'
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