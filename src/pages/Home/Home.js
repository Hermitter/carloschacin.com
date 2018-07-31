import React from 'react';
import './Home.css';
import './../../styles/animate.css'
import personalPicture from './../../media/carlos-picture.jpg'
var githubPicture = 'https://avatars2.githubusercontent.com/u/17160717?s=460&v=4';

export class Home extends React.Component {
  //////////////////////////////
  // PROPERTIES \\
  constructor(props) {
    super(props);
    this.state = {
      fadeStatus: '',
      introductionWord: 'create'
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

  // - On Component Mount
  componentDidMount(){
    this.props.update_url('/');
  }

  //////////////////////////////
  // RENDERING \\
  render() {
    return(
      <div id='home-container' className='animated fadeIn'>
      
        {/* PROFILE PICTURE */}
        <div id="profile-picture-container">
          <img id='profile-picture-bottom' src={githubPicture} alt='me, but looking better'/>
        </div>

        {/* INTRODUCTION */}
          <h1 id='intro-text'>Ready To&nbsp;</h1>
      </div>
    );
  }
}