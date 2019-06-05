import React, { Component } from 'react';

import './styles/Swatch.scss';

class Swatch extends Component {
  classNames() {
    return [
      'swatch',
      this.props.active ? 'active' : '',
      this.props.new ? 'new' : '',
    ].join(' ');
  }

  render() {
    return (
      <div
        className={this.classNames()}
        style={{ background: this.props.color }}
        onClick={() => this.props.onClick()}
      >
        <span className="hover">{'\u00D7'}</span>
        <span className="add">{this.props.new ? '+' : '\u00A0'}</span>
      </div>
    );
  }
}
Swatch.defaultProps = {
  color: '#fff',
  active: true,
  new: false,
};

export default Swatch;
