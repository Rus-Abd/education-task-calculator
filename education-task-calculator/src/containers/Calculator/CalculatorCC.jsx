import React, { Component } from 'react';

import themeContext from '@utils/themeContext';
import { getFromLS } from '@utils/storage';
import DisplayCC from '@components/Display/DisplayCC';
import KeypadCC from '@components/Keypad/KeypadCC';
import HistoryCC from '@components/History/HistoryCC';

import './calculator.css';

export default class CalculatorCC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayVal: '',
      history: getFromLS('history') || [],
    };
  }

  handleUpdate = (nextState) => {
    this.setState(nextState);
  };

  render() {
    const { theme } = this.context;

    const { displayVal, history } = this.state;
    return (
      <main className="container">
        <div className="container-calculations">
          <DisplayCC displayVal={displayVal} theme={theme} />
          <KeypadCC
            setDisplayVal={this.handleUpdate}
            setHistory={this.handleUpdate}
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
