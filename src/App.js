import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import './App.css';
import Palette from './Palette.js';
import Swatch from './Swatch';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = this.getSaved();
  };

  getSaved = () => {
    let stored = window.localStorage.getItem("theme");
    if (!stored) {
      return null;
    } else {
      let { background, syntax } = JSON.parse(stored);
      return {
        background: background || '#fff',
        syntax: syntax || ['#fff']
      }
    }
  };

  updateBG = (c, e) => {
    let background = c.hex;
    this.setState({ background });
  };

  updateSyntax = (syntax) => {
    this.setState({ syntax });
  };

  save = () => {
    let { localStorage } = window;
    localStorage.setItem('theme', JSON.stringify(this.state));
  };

  render() {
    return (
      <div className="wrapper">
        <main>
          <section>
            <h3>Background</h3>
            <div className='picker'>
              <ChromePicker
                color={this.state.background}
                onChange={this.updateBG}
              />
              <div className='palette'>
                <Swatch color={this.state.background} active={true} />
              </div>
            </div>
          </section>
          <section>
            <h3>Syntax colors</h3>
            <Palette colors={this.state.syntax} update={this.updateSyntax} />
          </section>
        </main>
        <header>
          <h1 className="title">Color Picker</h1>
          <textarea rows='5'>{JSON.stringify(this.state)}</textarea>
          <button onClick={this.save} type='Submit'>
            Save
          </button>
        </header>
      </div >
    );
  }
}

export default App;
