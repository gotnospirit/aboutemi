import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Homepage from './Homepage'
import About from './About'
import Works from './Works'
import Work from './Work'
import Camera from './Camera'
import NotFound from './NotFound'
import { basename, projects } from './data'
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

const getCurrentProjectDetails = (id) => {
  const idx = getProjectIndex(id)

  if (!idx) {
    return null
  }
  return projects[idx].details
}

const getPreviousProjectId = (id) => {
  const idx = getProjectIndex(id)

  if (!idx) {
    return null
  }
  return idx > 0
    ? slugify(projects[idx - 1])
    : null
}

const getNextProjectId = (id) => {
  const idx = getProjectIndex(id)

  if (!idx) {
    return null
  }
  return idx < projects.length - 1
    ? slugify(projects[idx + 1])
    : null
}

const renderNotFound = () => <Route component={NotFound} status={404} />

export default () => (
  <Router basename={basename}>
    <Route key="root" render={({ history, location }) => (
      <Camera key="viewport" action={history.action} pathname={location.pathname}>
        <Header pathname={location.pathname}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/works' component={Works} />
          <Route path="/works/:id" render={({ match }) => {
            let id = match.params.id
            let project = getCurrentProjectDetails(id)

            if (!project) {
              return renderNotFound()
            }
            return <Work details={project} previous_project={getPreviousProjectId(id)} next_project={getNextProjectId(id)} />
          }} />
          {renderNotFound()}
        </Switch>
        <Footer/>
      </Camera>
    )} />
  </Router>
)