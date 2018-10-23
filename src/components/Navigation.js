import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import github_logo from './../media/github-logo.svg';

export class Navigation extends React.Component {
  render() {
    return(
      // Navigation Menu
      <ul id='nav' className='animated zoomIn'>
        {/* Home */}
        <li id='nav-item'>
          <Link id="nav-link" to="/">Home</Link>
        </li>
        {/* Github */}
        <li id='nav-item'>
          <a id="github-link" href='https://github.com/hermitter' target='_blank'>
            <img id="github-logo" src={github_logo} />
          </a>
        </li>
        {/* Blog */}
        <li id='nav-item'>
          <Link id="nav-link" to="/blog">Blog</Link>
        </li>
      </ul>
    );
  }
}