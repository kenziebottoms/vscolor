# VS Color

This app is a tool for basic color theme generation for Visual Studio Code. I used the [Old Hope Theme](https://marketplace.visualstudio.com/items?itemName=dustinsanders.an-old-hope-theme-vscode) as a base and edit it as needed.

This tool accepts a foreground and background color and uses shades of a gradient between the two to generate graduated UI colors. It accepts a UI accent color, a positive color, and a negative color. The positive/negative colors are used for error- and validation-related syntax highlighting and for Git integration highlights. It accepts up to 5 colors for syntax highlighting but works best with 4 or 5. You can shuffle the syntax colors.

This tool exports themes in several JSON object formats: 
  1. The "spine", which can then be imported by clipboard. The 'Save' button saves the theme in local storage.
  1. Workspace settings, which can be pasted into your local `settings.json` for immediate testing, or as theme code.
      > It's usually easier to use a workspace's `settings.json` because the settings copied from the app must be merged with whatever is already in `settings.json`.
  1. The code used to publish a theme in the VSCode Marketplace.


## Language Support

I have used this tool to optimize color themes specifically for:
  - Javascript
    - Vue
    - React
    - JSON
  - HTML
  - CSS/SCSS
  - Java
  - Python

I have spot-checked the following languages:
  - Ruby
  - Swift
  - C#

Users have approved themes generated by this tool for:
  - Go

## Resources
- [Create React App](https://github.com/facebookincubator/create-react-app)
- [React Color](http://casesandberg.github.io/react-color/)
- [Deploying a React app to GitHub Pages](https://github.com/gitname/react-gh-pages)

## Themes generated with this tool

> Email, message, or PR me if you want yours added to this list!

- [Replicant](https://marketplace.visualstudio.com/items?itemName=kenziebottoms.replicant) by me
- [Thetis](https://marketplace.visualstudio.com/items?itemName=kenziebottoms.thetis) by me
- [Flunky](https://marketplace.visualstudio.com/items?itemName=kenziebottoms.flunky) by me
- [Chalkboard](https://marketplace.visualstudio.com/items?itemName=kenziebottoms.chalkboard) by me
- [Heptapod](https://marketplace.visualstudio.com/items?itemName=kenziebottoms.heptapod) by me
- [Photophore](https://marketplace.visualstudio.com/items?itemName=kenziebottoms.photophore) by me

## Run locally

```bash
git clone # ...
nvm use
yarn && yarn start
```