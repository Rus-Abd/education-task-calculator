import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import themeContext from '../../utils/themeContext';
import './header.css';
import { Navigation, SHeader, SHeaderTitle } from './styled';

export default function Header() {
  const { theme } = useContext(themeContext);
  const { t } = useTranslation();
  return (
    <SHeader backGround={theme.headerBackground} color={theme.headerText}>
      <SHeaderTitle> {t('header.title')}</SHeaderTitle>
      <Navigation>
        <NavLink to="/" activeClassName="active-link" className="link">
          {t('header.nav.0')}
        </NavLink>
        <NavLink to="/homeCC" activeClassName="active-link" className="link">
          {t('header.nav.1')}
        </NavLink>
        <NavLink to="/settings/" activeClassName="active-link" className="link">
          {t('header.nav.2')}
        </NavLink>
      </Navigation>
    </SHeader>
  );
}
