import React from 'react';
import './Home.css';
import './../../styles/animate.css'
import personalPicture from './../../media/carlos-picture.jpg'
var githubPicture = 'https://avatars2.githubusercontent.com/u/17160717?s=460&v=4';

export class Home extends React.Component {
  //////////////////////////////
  // PROPERTIES \\
  constructor() {
    super();
    this.state = {
      fadeStatus: ''
    };
    // Bind Functions
    this.fadeOutElement = this.fadeOutElement.bind(this);
    this.fadeInElement = this.fadeInElement.bind(this);
  }
  //////////////////////////////
  // FUNCTIONS \\
  // - Fade Away Element
  fadeOutElement(event){
    this.setState({fadeStatus: 'animated fadeOut'})
  }
  // - Fade In Element
  fadeInElement(){
    this.setState({fadeStatus: 'animated fadeIn'})
  }
  //////////////////////////////
  // RENDERING \\
  render() {
    return(
      
      <div id='home-container' className='animated fadeIn'>
        {/* PROFILE PICTURE */}
        <div className='profile-picture-slot'>
          {/* Nice Picture */}
          <img id='profile-picture-top' src={personalPicture} width="100" height="140"/>
        </div>
        <div onMouseLeave={this.fadeInElement} onMouseEnter={this.fadeOutElement} className={'profile-picture-slot ' + this.state.fadeStatus}>
          {/* Fun Picture */}
          <img id='profile-picture-bottom' src={githubPicture} width="100" height="140"/>
        </div>
        {/* BODY */}
      </div>
    );
  }
}