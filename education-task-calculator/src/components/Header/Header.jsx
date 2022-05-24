import React from 'react';
import './header.css';
export const Header = () => {
  return (
    <header>
      <h1>Calculator App</h1>
      <ul className="header-list">
        <li>Home</li>
        <li>Settings</li>
      </ul>
    </header>
  );
};
