import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import themeContext from '../../utils/themeContext';
import './header.css';
import { Navigation, NavLink, SHeader, SHeaderTitle } from './styled';

export default function Header() {
  const { theme } = useContext(themeContext);
  const { t } = useTranslation();
  return (
    <SHeader backGround={theme.headerBackground} color={theme.headerText}>
      <SHeaderTitle> {t('header.title')}</SHeaderTitle>
      <Navigation>
        <NavLink>
          <Link className="text-link" to="/">
            {t('header.nav.0')}
          </Link>
        </NavLink>
        <NavLink>
          <Link className="text-link" to="/homeCC">
            {t('header.nav.1')}
          </Link>
        </NavLink>
        <NavLink>
          <Link className="text-link" to="/settings/">
            {t('header.nav.2')}
          </Link>
        </NavLink>
      </Navigation>
    </SHeader>
  );
}
