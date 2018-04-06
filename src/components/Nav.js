import React, {Component} from 'react';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import './Nav.css'

export class Nav extends Component{
    
    render(){
        return(
            <nav id='navigation'>
                <HashRouter basename='/'>
                {/*Decide On HTML To load*/}
                    <div>
                        <NavLink to='/' className='nav-button'>Home</NavLink>
                        <NavLink to='/about' className='nav-button'>About</NavLink>
                        <NavLink to='/projects' className='navbutton'>Experience</NavLink>
                        <NavLink to='/experience' className='nav-button'>Projects</NavLink>
                        <NavLink to='/contact' className='navbutton'>Contact</NavLink>
                    </div>
                </HashRouter>
            </nav>
        );
    };
}