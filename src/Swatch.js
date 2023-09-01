import React from 'react';

import './styles/Swatch.scss';

const Swatch = ({
  color = '#fff',
  active = false,
  isNew = false,
  onClick,
}) => {

  return (
    <div
      className={[
        'swatch',
        active && 'active',
        isNew && 'new',
      ].filter(Boolean).join(' ')}
      style={{ background: color }}
      onClick={onClick}
    >
      <span className="hover">{'\u00D7'}</span>
      <span className="add">{isNew ? '+' : '\u00A0'}</span>
    </div>
  );
}

export default Swatch;
