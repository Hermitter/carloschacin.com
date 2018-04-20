import React, {Component} from 'react';

export class Home extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.onLoad('/');
  }

  render() {
    return(
      <div>
        <p>Current Page: / Page</p>
      </div>
    );
  }
}