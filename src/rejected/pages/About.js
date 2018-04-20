import React, {Component} from 'react';
import './About.css';

export class About extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.onLoad('about');
  }

  render() {
    return(
      <div id='about-container'>
        <p>Current Page: About Page</p>
      </div>
    );
  }
}