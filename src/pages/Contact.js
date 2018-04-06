import React, {Component} from 'react';

export class Contact extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.onLoad('contact');
  }

  render() {
    return(
      <div>
        <p>Current Page: Contact Page</p>
      </div>
    );
  }
}