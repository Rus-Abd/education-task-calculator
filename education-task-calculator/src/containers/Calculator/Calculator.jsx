import React, { useState } from 'react';
import Display from '../../components/Display/Display';
import { History } from '../../components/History/History';
import { KeyPad } from '../../components/Keypad/Keypad';
import { getFromLS } from '../../utils/storage';
import './calculator.css';

export const Calculator = () => {
  const [displayVal, setDisplayVal] = useState('');
  const [history, setHistory] = useState(getFromLS('history') || []);
  return (
    <main className="container">
      <div className="container-calculations">
        <Display displayVal={displayVal} />
        <KeyPad
          setDisplayVal={setDisplayVal}
          setHistory={setHistory}
          history={history}
        />
      </div>
      <History history={history} />
    </main>
  );
};
