import React, {Component} from 'react';

export class Experience extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.onLoad('experience');
  }

  render() {
    return(
      <div>
        <p>Current Page: Experience Page</p>
      </div>
    );
  }
}