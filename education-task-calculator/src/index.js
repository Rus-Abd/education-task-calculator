import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, themes } from './utils/themeContext';
import { Header } from './components/Header/Header';
import Settings from './screens/Settings/Settings';
import Home from './screens/Home/Home';
console.log(themes);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/settings/" element={<Settings />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
