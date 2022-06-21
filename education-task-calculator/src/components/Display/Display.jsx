import React from 'react';
import { Container, DisplayLine, DisplayValue } from './styled';
import types from './types';

function Display({ displayVal, theme }) {
  return (
    <Container>
      <DisplayValue data-cy="displayValue">{displayVal}</DisplayValue>
      <DisplayLine color={theme.border} />
    </Container>
  );
}

export default Display;

Display.propTypes = types;
