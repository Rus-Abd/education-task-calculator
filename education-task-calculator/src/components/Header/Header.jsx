import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './header.css';
const SHeader = styled.header`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #434343;
  color: #ffffff;
`;
export const Header = () => {
  return (
    <SHeader>
      <h1>Calculator App</h1>
      <ul className="header-list">
        <li>
          <Link className="text-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-link" to="/settings/">
            Settings
          </Link>
        </li>
      </ul>
    </SHeader>
  );
};
