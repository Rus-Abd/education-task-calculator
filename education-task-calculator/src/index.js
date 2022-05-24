import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Calculator } from './components/Calculator/Calculator';
import { Header } from './components/Header/Header';
import Settings from './screens/Settings/Settings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact component={Calculator} />
        <Route path="/settings/" component={Settings} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
