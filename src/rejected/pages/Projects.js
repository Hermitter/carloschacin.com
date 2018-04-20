import React, {Component} from 'react';

export class Projects extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.onLoad('projects');
  }

  render() {
    return(
      <div>
        <p>Current Page: Projects Page</p>
      </div>
    );
  }
}