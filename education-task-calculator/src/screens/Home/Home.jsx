import React from 'react';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import { Calculator } from '../../containers/Calculator/Calculator';

const Home = () => {
  return (
    <ErrorBoundary>
      <Calculator />
    </ErrorBoundary>
  );
};

export default Home;
