import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import themeContext from '../../utils/themeContext';
import './display.css';
const DisplayLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${(theme) => theme.color};
`;
const Display = ({ displayVal }) => {
  const { theme } = useContext(themeContext);
  return (
    <div className="display">
      <span className="display-value">{displayVal}</span>
      <DisplayLine color={theme.border}></DisplayLine>
    </div>
  );
};

export default Display;

Display.propTypes = {
  displayVal: PropTypes.string,
};
