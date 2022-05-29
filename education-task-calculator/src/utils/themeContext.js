import React, { createContext, useState } from 'react';
import { getFromLS } from './storage';
export const themes = {
  themes: {
    light: {
      background: '#FFFFFF',
      headerBackground: '#434343',
      bodyText: '#000000',
      headerText: '#FFFFFF',
      border: '#707070',
    },
    dark: {
      background: '#171010',
      headerBackground: '#362222',
      bodyText: '#FFFFFF',
      headerText: '#423F3E',
      border: '#2B2B2B',
    },
    colored: {},
  },
};
const themeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getFromLS('theme') || 'light');
  const switchTheme = (theme) => setTheme(theme);
  return (
    <themeContext.Provider value={{ switchTheme, theme }}>
      {children}
    </themeContext.Provider>
  );
};
export default themeContext;
