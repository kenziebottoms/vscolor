import React, { Component } from 'react';
import './Swatch.css';
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
        onChange={() => this.props.onChange()}
      >
        <span className='hover'>x</span>
        {this.props.new ? '+' : ''}
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
