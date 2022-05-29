import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import './history.css';
const HistoryLine = styled.div`
  width: 2px;
  height: 910px;
  background-color: ${(props) => props.theme.background || 'black'};
`;
export const History = ({ history }) => {
  useEffect(() => {});
  return (
    <div className="history">
      <HistoryLine></HistoryLine>
      <div className="history-log">
        <span>History</span>
        <ul className="history-log-values">
          {history ? (
            history.map((el, index) => <li key={index}>{el}</li>)
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  );
};
History.propTypes = {
  history: PropTypes.array,
};
