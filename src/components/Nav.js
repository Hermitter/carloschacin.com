import React from 'react';
import { NavLink, HashRouter } from 'react-router-dom';
import './../scripts/animate.css'
import './Nav.css';

export class Nav extends React.Component {
  render() {
    return(
      <div id='nav-container'>
        {/* Navigation Links*/}
        <HashRouter basename='/'>
          <div className='animated fadeInDown'>
              <NavLink to='/' className='nav-button'>Home</NavLink>
              <NavLink to='/about' className='nav-button'>About</NavLink>
          </div>
        </HashRouter>
      </div>
    );
  }
}