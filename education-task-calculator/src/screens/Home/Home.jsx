import React from 'react';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import Calculator from '@containers/Calculator/Calculator';

function Home() {
  return (
    <ErrorBoundary>
      <Calculator />
    </ErrorBoundary>
  );
}

export default Home;
