import React from 'react';
import './Home.css';
import './../../styles/animate.css'
var githubPicture = 'https://avatars2.githubusercontent.com/u/17160717?s=460&v=4';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    // Properties
    this.state = {
      fadeStatus: '',
      introductionWord: 'create'
    };
    // Bindings
    this.fadeOutElement = this.fadeOutElement.bind(this);
    this.fadeInElement = this.fadeInElement.bind(this);
  }
  
  // Functions
  // - Fade Away Element Animation
  fadeOutElement(event){
    this.setState({fadeStatus: 'animated fadeOut'})
  }
  // - Fade In Element Animation
  fadeInElement(){
    this.setState({fadeStatus: 'animated fadeIn'})
  }

  // - On Component Load
  componentDidMount(){
    this.props.update_url('/');
  }

  // Rendering
  render() {
    return(
      <div id='home-container' className='animated fadeIn'>
      
        {/* Profile Picture */}
        <div id="profile-picture-container">
          <img id="profile-picture-bottom" src={githubPicture} alt="Picture of carlos chacin"/>
        </div>

        {/* Introduction Text */}
        <h1 id="intro-title">Hey, I'm Carlos Chacin</h1>
        <h2 id="intro-sub-title">A Software Developer</h2>

        {/* Introduction Boxes */}
        <div id="intro-skills-container">
          <div class="intro-skill-box">
            <img class="intro-skill-image" src="https://www.logolynx.com/images/logolynx/s_66/66fe4e17270440a1575a418b43aae190.jpeg"/>
            <p class="intro-skill-text">JavaScript</p>
          </div>

          <div class="intro-skill-box">
            <img class="intro-skill-image" src="http://unionhallcincy.com/wp-content/uploads/2018/10/golang-150x150.png"/>
            <p class="intro-skill-text">Golang</p>
          </div>

        </div>
          {/* <h2 id='intro-text'>A Software Developer</h2>
          <h3 id='intro-text'>A JavaScript Lover</h3>
          <h3 id='intro-text'>A Golang Enthusiast</h3> */}
      </div>
    );
  }
}