import React from 'react';
import './Projects.css';
import './../../styles/animate.css'

export class Projects extends React.Component {
  constructor(props){
    super(props);
  }

  // - On Component Mount
  componentDidMount(){
    this.props.update_url('/projects');
  }

  render() {
    return(
      <div id='projects-container' className='animated fadeIn'>
        <p style={{fontSize:'40px'}}>Current Page: Project Page</p>
        <p style={{fontSize:'40px'}}>Current Page: Project Page</p>
        <p style={{fontSize:'40px'}}>Current Page: Project Page</p>
        <p style={{fontSize:'40px'}}>Current Page: Project Page</p>

        <p style={{fontSize:'40px'}}>Current Page: Project Page</p>
        <p style={{fontSize:'40px'}}>Current Page: Project Page</p>
        <p style={{fontSize:'40px'}}>Current Page: Project Page</p>
        <p style={{fontSize:'40px'}}>Current Page: Project Page</p>

        <p style={{fontSize:'40px'}}>Current Page: Project Page</p>
        <p style={{fontSize:'40px'}}>Current Page: Project Page</p>
        <p style={{fontSize:'40px'}}>Current Page: Project Page</p>
        <p style={{fontSize:'40px'}}>Current Page: Project Page</p>

      </div>
    );
  }
}