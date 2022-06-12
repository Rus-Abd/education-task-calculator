import React, { Component } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import CalculatorCC from '../../containers/Calculator/CalculatorCC';

export default class HomeCC extends Component {
  render() {
    return (
      <ErrorBoundary>
        <CalculatorCC />
      </ErrorBoundary>
    );
  }
}
