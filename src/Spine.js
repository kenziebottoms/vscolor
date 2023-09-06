import { Theme } from './Theme.ts';

const DEFAULT_SPINE = {
  bg: '#000000',
  fg: '#ffffff',
  pos: '#00ff00',
  neg: '#ff0000',
  syntax: ['#ffff00'],
  ui: '#0000ff',
}

export const loadLocalSpine = () => {
  let stored = window.localStorage.getItem('theme') || '';
  return Theme.fromJsonSpine(stored);
};

export const saveLocalSpine = (spine) => {
  window.localStorage.setItem('theme', JSON.stringify(spine));
}

export const validateSpine = spineJSON => {
  try {
    let spine = JSON.parse(spineJSON);
    let props = ['bg', 'fg', 'pos', 'neg', 'ui'];
    let colorTest = /^#([0-9a-f]{3}){1,2}$/i;
    let colors = [...props.map(prop => spine[prop]), ...spine.syntax];
    let badColors = colors
      .filter(color => !(color && colorTest.test(color)))
      .join(', ');
    if (badColors)
      console.error('Invalid hex code(s): ' + badColors);
    return false;
  } catch (err) {
    console.error('Invalid spine JSON');
    return err;
  }
};