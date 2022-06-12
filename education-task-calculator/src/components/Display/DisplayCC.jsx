import React from 'react';
import { Container, DisplayLine, DisplayValue } from './styled';
import types from './types';

export default class DisplayCC extends React.Component {
  render() {
    const { displayVal, theme } = this.props;
    return (
      <Container>
        <DisplayValue>{displayVal}</DisplayValue>
        <DisplayLine color={theme.border} />
      </Container>
    );
  }
}
DisplayCC.propTypes = types;
