import React, { Component } from 'react';
import './App.css';
import { Navigation } from './components/Navigation.js';
import { Canvas } from './components/Canvas.js';
import { Home } from './pages/Home/Home.js';
import { Projects } from './pages/Projects/Projects.js';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

export class App extends Component {
  constructor(props){
    super(props);
    this.state = {url_path: ''}// url location
    this.update_url = this.update_url.bind(this);
  }

  // - Update current URL client is on
  update_url(new_url_path){
    // If the url has changed
      this.setState({
        url_path: new_url_path
      });
      console.log("NEW PATH: " + new_url_path);
  }

  // - On Component Load
  componentDidMount(){
    // Remove loading screen
    var loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.add('animated');
    loadingScreen.classList.add('fadeOut');
    setTimeout(()=>{
      var parent = document.getElementById('body');
      var child = document.getElementById('loading-screen');
      parent.removeChild(child);
    },500)
  }

  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <Route path='/' render={({ location }) => (
          <div>
            {/* NAVIGATION */}
            <Navigation/>
            {/* 3D BACKGROUND */}
            {console.log(location)}
            <Canvas current_url_path={location}/>
            {/* MAIN CONTENT */}
            <div id='content'>
                  {/* LOAD REQUESTED PAGE */}
                  <Switch location={location}>
                    <Route exact path='/' render={(props) => (<Home update_url={this.update_url} />)}/>
                    <Route exact path='/projects' render={(props) => (<Projects update_url={this.update_url} />)}/>
                    <Route render={() => <div>404 Not Found</div>} />
                  </Switch>
            </div>
          </div>
        )}/>
      </Router>
    )
  }
}