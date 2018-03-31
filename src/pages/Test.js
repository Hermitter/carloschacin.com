import React, {Component} from 'react';
import {start} from './../components/Main3d.js'
//three.js test end

class Test extends React.Component {
  render() {
    return(
      <div id='canvas-container'>
      </div>
    );
  }

  componentDidMount(){
    start();
  }
  
}
export default Test;