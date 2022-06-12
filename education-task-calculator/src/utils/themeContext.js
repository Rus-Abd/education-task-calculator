import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { getFromLS } from './storage';
import themes from '../constants/themes';

const themeContext = createContext();
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    themes[`${getFromLS('theme').length > 0 ? getFromLS('theme') : 'light'}`],
  );
  const switchTheme = (currTheme) => setTheme(currTheme);
  const value = useMemo(() => ({ theme, switchTheme }), [theme]);
  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
}
export default themeContext;
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
