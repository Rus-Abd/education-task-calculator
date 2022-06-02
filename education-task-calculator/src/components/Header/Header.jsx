import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import themeContext from '../../utils/themeContext';
import './header.css';
const SHeader = styled.header`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(theme) => theme.backGround};
  color: ${(theme) => theme.color};
`;
export const Header = () => {
  const { theme } = useContext(themeContext);
  return (
    <SHeader backGround={theme.headerBackground} color={theme.headerText}>
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
