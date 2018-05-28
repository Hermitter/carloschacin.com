import React, { Component } from 'react'
import './App.css';
import { Navigation } from './components/Navigation.js';
import { Canvas } from './components/Canvas.js';
import { Home } from './pages/Home.js';
import { Projects } from './pages/Projects/Projects.js';
import { About } from './pages/About.js';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route render={({ location }) => (
          <div id='app-container'>
            {/* NAVIGATION */}
            <Navigation/>
            
            <Canvas/>

            {/* MAIN CONTENT */}
            <div id='content'>
              <TransitionGroup>
                <CSSTransition key={location.key} classNames="fade" timeout={200}>

                  {/* LOAD REQUESTED PAGE */}
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/projects" component={Projects} />
                    <Route render={() => <div>Not Found</div>} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          </div>
        )}/>
      </Router>
    )
  }
}