import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import themeContext from '@utils/themeContext';
import './header.css';
import { Navigation, SHeader, SHeaderTitle } from './styled';

export default function Header() {
  const { theme } = useContext(themeContext);
  const { t } = useTranslation();
  return (
    <SHeader backGround={theme.headerBackground} color={theme.headerText}>
      <SHeaderTitle> {t('header.title')}</SHeaderTitle>
      <Navigation>
        <NavLink to="/" className="link">
          {t('header.nav.0')}
        </NavLink>
        <NavLink to="/homeCC" className="link">
          {t('header.nav.1')}
        </NavLink>
        <NavLink to="/settings/" className="link">
          {t('header.nav.2')}
        </NavLink>
      </Navigation>
    </SHeader>
  );
}
