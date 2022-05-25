import React from 'react';
import Display from '../../components/Display/Display';
import { History } from '../../components/History/History';
import { Keypad } from '../../components/Keypad/Keypad';
import './calculator.css';
export const Calculator = () => {
  return (
    <main className="container">
      <div className="container-calculations">
        <Display />
        <Keypad />
      </div>
      <History />
    </main>
  );
};
