import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import './App.css';
import Palette from './Palette.js';

class App extends Component {
  state = {
    background: '#fff',
    syntax: ['#fff']
  };

  updateBG = (c, e) => {
    let background = c.hex;
    this.setState({ background });
  };

  updateSyntax = (syntax) => {
    this.setState({ syntax });
  };

  render() {
    return (
      <div className="wrapper">
        <header>
          <h1 className="title">Color Picker</h1>
        </header>
        <div>
          <h3>Background</h3>
          <ChromePicker
            color={this.state.background}
            onChangeComplete={this.updateBG}
          />
        </div>
        <div>
          <h3>Syntax colors</h3>
          <Palette update={this.updateSyntax} />
        </div>
        <div>
          <h3>Code</h3>
          <pre>{JSON.stringify(this.state)}</pre>
        </div>
      </div>
    );
  }
}

export default App;
