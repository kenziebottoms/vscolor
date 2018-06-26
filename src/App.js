import React, { Component } from 'react';
import logo from './logo.svg';
// import ColorPicker from './ColorPicker.js';
import './App.css';
import Palette from './Palette.js';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <header>
          <img src={logo} className="logo" alt="logo" />
          <h1 className="title">Welcome to React</h1>
        </header>
        <p className="intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Palette/>
        </div>
      </div>
    );
  }
}

export default App;
