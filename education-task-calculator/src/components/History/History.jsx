import React, { useState } from 'react';
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
import ShowMore from '../ShowMore/ShowMore';

export default function History({ history }) {
  const { t } = useTranslation();
  const [showFullHistory, setShowFullHistory] = useState(history.length > 7);

  let itemList;

  if (showFullHistory) {
    itemList = history.map((el, index) =>
      index < 7 ? (
        // eslint-disable-next-line react/no-array-index-key
        <HistoryLogItem key={index}>{el}</HistoryLogItem>
      ) : null,
    );
  } else {
    itemList = history.map((el, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <HistoryLogItem key={index}>{el}</HistoryLogItem>
    ));
  }
  return (
    <Container>
      <HistoryLine />
      <HistoryLog>
        <HistoryLogTitle>{t('history')}</HistoryLogTitle>
        <HistoryLogValues showFullHistory={showFullHistory}>
          {itemList}
          <ShowMore
            historyLength={history.length}
            setShowFullHistory={setShowFullHistory}
          />
        </HistoryLogValues>
      </HistoryLog>
    </Container>
  );
}

History.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),
};

History.defaultProps = {
  history: [],
};
