import React, { Component } from 'react';
import { setToLS } from '../../utils/storage';
import './settings.css';
export default class Settings extends Component {
  eraseHistory() {
    setToLS('history', '');
  }
  render() {
    return (
      <div className="settings">
        <h2>Settings</h2>
        <div className="settings-theme">
          <label htmlFor="">Switch Theme</label>
          <select name="" id="">
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
