import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

export class Navigation extends React.Component {
  render() {
    return(
      <ul id='navigation'>
        <li id='navigation-item'>
          <Link to="/">Home</Link>
        </li>

        <li id='navigation-item'>
          <Link to="/about">About</Link>
        </li>

        <li id='navigation-item'>
          <Link to="/rgb/33/150/243">Blue</Link>
        </li>

        <li id='navigation-item'>
          <Link to="/rgb/240/98/146">Pink</Link>
        </li>
      </ul>
    );
  }
}