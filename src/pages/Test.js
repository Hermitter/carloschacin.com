import React, {Component} from 'react';

class Test extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.onLoad('test');
  }

  render() {
    return(
      <div>
        <p>Current Page: Test Page</p>
      </div>
    );
  }
}

export default Test;