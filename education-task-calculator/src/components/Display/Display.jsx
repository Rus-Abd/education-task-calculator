import React from 'react';
import styled from 'styled-components';
import './display.css';
const DisplayLine = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${(props) => props.theme.background};
`;
const Display = ({ displayVal }) => {
  return (
    <div className="display">
      <span className="display-value">{displayVal}</span>
      <DisplayLine></DisplayLine>
    </div>
  );
};

export default Display;
