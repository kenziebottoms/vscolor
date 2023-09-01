import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './styles/Control.scss';

const Control = ({ onClick, icon, bg, fg, ui, label }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="control"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="tooltip"
        style={{
          background: bg,
          color: fg,
        }}
      >
        {label}
      </div>
      <div
        className="icon"
        style={{
          background: bg,
          color: hovered ? `${ui}88` : 'inherit',
        }}
      >
        <FontAwesomeIcon icon={icon} />
      </div>
    </div>
  );
};

export default Control;
