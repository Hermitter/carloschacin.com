import React, {Component} from 'react';
import {start} from './../components/Canvas.js'
//three.js test end

class Test extends React.Component {
  render() {
    return(
      <div id='canvas-container'>
      </div>
    );
  }

  componentDidMount(){
    start();//start 3d animation
  }
  
}
export default Test;