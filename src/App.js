import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import Header from './Header'
import Footer from './Footer'
import Homepage from './Homepage'
import About from './About'
import Works from './Works'
import WorkComponent from './WorkComponent'
import Camera from './Camera'
import Polyfill from './Polyfill'
import NotFound from './NotFound'
import { basename } from './data'
import { getPageTitle } from './utils'
import Router from './AnimationRouter'
import './App.css'

export default () => (
  <Router basename={basename}>
    <Route key="root" render={({ history, location }) => (
      <Camera key="viewport" action={history.action} pathname={location.pathname}>
        <Helmet
          base={{ href: basename }}
          title={getPageTitle()}
          meta={[{
            property: 'og:title',
            content: getPageTitle()
          }]}/>
        <Polyfill/>
        <Header is_homepage={'/' === location.pathname}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/works" component={Works} />
          <Route path="/works/:id" component={WorkComponent} />
          <Route component={NotFound} status={404} />
        </Switch>
        <Footer/>
      </Camera>
    )} />
  </Router>
)