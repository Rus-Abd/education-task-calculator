import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import ShowMoreButton from './styled';
import types from './types';

class ShowMoreCC extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMore: true,
    };
  }

  handleClick = () => {
    const { setShowFullHistory } = this.props;

    this.setState({ showMore: false });
    setShowFullHistory({ showFullHistory: false });
  };

  renderButton = () => {
    const { showMore } = this.state;
    const { historyLength, t } = this.props;

    if (historyLength > 7 && showMore) {
      return (
        <ShowMoreButton onClick={this.handleClick}>
          {t('showMore')}
        </ShowMoreButton>
      );
    }

    return null;
  };

  render() {
    return <>{this.renderButton()}</>;
  }
}
export default withTranslation()(ShowMoreCC);

ShowMoreCC.propTypes = types;
