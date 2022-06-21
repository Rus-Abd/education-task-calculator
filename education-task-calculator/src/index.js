import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import i18next from 'i18next';
// import { initReactI18next } from 'react-i18next';
import Header from '@components/Header/Header';
import Settings from '@screens/Settings/Settings';
import Home from '@screens/Home/Home';
import HomeCC from '@screens/HomeCC/HomeCC';
import { ThemeProvider } from '@utils/themeContext';
import i18next from '@utils/i18n';
// import resources from './constants/langResources';
// i18next.use(initReactI18next).init({
//   resources: { resources },
//   lng: 'eng',
//   fallbackLng: 'en',
//   interpolation: {
//     escapeValue: false,
//   },
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<h1>Loading...</h1>}>
      <BrowserRouter>
        <ThemeProvider>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/homeCC" exact element={<HomeCC />} />
            <Route path="/settings/" element={<Settings />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>,
);
