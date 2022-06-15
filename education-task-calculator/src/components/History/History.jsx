import React, { useState, useEffect } from 'react';
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

  const [showMore, setShowMore] = useState(history.length > 7);
  // useEffect(() => setShowMore(history.length > 7), [history]);
  let itemList;
  if (showMore) {
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
        <HistoryLogValues length={history.length} showMore={showMore}>
          {itemList}
          {showMore && (
            <span onClick={() => setShowMore(false)} className="button-show">
              Show More
            </span>
          )}
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
