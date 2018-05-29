import React from 'react';
import './Home.css';
import './../../styles/animate.css'
import personalPicture from './../../media/carlos-picture.jpg'
var githubPicture = 'https://avatars2.githubusercontent.com/u/17160717?s=460&v=4';

export class Home extends React.Component {
  render() {
    return(
      <div id='home-container' className='animated fadeIn'>
        {/* PROFILE PICTURE */}
        <div class='profile-picture-slot'>
          <img id='profile-picture-bottom' src={githubPicture} width="100" height="140"/>
        </div>
        <div class='profile-picture-slot'>
          <img id='profile-picture-top' src={personalPicture} width="100" height="140"/>
        </div>
        {/* BODY */}
      </div>
    );
  }
}