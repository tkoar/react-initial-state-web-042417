// Component Code Goes Here
import React from 'react';

export default class ToggleButton extends React.Component {
  constructor() {
    super();

    this.state = {
      isEnabled: false
    }
  }

  render() {
    return (
      <div>
      <button classname="toggle-button">
        I am toggled {this.state.isEnabled ? 'on' : 'off'}
      </button>
      </div>
    )
  }
}
