import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles/Control.scss';

class Control extends Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  render() {
    return (
      <div
        className="control"
        onClick={this.props.onClick}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}
      >
        <div
          className="tooltip"
          style={{
            background: this.props.bg,
            color: this.props.toolTipFg + '88',
          }}
        >
          {this.props.toolTip}
        </div>
        <div
          className="icon"
          style={{
            background: this.props.bg,
            color: this.state.hover ? this.props.hoverFg : 'inherit',
          }}
        >
          <FontAwesomeIcon icon={this.props.icon} />
        </div>
      </div>
    );
  }
}

export default Control;
