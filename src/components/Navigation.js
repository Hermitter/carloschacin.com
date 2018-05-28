import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import github_logo from './../media/github-logo.svg';

export class Navigation extends React.Component {
  render() {
    return(
      <ul id='navigation'>
        <li id='navigation-item'>
          <Link to="/">Home</Link>
        </li>

        <li id='navigation-item'>
          {/* <Link to="/about">About</Link> */}
          <a href='https://github.com/hermitter' target='_blank'><img id='github-logo' src={github_logo} /></a>
        </li>

        <li id='navigation-item'>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    );
  }
}