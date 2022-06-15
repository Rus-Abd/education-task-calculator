import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HistoryLogItem, HistoryLogValues } from './styled';

export default class HistoryList extends Component {
  constructor(props) {
    super(props);
    const { history } = this.props;
    this.state = {
      showMore: history.length > 7,
    };
  }

  render() {
    const { history } = this.props;
    const { showMore } = this.state;
    console.log(showMore);
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
      <HistoryLogValues length={history.length}>
        {itemList}
        {showMore && (
          <span
            onClick={() => this.setState({ showMore: false })}
            className="button-show">
            Show More
          </span>
        )}
      </HistoryLogValues>
    );
  }
}
HistoryList.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ),
};
HistoryList.defaultProps = {
  history: [],
};
