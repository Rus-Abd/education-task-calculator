import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withTranslation } from 'react-i18next';

import {
  HistoryLine,
  Container,
  HistoryLog,
  HistoryLogTitle,
  HistoryLogValues,
  HistoryLogItem,
} from './styled';

class HistoryCC extends Component {
  render() {
    const { history, t } = this.props;
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
}
HistoryCC.propTypes = {
  history: PropTypes.arrayOf(PropTypes.string),
  t: PropTypes.func.isRequired,
};
HistoryCC.defaultProps = {
  history: [],
};

export default withTranslation()(HistoryCC);
