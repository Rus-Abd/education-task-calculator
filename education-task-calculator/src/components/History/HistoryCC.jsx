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
  constructor(props) {
    const { history } = props;

    super(props);

    this.state = {
      showMore: history.length > 7,
    };
  }

  componentDidUpdate({ history: prevHistory }) {
    const { history } = this.props;
    if (prevHistory !== history) {
      this.setState({ showMore: history.length > 7 });
    }
  }

  handleShow = () => {
    this.setState({ showMore: false });
  };

  render() {
    const { history, t } = this.props;
    const { showMore } = this.state;

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
          <HistoryLogValues length={history.length} showFullHistory={showMore}>
            {itemList}
            {showMore && (
              <span onClick={this.handleShow} className="button-show">
                {t('showMore')}
              </span>
            )}
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
