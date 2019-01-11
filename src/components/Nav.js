import React from 'react';
import './Nav.css';
import { Link } from "gatsby"
import github_logo from '../../content/assets/github-logo.svg';

class Nav extends React.Component {
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

export default Nav;