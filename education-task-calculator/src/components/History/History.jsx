import React from 'react';
import './history.css';
export const History = () => {
  return (
    <div className="history">
      <div className="history-line"></div>
      <div className="history-log">
        <span>History</span>
        <ul className="history-log-values"></ul>
      </div>
    </div>
  );
};
