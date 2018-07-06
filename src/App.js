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
      let { bg, fg, syntax, pos, neg, ui } = JSON.parse(stored);
      return {
        bg,
        fg,
        pos,
        neg,
        syntax,
        ui
      };
    }
  };

  updateBG = (c, e) => {
    let bg = c.hex;
    this.setState({ bg });
  };

  updateFG = (c, e) => {
    let fg = c.hex;
    this.setState({ fg });
  };

  updatePos = (c, e) => {
    let pos = c.hex;
    this.setState({ pos });
  };

  updateNeg = (c, e) => {
    let neg = c.hex;
    this.setState({ neg });
  };

  updateUI = (c, e) => {
    let ui = c.hex;
    this.setState({ ui });
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
      <div className="wrapper" style={{ background: this.state.bg, color: this.state.fg }}>
        <main>
          <div>
            <section>
              <h3>Background</h3>
              <div className='picker'>
                <ChromePicker
                  color={this.state.bg || '#000000'}
                  onChange={this.updateBG}
                />
              </div>
            </section>
            <section>
              <h3>Foreground</h3>
              <div className='picker'>
                <ChromePicker
                  color={this.state.fg || '#ffffff'}
                  onChange={this.updateFG}
                />
                <div className='palette fg'>
                  <Swatch onClick={() => { }} color={this.state.fg || '#ffffff'} active={true} />
                </div>
              </div>
            </section>
          </div>
          <div>
            <section>
              <h3>Positive color (ex: green)</h3>
              <div className='picker'>
                <ChromePicker
                  color={this.state.pos || '#00ff00'}
                  onChange={this.updatePos}
                />
                <div className='palette fg'>
                  <Swatch onClick={() => { }} color={this.state.pos || '#00ff00'} active={true} />
                </div>
              </div>
            </section>
            <section>
              <h3>Negative color (ex: red)</h3>
              <div className='picker'>
                <ChromePicker
                  color={this.state.neg || '#ff0000'}
                  onChange={this.updateNeg}
                />
                <div className='palette fg'>
                  <Swatch onClick={() => { }} color={this.state.neg || '#ff0000'} active={true} />
                </div>
              </div>
            </section>
          </div>
          <div>
            <section>
              <h3>Syntax colors</h3>
              <Palette colors={this.state.syntax || ['#ffffff']} update={this.updateSyntax} />
            </section>
            <section>
              <h3>UI accent</h3>
              <div className='picker'>
                <ChromePicker
                  color={this.state.ui || '#ffffff'}
                  onChange={this.updateUI}
                />
                <div className='palette fg'>
                  <Swatch onClick={() => { }} color={this.state.ui || '#ffffff'} active={true} />
                </div>
              </div>
            </section>
          </div>
        </main>
        <header style={{ background: this.state.fg, color: this.state.bg }}>
          <h1 className="title">Color Picker</h1>
          <textarea
            value={JSON.stringify(this.state)}
            rows='5'
            onChange={() => {this.value = JSON.stringify(this.state)}}>
          </textarea>
          <button onClick={this.save} type='Submit'>
            Save
          </button>
        </header>
      </div >
    );
  }
}

export default App;
