import React, { createContext, useState } from 'react';
import { getFromLS } from './storage';
import themes from '../constants/themes';

const themeContext = createContext();
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    themes[`${getFromLS('theme').length > 0 ? getFromLS('theme') : 'light'}`],
  );
  const switchTheme = (theme) => setTheme(theme);
  return (
    <themeContext.Provider value={{ theme, switchTheme }}>
      {children}
    </themeContext.Provider>
  );
}
export default themeContext;
