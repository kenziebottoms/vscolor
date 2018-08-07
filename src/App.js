import
  React,
  { Component }
from 'react';
import { ChromePicker } from 'react-color';
import Swatch from './Swatch';
import {
  genTheme,
  genSettings
} from './Theme';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {theme: null};
    this.state.theme = this.getSaved();
  };

  getSaved = () => {
    let stored = window.localStorage.getItem('theme');
    if (!stored) {
      return {
        bg: '#000000',
        fg: '#ffffff',
        pos: '#00ff00',
        neg: '#ff0000',
        syntax: ['#ffff00'],
        ui: '#0000ff'
      };
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

  setActive = (prop) => {
    this.setState({ active: prop});
  };
  
  getActiveColor = () => {
    if (this.state.active && this.state.active.indexOf('syntax') !== -1) {
      return this.state.theme.syntax[this.state.active.split(':')[1]];
    } else {
      return this.state.theme[this.state.active];
    }
  };

  updateActiveColor = (c, e) => {
    let stateUpdate = { theme: this.state.theme };
    if (this.state.active.indexOf('syntax') !== -1) {
      stateUpdate.theme.syntax[this.state.active.split(':')[1]] = c.hex;
    } else {
      stateUpdate.theme[this.state.active] = c.hex;
    }
    this.setState(stateUpdate);
  };

  save = () => {
    let { localStorage } = window;
    localStorage.setItem('theme', JSON.stringify(this.state.theme));
  };

  displaySwatch = (slug) => {
    return (
      <Swatch onClick={() => {this.setActive(slug)}} color={this.state.theme[slug]} active={this.state.active === slug} />
    )
  };

  displaySyntax = () => {
    return this.state.theme.syntax.map((c, i) => {
      return (
        <Swatch
          key={i}
          color={this.state.theme.syntax[i]}
          onClick={() => {this.clickSwatch(i)}}
          active={this.state.active === 'syntax:'+i}
          new={false}
        />
      )
    });
  };
  
  clickSwatch = i => {
    if (this.state.active === 'syntax:'+i) {
      let syntaxUpdate = this.state.theme.syntax.slice();
      syntaxUpdate.splice(i, 1);
      this.updateSyntax(syntaxUpdate);
    } else {
      this.setActive('syntax:'+i);
    }
  };
  
  displayAddSwatch = () => {
    return (
      <Swatch
        key={'new'}
        active={false}
        new={true}
        onClick={this.add}
      />
    );
  };

  // add new blank swatch
  add = e => {
    let colors = this.state.theme.syntax.slice();
    let active = colors.push('#fff') - 1;   // push returns the new length of the array
    this.updateSyntax(colors);
    this.setActive('syntax:'+active);
  };

  updateSyntax = syntax => {
    let stateUpdate = {theme: this.state.theme};
    stateUpdate.theme.syntax = syntax;
    this.setState({stateUpdate});
  };

  updateSpine = (e) => {
    let spine = e.target.value;
    if (this.validateSpine(spine)) {
      this.setState({ theme: JSON.parse(spine) });
    } else {
      e.target.value = JSON.stringify(this.state.theme);
    }
  };

  validateSpine = (spineJSON) => {
    try {
      let spine = JSON.parse(spineJSON);
      let props = ['bg', 'fg', 'pos', 'neg', 'ui'];
      let colorTest = /^#([0-9a-f]{3}){1,2}$/i;
      for (let i=0; i<props.length; i++) {
        let prop = props[i];
        let color = spine[prop];
        if (!!color) {
          if (!colorTest.test(color)) {
            return false;
          }
        } else {
          return false;
        }
      }
      let syntaxes = spine.syntax;
      for (let j=0; j<syntaxes.length; j++) {
        if (!colorTest.test(syntaxes[j])) {
          return false;
        }
      }
      return true;
    } catch(err) {
      return false;
    }
  };

  render() {
    return (
      <div className='wrapper' style={{ background: this.state.theme.bg, color: this.state.theme.fg }}>
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
            <div className='syntax'>
              {this.displaySyntax()}
              {this.displayAddSwatch()}
            </div>
            <h3>Syntax colors</h3>
            {this.displaySwatch('ui')}
            <h3>UI accent</h3>
          </div>
        </main>
        <header style={{ background: this.state.theme.fg, color: this.state.theme.bg }}>
          <ChromePicker color={this.getActiveColor()} onChange={this.updateActiveColor}/>
          <button onClick={this.save} type='Submit'>
            Save
          </button>
          <div className='code'>
            <h3>Spine</h3>
            <textarea
              defaultValue={JSON.stringify(this.state.theme)}
              rows='5'
              onBlur={this.updateSpine}>
            </textarea>
            <h3>Theme Code</h3>
            <textarea
              value={JSON.stringify(genTheme(this.state.theme))}
              rows='5'
              onChange={() => {this.value = JSON.stringify(genTheme(this.state.theme))}}>
            </textarea>
            <h3>Workspace Settings</h3>
            <textarea
              value={JSON.stringify(genSettings(this.state.theme))}
              rows='5'
              onChange={() => {JSON.stringify(genSettings(this.state.theme))}}>
            </textarea>
          </div>
        </header>
      </div >
    );
  }
}

export default App;
