import React from 'react';
import PropTypes from 'prop-types';
import './history.css';
import { useTranslation } from 'react-i18next';
import {
  HistoryLine,
  Container,
  HistoryLog,
  HistoryLogTitle,
  HistoryLogValues,
  HistoryLogItem,
} from './styled';

export default function History({ history }) {
  const { t } = useTranslation();
  return (
    <Container>
      <HistoryLine />
      <HistoryLog>
        <HistoryLogTitle>{t('history')}</HistoryLogTitle>
        <HistoryLogValues>
          {history.map((el, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <HistoryLogItem key={index}>{el}</HistoryLogItem>
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
