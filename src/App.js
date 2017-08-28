import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import Header from './Header'
import Footer from './Footer'
import Homepage from './Homepage'
import About from './About'
import Works from './Works'
import Work from './Work'
import Camera from './Camera'
import Polyfill from './Polyfill'
import NotFound from './NotFound'
import { basename, projects, getPageTitle } from './data'
import slug from 'slug'
import './App.css'

const slugify = (project) => {
  return project.details
    ? slug(project.name, { lower: true })
    : null
}

const getProjectIndex = (id) => {
  for (let i = 0, max = projects.length; i < max; ++i) {
    const project_id = slugify(projects[i])

    if (project_id === id) {
      return i
    }
  }
  return null
}

const getPreviousProjectId = (idx) => {
  if (!idx) {
    return null
  }

  for (let i = idx - 1; i >= 0; --i) {
    let project_id = slugify(projects[i])

    if (project_id) {
      return project_id
    }
  }
  return null
}

const getNextProjectId = (idx) => {
  let max = projects.length

  if (null === idx || idx > max) {
    return null
  }

  for (let i = idx + 1; i < max; ++i) {
    let project_id = slugify(projects[i])

    if (project_id) {
      return project_id
    }
  }
  return null
}

const renderNotFound = () => <Route component={NotFound} status={404} />

export default () => (
  <Router basename={basename}>
    <Route key="root" render={({ history, location }) => (
      <Camera key="viewport" action={history.action} pathname={location.pathname}>
        <Helmet
          base={{ "href" : basename }}
          title={getPageTitle()}
          meta={[
            {
              'property' : 'og:title',
              'content' : getPageTitle()
            }
          ]}/>
        <Polyfill/>
        <Header pathname={location.pathname}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/works" component={Works} />
          <Route path="/works/:id" render={({ match }) => {
            let id = match.params.id
            let project_idx = getProjectIndex(id)

            if (null === project_idx) {
              return renderNotFound()
            }
            return <Work
              project={projects[project_idx]}
              previous_project={getPreviousProjectId(project_idx)}
              next_project={getNextProjectId(project_idx)} />
          }} />
          {renderNotFound()}
        </Switch>
        <Footer/>
      </Camera>
    )} />
  </Router>
)