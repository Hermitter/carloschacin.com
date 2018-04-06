import React, {Component} from 'react';

export class About extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.onLoad('about');
  }

  render() {
    return(
      <div>
        <p>Current Page: About Page</p>
      </div>
    );
  }
}