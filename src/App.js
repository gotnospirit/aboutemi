import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'
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
import withTracker from './GoogleAnalytics'
import './App.css'

const Screen = ({ basename, action, pathname }) => {
  return (<Camera action={action} pathname={pathname}>
    <Helmet
      base={{ href: basename }}
      title={getPageTitle()}
      meta={[{
        property: 'og:title',
        content: getPageTitle()
      }]}/>
    <Polyfill/>
    <Header is_homepage={'/' === pathname}/>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/works" component={Works} />
      <Route path="/works/:id" component={WorkComponent} />
      <Route component={NotFound} status={404} />
    </Switch>
    <Footer/>
  </Camera>)
}

export default () => (
  <Router basename={basename}>
    <Route render={({ history, location }) => (
      <Route component={withTracker(Screen, {}, {
        basename,
        action: history.action,
        pathname: location.pathname
      })} />
    )} />
  </Router>
)