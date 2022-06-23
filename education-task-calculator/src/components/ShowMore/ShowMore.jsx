import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ShowMoreButton from './styled';

export default function ShowMore({ historyLength, setShowFullHistory }) {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(true);

  const handleClick = () => () => {
    setShowMore(false);
    setShowFullHistory(false);
  };

  if (historyLength > 7 && showMore) {
    return (
      <ShowMoreButton onClick={handleClick()}>{t('showMore')}</ShowMoreButton>
    );
  }

  return null;
}
ShowMore.propTypes = {
  historyLength: PropTypes.number.isRequired,
  setShowFullHistory: PropTypes.func.isRequired,
};
