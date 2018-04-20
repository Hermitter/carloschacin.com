import React, { Component } from 'react';
import { About } from './components/About.js';
import { Home } from './components/Home.js';
import { Nav } from './components/Nav.js'
import { HashRouter, Switch, Route } from "react-router-dom";

export class App extends Component {
  render(){
    return(
      <div>
        {/* Navigation */}
        <Nav/>
        {/*Handle Routes && Load First URL Match*/}
        <HashRouter basename='/'>
          <Switch>
            <Route path="/about" render={(props) => (<About onLoad={'insert a function'} />)}/>
            <Route path="/*" render={(props) => (<Home onLoad={'insert a function'} />)}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}