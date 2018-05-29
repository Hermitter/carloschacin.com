import React, { Component } from 'react'
import './App.css';
import { Navigation } from './components/Navigation.js';
import { Canvas } from './components/Canvas.js';
import { Home } from './pages/Home/Home.js';
import { Projects } from './pages/Projects/Projects.js';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route path='/' render={({ location }) => (
          <div id='app-container'>
            {/* NAVIGATION */}
            <Navigation/>
            {/* 3D BACKGROUND */}
            <Canvas/>
            {/* MAIN CONTENT */}
            <div id='content'>
                  {/* LOAD REQUESTED PAGE */}
                  <Switch location={location}>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/projects' component={Projects} />
                    <Route render={() => <div>Not Found</div>} />
                  </Switch>
            </div>
          </div>
        )}/>
      </Router>
    )
  }
}