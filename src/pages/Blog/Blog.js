import React from 'react';
import './Blog.css';
import './../../styles/animate.css'

export class Blog extends React.Component {
  constructor(props){
    super(props);
  }

  // - On Component Mount
  componentDidMount(){
    this.props.update_url('/blog');
  }

  render() {
    return(
      <div id='blog-container' className='animated fadeIn'>
        <p style={{fontSize:'40px', color:'white'}}>Current Page: Blog Page</p>
        <p style={{fontSize:'40px'}}>Current Page: Blog Page</p>
        <p style={{fontSize:'40px'}}>Current Page: Blog Page</p>
        <p style={{fontSize:'40px'}}>Current Page: Blog Page</p>

      </div>
    );
  }
}