import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles/Control.scss';

const Control = props => (
  <div className="control" onClick={props.onClick}>
    <div
      className="tooltip"
      style={{ background: props.bg, color: props.fg + '88' }}
    >
      {props.toolTip}
    </div>
    <div className="icon" style={{ background: props.bg }}>
      <FontAwesomeIcon icon={props.icon} />
    </div>
  </div>
);

export default Control;
