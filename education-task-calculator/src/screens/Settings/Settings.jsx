import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { getFromLS, setToLS } from '@utils/storage';
import themeContext from '@utils/themeContext';

import themes from '@constants/themes';
import './settings.css';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: getFromLS('theme') || 'light',
    };
  }

  handleSelect(e) {
    const { switchTheme } = this.context;
    setToLS('theme', e.target.value);
    this.setState({ value: e.target.value });
    switchTheme(themes[e.target.value]);
  }

  eraseHistory = () => {
    setToLS('history', '');
  };

  changeLanguage = () => {
    const { i18n } = this.props;
    const newLang = i18n.language === 'ru' ? 'en' : 'ru';
    i18n.changeLanguage(newLang);
  };

  render() {
    const { value } = this.state;
    const { t } = this.props;
    return (
      <div className="settings">
        <h2>{t('settings.title')}</h2>
        <div className="settings-theme">
          <label htmlFor="theme">{t('settings.label')}</label>
          <select
            multiple={false}
            id="theme"
            onChange={(e) => this.handleSelect(e)}
            value={`${value}`}
            data-cy="theme-select">
            <option value="light" data-cy="theme-light">
              {t('settings.themes.0')}
            </option>
            <option value="dark" data-cy="theme-dark">
              {t('settings.themes.1')}
            </option>
            <option value="colored" data-cy="theme-colored">
              {t('settings.themes.2')}
            </option>
          </select>
        </div>

        <button
          className="settings-button"
          onClick={this.eraseHistory}
          type="button">
          {t('settings.eraseHistory')}
        </button>
        <button
          className="settings-button"
          type="button"
          onClick={this.changeLanguage}>
          {t('settings.changeLang')}
        </button>
      </div>
    );
  }
}

Settings.contextType = themeContext;
Settings.propTypes = {
  t: PropTypes.func.isRequired,
  i18n: PropTypes.shape({
    language: PropTypes.string.isRequired,
    changeLanguage: PropTypes.func.isRequired,
  }).isRequired,
};

export default withTranslation()(Settings);
