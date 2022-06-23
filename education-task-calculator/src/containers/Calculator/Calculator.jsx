import React, { useState, useContext } from 'react';

import themeContext from '@utils/themeContext';
import Display from '@components/Display/Display';
import History from '@components/History/History';
import { getFromLS } from '@utils/storage';
import SimpleKeypad from '@components/SimpleKeypad/SimpleKeypad';

import './calculator.css';

export default function Calculator() {
  const DEFAULT_HISTORY = getFromLS('history') || [];

  const { theme } = useContext(themeContext);

  const [displayVal, setDisplayVal] = useState('');
  const [history, setHistory] = useState(DEFAULT_HISTORY);

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
