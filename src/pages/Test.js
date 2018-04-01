import React, {Component} from 'react';
import MirrorVideo from './../components/MirrorVideo'
import {startCanvas} from './../components/Canvas.js'
//three.js test end

class Test extends React.Component {
  render() {
    return(
      <div>
        <MirrorVideo/>
        <div id='canvas-container'></div>
      </div>
    );
  }

  //start 3d animation
  componentDidMount(){
      startCanvas({'mirror_video': document.getElementById('mirror-video')});
  }
  
}
export default Test;