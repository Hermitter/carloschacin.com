import React, {Component} from 'react';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import './Nav.css'

export class Nav extends Component{
    constructor(props){
        super(props);

        this.onMouseOver = this.onMouseOver.bind(this);
    }

    // - Update focus state of link being hovered
    onMouseOver(newFocus){
        this.props.onFocus(newFocus);
    }

    //TODO: UPDATE LEAVING NAV BUTTON AS FOCUS: '/' AGAIN
    render(){
        return(
            <nav id='navigation'>
                <HashRouter basename='/'>
                {/*Decide On HTML To load*/}
                    <div>
                        <NavLink to='/' onMouseOver={()=>{this.onMouseOver('/')}} className='nav-button'>Home</NavLink>
                        <NavLink to='/about' onMouseOver={()=>{this.onMouseOver('/about')}} className='nav-button'>About</NavLink>
                        <NavLink to='/experience' onMouseOver={()=>{this.onMouseOver('/experience')}} className='nav-button'>Experience</NavLink>
                        <NavLink to='/projects' onMouseOver={()=>{this.onMouseOver('/projects')}} className='nav-button'>Projects</NavLink>
                        <NavLink to='/contact' onMouseOver={()=>{this.onMouseOver('/contact')}} className='nav-button'>Contact</NavLink>
                    </div>
                </HashRouter>
            </nav>
        );
    };
}