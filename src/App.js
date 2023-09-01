import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import {
  faPaste,
  faSave,
  faCogs,
  faClipboardList,
  faCode,
} from '@fortawesome/free-solid-svg-icons';

import './styles/App.scss';

import Control from './Control';
import Swatch from './Swatch';
import { genTheme, genSettings, gradient } from './Theme';

import { loadLocalSpine, saveLocalSpine, validateSpine } from './Spine';

const _ = require('lodash');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { theme: null, active: 'bg' };
    this.state.theme = loadLocalSpine();
  }

  importFromClipboard = () =>
    navigator.clipboard
      .readText()
      .then(clipboard => this.importSpine(clipboard))
      .catch(e => console.log(e));

  // get color value of active swatch
  getActiveColor = () =>
    this.state.active.indexOf('syntax') !== -1
      ? this.state.theme.syntax[this.state.active.split(':')[1]]
      : this.state.theme[this.state.active];

  // update color value of active swatch
  updateActiveColor = (c, _e) => {
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

  // handle a click on swatch `i`
  clickSwatch = i => {
    if (this.state.active === 'syntax:' + i) {
      let syntaxUpdate = this.state.theme.syntax.slice();
      syntaxUpdate.splice(i, 1);
      this.updateSyntax(syntaxUpdate);
    } else {
      this.setState({ active: 'syntax:' + i });
    }
  };

  copyToClipboard = slug => navigator.clipboard.writeText(slug);

  // add new blank swatch
  addSwatch = () => {
    let colors = this.state.theme.syntax.slice();
    let active = colors.push('#fff') - 1; // push returns the new length of the array
    this.updateSyntax(colors);
    this.setState({ active: 'syntax:' + active });
  };

  // update this.state.theme.syntax without overwriting anything else
  updateSyntax = syntax => {
    let stateUpdate = { theme: this.state.theme };
    stateUpdate.theme.syntax = syntax;
    this.setState({ stateUpdate });
  };

  shuffleSyntax = () => this.updateSyntax(_.shuffle(this.state.theme.syntax));

  // validate pasted spine and use it if valid
  importSpine = spine => {
    let error = validateSpine(spine);
    if (error) {
      console.error(error.message);
    } else {
      this.setState({ theme: JSON.parse(spine) });
    }
  };

  // render the swatches for the syntax colors
  renderSyntaxSwatches = () =>
    this.state.theme.syntax.map((c, i) => (
      <Swatch
        key={i}
        color={this.state.theme.syntax[i]}
        onClick={() => {
          this.clickSwatch(i);
        }}
        active={this.state.active === 'syntax:' + i}
        new={false}
      />
    ));

  render() {
    return (
      <div
        className="wrapper"
        style={{
          background: this.state.theme.bg,
          color: this.state.theme.fg,
        }}
      >
        <section
          className="controls"
          style={{
            background: this.state.theme.bg,
            color: this.state.theme.ui + '55',
          }}
        >
          <Control
            onClick={this.importFromClipboard}
            icon={faPaste}
            label='Import from clipboard'
            {...this.state.theme}
          />
          
          <Control
            onClick={() => saveLocalSpine(this.state.theme)}
            icon={faSave}
            label='Save theme'
            {...this.state.theme}
          />

          <Control
            onClick={() => this.copyToClipboard(JSON.stringify(this.state.theme))}
            icon={faClipboardList}
            label='Copy theme spine'
            {...this.state.theme}
          />

          <Control
            onClick={() => this.copyToClipboard(JSON.stringify(genTheme(this.state.theme)))}
            icon={faCode}
            label='Copy theme code'
            {...this.state.theme}
          />

          <Control
            onClick={() => this.copyToClipboard(JSON.stringify(genSettings(this.state.theme)))}
            icon={faCogs}
            label='Copy workspace settings'
            {...this.state.theme}
          />
        </section>
        <section
          className="sidebar"
          style={{
            background: gradient(
              this.state.theme.bg,
              gradient(this.state.theme.bg, this.state.theme.fg)['7.5']
            )['50'],
            color: this.state.theme.fg,
          }}
        >
          <ChromePicker
            color={this.getActiveColor()}
            onChange={this.updateActiveColor}
          />
        </section>

        <section className="content">
          <div>
            {[
              ['Background', 'bg'],
              ['Foreground', 'fg'],
              ['UI accent', 'ui'],
              ['Positive color', 'pos'],
              ['Negative color', 'neg'],
            ].map(([label, slug]) => (
              <>
                <Swatch
                  onClick={() => this.setState({ active: slug })}
                  color={this.state.theme[slug]}
                  active={this.state.active === slug}
                />
                <h3>{label}</h3>
              </>
            ))}
            
            <div className="syntax">
              {this.state.theme.syntax.map((c, i) => (
                <Swatch
                  key={i}
                  color={this.state.theme.syntax[i]}
                  onClick={() => {
                    this.clickSwatch(i);
                  }}
                  active={this.state.active === 'syntax:' + i}
                />
              ))}

              <Swatch
                key={'new'}
                isNew
                onClick={this.addSwatch}
              />
            </div>
            <h3>
              Syntax colors&nbsp;
              <button onClick={this.shuffleSyntax}>Shuffle</button>
            </h3>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
