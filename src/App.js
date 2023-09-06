import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import {
  faPaste,
  faSave,
  faCogs,
  faClipboardList,
  faCode,
} from '@fortawesome/free-solid-svg-icons';
import { shuffle } from 'lodash';

import './styles/App.scss';

import Control from './Control';
import Swatch from './Swatch';
import { Theme } from './Theme.ts';

import { saveLocalSpine } from './Spine';
import { gradient } from './colorUtils';

const App = () => {
  const [theme, setTheme] = useState(
    Theme.fromJsonString(localStorage.getItem('theme')).generateSpine()
  );
  const [activeSwatch, setActiveSwatch] = useState('bg');

  const importFromClipboard = () =>
    navigator.clipboard
      .readText()
      .then(clipboard => setTheme(Theme.fromJsonString(clipboard).generateSpine()))
      .catch(e => console.log(e));

  // get color value of active swatch
  const getActiveColor = () =>
    activeSwatch.indexOf('syntax') !== -1
      ? theme.syntax[activeSwatch.split(':')[1]]
      : theme[activeSwatch];

  // update color value of active swatch
  const updateActiveColor = (c, _e) => {
    if (activeSwatch.includes('syntax')) {
      setTheme({
        ...theme,
        syntax: {
          ...theme.syntax,
          [activeSwatch.split(':')[1]]: c.hex
        }
      });
    } else {
      setTheme({
        ...theme,
        [activeSwatch]: c.hex
      });
    }
  };

  // handle a click on swatch `i`
  const clickSwatch = i => {
    if (activeSwatch === 'syntax:' + i) {
      let syntaxUpdate = theme.syntax.slice();
      syntaxUpdate.splice(i, 1);
      updateSyntax(syntaxUpdate);
    } else {
      setActiveSwatch(`syntax:${i}`);
    }
  };

  const copyToClipboard = slug => navigator.clipboard.writeText(slug);

  // add new blank swatch
  const addSwatch = () => {
    let colors = theme.syntax.slice();
    let active = colors.push('#fff') - 1; // push returns the new length of the array
    updateSyntax(colors);
    setActiveSwatch(`syntax:${active}`);
  };

  // update theme.syntax without overwriting anything else
  const updateSyntax = syntax => {
    setTheme({
      ...theme,
      syntax,
    })
  };

  const shuffleSyntax = () => setTheme({
    ...theme,
    syntax: shuffle(theme.syntax)
  });
  
  return (
    <div
      className="wrapper"
      style={{
        background: theme.bg,
        color: theme.fg,
      }}
    >
      <section
        className="controls"
        style={{
          background: theme.bg,
          color: theme.ui + '55',
        }}
      >
        <Control
          onClick={importFromClipboard}
          icon={faPaste}
          label='Import from clipboard'
          {...theme}
        />
        
        <Control
          onClick={() => saveLocalSpine(theme)}
          icon={faSave}
          label='Save theme'
          {...theme}
        />

        <Control
          onClick={() => copyToClipboard(JSON.stringify(theme))}
          icon={faClipboardList}
          label='Copy theme spine'
          {...theme}
        />

        <Control
          onClick={() => copyToClipboard(JSON.stringify(genTheme(theme)))}
          icon={faCode}
          label='Copy theme code'
          {...theme}
        />

        <Control
          onClick={() => copyToClipboard(JSON.stringify(genSettings(theme)))}
          icon={faCogs}
          label='Copy workspace settings'
          {...theme}
        />
      </section>
      <section
        className="sidebar"
        style={{
          background: gradient(
            theme.bg,
            gradient(theme.bg, theme.fg)['7.5']
          )['50'],
          color: theme.fg,
        }}
      >
        <ChromePicker
          color={getActiveColor()}
          onChange={updateActiveColor}
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
                onClick={() => setActiveSwatch(slug)}
                color={theme[slug]}
                active={activeSwatch === slug}
              />
              <h3>{label}</h3>
            </>
          ))}
          
          <div className="syntax">
            {theme.syntax.map((color, i) => (
              <Swatch
                key={i}
                color={color}
                onClick={() => clickSwatch(i)}
                active={activeSwatch === `syntax:${i}`}
              />
            ))}

            <Swatch
              key={'new'}
              isNew
              onClick={addSwatch}
            />
          </div>
          <h3>
            Syntax colors&nbsp;
            <button onClick={shuffleSyntax}>Shuffle</button>
          </h3>
        </div>
      </section>
    </div>
  );
}

export default App;
