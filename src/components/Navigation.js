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
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    );
  }
}