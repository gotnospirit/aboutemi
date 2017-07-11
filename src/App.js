import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Homepage from './Homepage'
import About from './About'
import Works from './Works'
import Camera from './Camera'
import './App.css'

const NotFound = () => (<h1>404... This page is not found!</h1>)

export default () => (
  <Router>
    <Route key="root" render={({ history, location }) => (
      <Camera key="viewport" action={history.action} pathname={location.pathname}>
        <Header pathname={location.pathname}/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/works' component={Works} />
          <Route component={NotFound} />
        </Switch>
        <Footer/>
      </Camera>
    )} />
  </Router>
)