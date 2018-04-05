import React, {Component} from 'react';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.onLoad('home');
  }

  render() {
    return(
      <div>
        <p>Current Page: Home Page</p>
      </div>
    );
  }
}

export default Home;