import React, { Component } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Test from './components/Test.js';
import Home from './pages/Home.js'

class App extends Component {
  render() {
    return (
      <HashRouter basename='/'>
      {/*Replaces compnents based on URL*/}
        <Switch>
          <Route path="/test" component={Test}/>
          <Route path="/home" component={Home} />
          <Route path="/*" component={Home}/>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
