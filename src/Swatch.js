import React, { Component } from 'react';
import classnames from 'classnames';

class Swatch extends Component {
  render() {
    return (
      <div
        className = {classnames({
          'swatch': true,
          'active': this.props.active,
          'new': this.props.new
        })}
        style={{background: this.props.color}}
        onClick={() => this.props.onClick()}
      >
        <span className='hover'>{'\u00D7'}</span>
        <span className='add'>{this.props.new ? '+' : '\u00A0'}</span>
      </div>
    )
  }
};
Swatch.defaultProps = {
  color: '#fff',
  active: true,
  new: false
};

export default Swatch;
