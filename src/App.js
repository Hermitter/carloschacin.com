import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Test from './pages/Test.js';
import Home from './pages/Home.js';
import { Canvas } from './components/Canvas.js'

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {path: '/'}
    this.setCurrentPath = this.setCurrentPath.bind(this);
  }

  setCurrentPath(newPath){
    this.setState({path: newPath});
  }

  render() {
    return (
      <div>
        <HashRouter basename='/'>
        {/*Decide On HTML To load*/}
          <Switch>
            <Route path="/home" render={(props) => (<Home onLoad={this.setCurrentPath} />)}/>
            <Route path="/test" render={(props) => (<Test onLoad={this.setCurrentPath} />)}/>
            <Route path="/*" render={(props) => (<Home onLoad={this.setCurrentPath} />)}/>
          </Switch>
        </HashRouter>
        {/* Three.js Rendered Here */}
        <Canvas path={this.state.path} />
      </div>
    );
  }
}