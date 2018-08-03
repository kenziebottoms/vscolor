import React, { Component } from 'react';
import './Palette.css';
import Swatch from './Swatch.js';

class Palette extends Component {
  constructor(props) {
    super(props);
    let storedColors = props.colors.slice();
    this.state = {
      colors: storedColors,
      active: props.active,
    };
  };

  // change active swatch
  change = (c, e) => {
    let colors = this.state.colors.slice();
    colors[this.state.active] = c.hex;
    this.handleChange({ colors });
  };

  // add new blank swatch
  add = e => {
    let colors = this.state.colors.slice();
    let active = colors.push('#fff') - 1;   // push returns the new length of the array
    this.handleChange({ active, colors });
  };

  // handle swatch click
  click = (i, e) => {
    if (this.state.active === i) {
      let colors = this.state.colors.slice();
      colors.splice(i, 1);
      this.handleChange({
        colors,
        active: colors.length - 1
      });
    } else {
      this.setState({ active: i });
    }
  };

  handleChange = state => {
    this.setState(state);
    this.props.update(state.colors);
  };

  // make a swatch for each color in state.colors
  renderSwatches = () => {
    return this.state.colors.map((c, i) => {
      return <Swatch
        key={i}
        color={c}
        active={i === this.state.active}
        onClick={() => {this.click(i); this.props.onClick(i)}}
        onChange={this.handleChange}
      />;
    });
  };

  render() {
    return (
      <div className='palette'>
        {this.renderSwatches()}
        <Swatch key={'new'} active={false} new={true} onClick={() => this.add()} />
      </div>
    );
  }
}

export default Palette;
