import React from 'react';
import './history.css';
export const History = ({ history }) => {
  return (
    <div className="history">
      <div className="history-line"></div>
      <div className="history-log">
        <span>History</span>
        <ul className="history-log-values">
          {history.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
