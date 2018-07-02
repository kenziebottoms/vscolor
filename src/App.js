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
      let { bg, fg, syntax, pos, neg } = JSON.parse(stored);
      return {
        bg: bg || '#ffffff',
        fg: fg || '#000000',
        pos: pos || '#00FF00',
        neg: neg || '#FF0000',
        syntax: syntax || ['#fff']
      }
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
                  color={this.state.bg}
                  onChange={this.updateBG}
                />
              </div>
            </section>
            <section>
              <h3>Foreground</h3>
              <div className='picker'>
                <ChromePicker
                  color={this.state.fg}
                  onChange={this.updateFG}
                />
                <div className='palette fg'>
                  <Swatch onClick={() => { }} color={this.state.fg} active={true} />
                </div>
              </div>
            </section>
          </div>
          <div>
            <section>
              <h3>Positive color (ex: green)</h3>
              <div className='picker'>
                <ChromePicker
                  color={this.state.pos}
                  onChange={this.updatePos}
                />
                <div className='palette fg'>
                  <Swatch onClick={() => { }} color={this.state.pos} active={true} />
                </div>
              </div>
            </section>
            <section>
              <h3>Negative color (ex: red)</h3>
              <div className='picker'>
                <ChromePicker
                  color={this.state.neg}
                  onChange={this.updateNeg}
                />
                <div className='palette fg'>
                  <Swatch onClick={() => { }} color={this.state.neg} active={true} />
                </div>
              </div>
            </section>
          </div>
          <section>
            <h3>Syntax colors</h3>
            <Palette colors={this.state.syntax} update={this.updateSyntax} />
          </section>
        </main>
        <header style={{ background: this.state.fg, color: this.state.bg }}>
          <h1 className="title">Color Picker</h1>
          <textarea value={JSON.stringify(this.state)} rows='5'></textarea>
          <button onClick={this.save} type='Submit'>
            Save
          </button>
        </header>
      </div >
    );
  }
}

export default App;
