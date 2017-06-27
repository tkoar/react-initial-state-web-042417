// Component Code Goes Here
import React from 'react';

class Address extends React.Component {
  constructor(props) {
    super(props);

// better to use props to make full address in render
// than to compute and save it in the state
    // this.state = {
    //   fullAddress: `${props.street}, ${props.city}`
    // }
  }

  render() {
    return (
      <div className="address">{this.props.street}, {this.props.city}</div>
    );
  }
}

export default Address;
