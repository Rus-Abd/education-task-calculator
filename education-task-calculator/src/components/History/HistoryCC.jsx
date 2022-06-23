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
import ShowMoreCC from '../ShowMore/ShowMoreCC';

class HistoryCC extends Component {
  constructor(props) {
    const { history } = props;

    super(props);

    this.state = {
      showFullHistory: history.length > 7,
    };
  }

  handleUpdate = (nextState) => {
    this.setState(nextState);
  };

  render() {
    const { history, t } = this.props;
    const { showFullHistory } = this.state;

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
            <ShowMoreCC
              historyLength={history.length}
              setShowFullHistory={this.handleUpdate}
            />
          </HistoryLogValues>
        </HistoryLog>
      </Container>
    );
  }
}

HistoryCC.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),
  t: PropTypes.func.isRequired,
};

HistoryCC.defaultProps = {
  history: [],
};

export default withTranslation()(HistoryCC);
