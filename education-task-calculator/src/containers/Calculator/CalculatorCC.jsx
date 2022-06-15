import React, { Component } from 'react';
import themeContext from '@utils/themeContext';

import { getFromLS } from '@utils/storage';
import './calculator.css';
import DisplayCC from '@components/Display/DisplayCC';
import KeypadCC from '@components/Keypad/KeypadCC';
import HistoryCC from '@components/History/HistoryCC';
import SimpleKeypad from '@components/SimpleKeypad/SimpleKeypad';

export default class CalculatorCC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayVal: '',
      history: getFromLS('history') || [],
    };
    this.update = this.update.bind(this);
  }

  update(nextState) {
    this.setState(nextState);
  }

  render() {
    const { theme } = this.context;

    const { displayVal, history } = this.state;
    return (
      <main className="container">
        <div className="container-calculations">
          <DisplayCC displayVal={displayVal} theme={theme} />
          <KeypadCC
            setDisplayVal={this.update}
            // this.setState(displayVal) this.setState(history)
            setHistory={this.update}
            history={history}
            theme={theme}
          />
        </div>
        <HistoryCC history={history} />
      </main>
    );
  }
}
CalculatorCC.contextType = themeContext;
