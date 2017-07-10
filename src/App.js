import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './Homepage';
import Camera from './Camera';
import './App.css';

const NotFound = () => (<h1>404... This page is not found!</h1>);

export default () => (
  <Router>
    <Route key="root" render={({ history, location }) => (
      <Camera key="viewport" action={history.action} pathname={location.pathname}>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route component={NotFound} />
        </Switch>
      </Camera>
    )} />
  </Router>
)