import React, { useState, useContext } from 'react';
import themeContext from '../../utils/themeContext';
import Display from '../../components/Display/Display';
import History from '../../components/History/History';
import KeyPad from '../../components/Keypad/Keypad';
import { getFromLS } from '../../utils/storage';
import './calculator.css';
import SimpleKeypad from '../../components/SimpleKeypad/SimpleKeypad';

export default function Calculator() {
  const { theme } = useContext(themeContext);
  const [displayVal, setDisplayVal] = useState('');
  const [history, setHistory] = useState(getFromLS('history') || []);

  return (
    <main className="container">
      <div className="container-calculations">
        <Display displayVal={displayVal} theme={theme} />
        <SimpleKeypad
          setDisplayVal={setDisplayVal}
          setHistory={setHistory}
          history={history}
          theme={theme}
        />
      </div>
      <History history={history} />
    </main>
  );
}
