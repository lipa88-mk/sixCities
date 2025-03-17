import { FC } from 'react';
import Logo from '../logo/logo';
import Authorization from '../authorization/authorization';

type HeaderProps = {
  showAuth?: boolean;
};

export const Header: FC<HeaderProps> = ({ showAuth = true }) => (
  <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Logo />
        </div>
        {showAuth && (
          <nav className="header__nav">
            <Authorization />
          </nav>
        )}
      </div>
    </div>
  </header>
);
