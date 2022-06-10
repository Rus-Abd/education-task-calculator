import React from 'react';
import PropTypes from 'prop-types';
import './history.css';
import {
  HistoryLine,
  Container,
  HistoryLog,
  HistoryLogTitle,
  HistoryLogValues,
} from './styled';

export default function History({ history }) {
  return (
    <Container>
      <HistoryLine />
      <HistoryLog>
        <HistoryLogTitle>History</HistoryLogTitle>
        <HistoryLogValues>
          {history.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </HistoryLogValues>
      </HistoryLog>
    </Container>
  );
}
History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.string),
};
History.defaultProps = {
  history: [],
};
