import React, { Component } from 'react';
import { ChromePicker } from 'react-color';

class ColorPicker extends Component {
  state = {
    color: '#fff',
  };

  change = (c, e) => {
    this.setState({ color: c.hex });
  };

  render() {
    return (
      <div className="picker">
        <ChromePicker color={this.state.color} onChangeComplete={this.change} />
      </div>
    );
  }
}

export default ColorPicker;
