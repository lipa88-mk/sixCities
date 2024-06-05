import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { FC } from 'react';

type AuthorizationProps = {
  isLogged?: boolean;
};

const Authorization: FC<AuthorizationProps> = ({ isLogged = false }) => (
  <ul className="header__nav-list">
    {isLogged ? (
      <>
        <li className="header__nav-item user">
          <a className="header__nav-link header__nav-link--profile" href="#/">
            <div className="header__avatar-wrapper user__avatar-wrapper"></div>
            <span className="header__user-name user__name">
              Oliver.conner@gmail.com
            </span>
          </a>
        </li>
        <li className="header__nav-item">
          <a className="header__nav-link" href="#/">
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      </>
    ) : (
      <li className="header__nav-item user">
        <Link
          to={AppRoutes.login}
          className="header__nav-link header__nav-link--profile"
        >
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__login">Sign in</span>
        </Link>
      </li>
    )}
  </ul>
);

export default Authorization;
