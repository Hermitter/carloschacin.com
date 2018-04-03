import React, { Component } from 'react';
import {HashRouter, Switch, Route} from 'react-router-dom';
import './App.css';
import Test from './pages/Test.js';
import Home from './pages/Home.js';

class App extends Component {

  render() {
    return (
      <HashRouter basename='/'>
      {/*Replaces compnents based on URL*/}
        <Switch>
          <Route path="/" component={Test}/>
          <Route path="/test" component={Test}/>
          {/* <Route path="/*" component={Home}/> */}
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
