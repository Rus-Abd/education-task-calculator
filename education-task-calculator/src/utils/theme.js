import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from './contexts/ThemeStore';
const themes = {
  themes: {
    light: {
      background: '#FFFFFF',
      headerBackground: '#434343',
      bodyText: '#000000',
      headerText: '#FFFFFF',
      border: 'red',
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
const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext); // get the current theme ('light' or 'dark')
  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};

export default Theme;
