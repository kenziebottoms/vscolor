import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import Swatch from './Swatch';
import { genTheme, genSettings } from './Theme';
import { CopyToClipboard } from 'react-copy-to-clipboard';
const _ = require('lodash');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { theme: null };
    this.state.theme = this.getSaved();
  }

  // save current palette to localStorage
  save = () => {
    let { localStorage } = window;
    localStorage.setItem('theme', JSON.stringify(this.state.theme));
  };
  // extract any saved palette from localStorage
  getSaved = () => {
    let stored = window.localStorage.getItem('theme');
    if (!stored) {
      return {
        bg: '#000000',
        fg: '#ffffff',
        pos: '#00ff00',
        neg: '#ff0000',
        syntax: ['#ffff00'],
        ui: '#0000ff',
      };
    } else {
      let { bg, fg, syntax, pos, neg, ui } = JSON.parse(stored);
      return {
        bg,
        fg,
        pos,
        neg,
        syntax,
        ui,
      };
    }
  };

  // set this.state.active
  setActive = prop => {
    this.setState({ active: prop });
  };
  // get color value of active swatch
  getActiveColor = () => {
    // syntax colors
    if (this.state.active && this.state.active.indexOf('syntax') !== -1) {
      return this.state.theme.syntax[this.state.active.split(':')[1]];
    }
    // non-syntax
    else {
      return this.state.theme[this.state.active];
    }
  };
  // update color value of active swatch
  updateActiveColor = (c, e) => {
    // copy theme to update
    //   like a POST intead of a PUT
    let stateUpdate = { theme: this.state.theme };
    // syntax colors
    if (this.state.active.indexOf('syntax') !== -1) {
      stateUpdate.theme.syntax[this.state.active.split(':')[1]] = c.hex;
    }
    // non-syntax
    else {
      stateUpdate.theme[this.state.active] = c.hex;
    }
    this.setState(stateUpdate);
  };

  // render normal swatch with normal ops
  displaySwatch = slug => {
    return (
      <Swatch
        onClick={() => {
          this.setActive(slug);
        }}
        color={this.state.theme[slug]}
        active={this.state.active === slug}
      />
    );
  };
  // render the swatches for the syntax colors
  displaySyntax = () => {
    return this.state.theme.syntax.map((c, i) => {
      return (
        <Swatch
          key={i}
          color={this.state.theme.syntax[i]}
          onClick={() => {
            this.clickSwatch(i);
          }}
          active={this.state.active === 'syntax:' + i}
          new={false}
        />
      );
    });
  };
  // render add swatch
  displayAddSwatch = () => {
    return (
      <Swatch key={'new'} active={false} new={true} onClick={this.addSwatch} />
    );
  };

  // handle a click on swatch `i`
  clickSwatch = i => {
    if (this.state.active === 'syntax:' + i) {
      let syntaxUpdate = this.state.theme.syntax.slice();
      syntaxUpdate.splice(i, 1);
      this.updateSyntax(syntaxUpdate);
    } else {
      this.setActive('syntax:' + i);
    }
  };

  copy = slug => {
    let text = document.getElementById(slug);
    text.select();
    document.execCommand('copy');
  };

  // add new blank swatch
  addSwatch = e => {
    let colors = this.state.theme.syntax.slice();
    let active = colors.push('#fff') - 1; // push returns the new length of the array
    this.updateSyntax(colors);
    this.setActive('syntax:' + active);
  };

  // update this.state.theme.syntax without overwriting anything else
  updateSyntax = syntax => {
    let stateUpdate = { theme: this.state.theme };
    stateUpdate.theme.syntax = syntax;
    this.setState({ stateUpdate });
  };
  shuffleSyntax = () => {
    let syntax = this.state.theme.syntax;
    this.updateSyntax(_.shuffle(syntax));
  };

  // validate pasted spine and use it if valid
  importSpine = () => {
    let spine = document.getElementById('import');
    let error = this.validateSpine(spine.value);
    if (error) {
      spine.value = 'ERROR: ' + error.message;
    } else {
      this.setState({ theme: JSON.parse(spine.value) });
      spine.value = '';
    }
  };
  // make sure the pasted spine has the right property names and valid colors
  validateSpine = spineJSON => {
    try {
      let spine = JSON.parse(spineJSON);
      let props = ['bg', 'fg', 'pos', 'neg', 'ui'];
      let colorTest = /^#([0-9a-f]{3}){1,2}$/i;
      let colors = [...props.map(prop => spine[prop]), ...spine.syntax];
      let badColors = colors
        .filter(color => !(color && colorTest.test(color)))
        .join(', ');
      if (badColors)
        return {
          status: 400,
          message: 'Invalid hex code(s): ' + badColors,
        };
      return false;
    } catch (err) {
      return err;
    }
  };

  render() {
    return (
      <div
        className="wrapper"
        style={{ background: this.state.theme.bg, color: this.state.theme.fg }}
      >
        <header
          style={{
            background: this.state.theme.fg,
            color: this.state.theme.bg,
          }}
        >
          <ChromePicker
            color={this.getActiveColor()}
            onChange={this.updateActiveColor}
          />

          <button onClick={this.save} type="Submit">
            Save
          </button>

          <div className="code">
            <div>
              <h3>Import Spine</h3>
              <textarea id="import" rows="5" onChange={this.updateSpine} />
              <button onClick={this.importSpine}>Import</button>
            </div>

            <div>
              <h3>Spine</h3>
              <CopyToClipboard text={JSON.stringify(this.state.theme)}>
                <button>Copy</button>
              </CopyToClipboard>
            </div>

            <div>
              <h3>Theme Code</h3>
              <CopyToClipboard
                text={JSON.stringify(genTheme(this.state.theme))}
              >
                <button>Copy</button>
              </CopyToClipboard>
            </div>

            <div>
              <h3>Workspace Settings</h3>
              <CopyToClipboard
                text={JSON.stringify(genSettings(this.state.theme))}
              >
                <button>Copy</button>
              </CopyToClipboard>
            </div>
          </div>
        </header>

        <main>
          <div>
            {this.displaySwatch('bg')}
            <h3>Background</h3>

            {this.displaySwatch('fg')}
            <h3>Foreground</h3>

            {this.displaySwatch('pos')}
            <h3>Positive color</h3>

            {this.displaySwatch('neg')}
            <h3>Negative color</h3>

            <div className="syntax">
              {this.displaySyntax()}
              {this.displayAddSwatch()}
            </div>
            <h3>
              Syntax colors&nbsp;
              <button onClick={this.shuffleSyntax}>Shuffle</button>
            </h3>

            {this.displaySwatch('ui')}
            <h3>UI accent</h3>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
