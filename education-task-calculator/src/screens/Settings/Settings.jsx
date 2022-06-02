import React, { Component } from 'react';
import { getFromLS, setToLS } from '../../utils/storage';
import themeContext from '../../utils/themeContext';

import { themes } from '../../constants/themes';
import './settings.css';
export default class Settings extends Component {
  static contextType = themeContext;
  constructor(props) {
    super(props);
    this.state = {
      value: getFromLS('theme') || 'light',
    };
  }
  handleSelect(e) {
    setToLS('theme', e.target.value);
    this.setState({ value: e.target.value });
    this.context.switchTheme(themes[e.target.value]);
  }
  eraseHistory() {
    setToLS('history', '');
  }
  render() {
    return (
      <div className="settings">
        <h2>Settings</h2>
        <div className="settings-theme">
          <label>Switch Theme</label>
          <select
            multiple={false}
            id="theme"
            onChange={(e) => this.handleSelect(e)}
            value={`${this.state.value}`}>
            <option value="light">Light Theme</option>
            <option value="dark">Dark Theme</option>
            <option value="colored">Colored Theme</option>
          </select>
        </div>

        <button className="settings-clear" onClick={this.eraseHistory}>
          Clear All History
        </button>
      </div>
    );
  }
}
