import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import themeContext from '../../utils/themeContext';
import './header.css';
import { Navigation, NavLink, SHeader, SHeaderTitle } from './styled';

export default function Header() {
  const { theme } = useContext(themeContext);
  return (
    <SHeader backGround={theme.headerBackground} color={theme.headerText}>
      <SHeaderTitle>Calculator App</SHeaderTitle>
      <Navigation>
        <NavLink>
          <Link className="text-link" to="/">
            Home
          </Link>
        </NavLink>
        <NavLink>
          <Link className="text-link" to="/settings/">
            Settings
          </Link>
        </NavLink>
      </Navigation>
    </SHeader>
  );
}
