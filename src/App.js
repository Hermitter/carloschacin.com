import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home.js';
import { About } from './pages/About.js';
import { Projects } from './pages/Projects.js';
import { Experience } from './pages/Experience.js';
import { Contact } from './pages/Contact.js';
import { Nav } from './components/Nav.js'
import { Canvas } from './components/Canvas.js'

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {path: '/', focus: '/'}
    this.setCurrentPath = this.setCurrentPath.bind(this);
    this.setCurrentFocus = this.setCurrentFocus.bind(this);
  }

  // - Updates Nav Button Being Focused
  setCurrentFocus(newFocus){
    this.setState({focus: newFocus});
  }

  // - Updates URL Location
  setCurrentPath(newPath){
    this.setState({path: newPath});
  }

  render(){
    return(
      <div>
        {/* <Nav onFocus={this.setCurrentFocus.bind(this)}/> */}
        <Nav onFocus={this.setCurrentFocus} />
        <HashRouter basename='/'>
        {/*Decide On HTML To load*/}
          <Switch>
            <Route path="/about" render={(props) => (<About onLoad={this.setCurrentPath} />)}/>
            <Route path="/projects" render={(props) => (<Projects onLoad={this.setCurrentPath} />)}/>
            <Route path="/experience" render={(props) => (<Experience onLoad={this.setCurrentPath} />)}/>
            <Route path="/contact" render={(props) => (<Contact onLoad={this.setCurrentPath} />)}/>
            <Route path="/*" render={(props) => (<Home onLoad={this.setCurrentPath} />)}/>
          </Switch>
        </HashRouter>
        {/* Three.js Rendered Here */}
        <Canvas path={this.state.path} focus={this.state.focus}/>
      </div>
    );
  }
}