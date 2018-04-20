import React, { Component } from 'react';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';
import './LoadingOverlay.css'
import './../scripts/animate.css'

export class LoadingOverlay extends Component{
    constructor(props){
        super(props);
        this.state = { opacity: 1 }
    }

    componentDidMount(){
        setInterval(() => 
        {
            if(this.state.opacity > 0.01)
                this.setState({ opacity: this.state.opacity - 0.1 })
        }, 50);
    }

    render(){
        if(this.state.opacity > 0.01){
            return(
                <div id='loading-overlay' style={{ opacity: this.state.opacity }}>
                    <span style={{ color: 'white', fontSize: '50px' }}>123131</span>
                </div>
            );
        }
        else{
            return(null);
        }
    };
}