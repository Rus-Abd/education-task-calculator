import React, { useState } from 'react';
import Display from '../../components/Display/Display';
import { History } from '../../components/History/History';
import { Keypad } from '../../components/Keypad/Keypad';
import './calculator.css';

export const displayContext = React.createContext();

export const Calculator = () => {
  const [displayVal, setDisplayVal] = useState('');
  return (
    <main className="container">
      <div className="container-calculations">
        <Display displayVal={displayVal} />
        <Keypad setDisplayVal={setDisplayVal} />
      </div>
      <History />
    </main>
  );
};
