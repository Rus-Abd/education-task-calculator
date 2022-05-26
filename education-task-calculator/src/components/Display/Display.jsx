import React from 'react';
import './display.css';
const Display = ({ displayVal }) => {
  return (
    <div className="display">
      <span className="display-value">{displayVal}</span>
      <div className="display-line"></div>
    </div>
  );
};

export default Display;
