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
import { projects } from './data'
import slug from 'slug'
import './App.css'

const getCurrentProjectDetails = (id) => {
  for (let i = 0, max = projects.length; i < max; ++i) {
    const project = projects[i]
    const project_id = slug(project.name, { lower: true })

    if (project_id === id) {
      return project.details
    }
  }
  return null
}

const getPreviousProject = (id) => {
  return null
}

const getNextProject = (id) => {
  return null
}

const renderNotFound = () => <Route component={NotFound} status={404} />

export default () => (
  <Router>
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
            return <Work details={project} previous_project={getPreviousProject(id)} next_project={getNextProject(id)} />
          }} />
          {renderNotFound()}
        </Switch>
        <Footer/>
      </Camera>
    )} />
  </Router>
)