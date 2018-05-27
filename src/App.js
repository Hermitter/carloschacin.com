import React, { Component } from 'react'
import './App.css';
import { Navigation } from './components/Navigation.js';
import { Home } from './pages/Home.js'
import { About } from './pages/About.js'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route render={({ location }) => (
          <div style={styles.fill}>

            <Navigation/>

            {/* MAIN CONTENT */}
            <div id='content'>
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={200}
                >
                  {/* LOAD REQUESTED PAGE */}
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/hsl/:h/:s/:l" component={HSL} />
                    <Route exact path="/rgb/:r/:g/:b" component={RGB} />
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

const HSL = ({ match }) => {
  const { params } = match

  return (
    <div style={{
      ...styles.fill,
      ...styles.hsl,
      background: `hsl(${params.h}, ${params.s}%, ${params.l}%)`
    }}>hsl({params.h}, {params.s}%, {params.l}%)</div>
  )
}

const RGB = ({ match }) => {
  const { params } = match

  return (
    <div style={{
      ...styles.fill,
      ...styles.rgb,
      background: `rgb(${params.r}, ${params.g}, ${params.b})`
    }}>rgb({params.r}, {params.g}, {params.b})</div>
  )
}

const styles = {}

styles.fill = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
}

styles.hsl  = {
  ...styles.fill,
  color: 'white',
  paddingTop: '20px',
  fontSize: '30px'
}

styles.rgb  = {
  ...styles.fill,
  color: 'white',
  paddingTop: '20px',
  fontSize: '30px'
}