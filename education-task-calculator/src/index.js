import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from '@components/Header/Header';
import Settings from '@screens/Settings/Settings';
import Home from '@screens/Home/Home';
import HomeCC from '@screens/HomeCC/HomeCC';
import { ThemeProvider } from '@utils/themeContext';
import i18next from '@utils/i18n';
import { HOME_CC_ROUTE, HOME_ROUTE, SETTINGS_ROUTE } from './constants/routes';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <ThemeProvider>
          <Header />
          <Routes>
            <Route path={HOME_ROUTE} exact element={<Home />} />
            <Route path={HOME_CC_ROUTE} exact element={<HomeCC />} />
            <Route path={SETTINGS_ROUTE} element={<Settings />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
);
