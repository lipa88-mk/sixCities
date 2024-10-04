import { Link } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const';
import { FC } from 'react';
import { useAppSelector } from '../../hooks';

const Authorization: FC = () => {
  const isLogged = useAppSelector((state) => state.authorizationStatus) === AuthorizationStatus.Auth;
  const user = useAppSelector((state) => state.user);

  return (
    <ul className="header__nav-list">
      {isLogged ? (
        <>
          <li className="header__nav-item user">
            <Link
              to={AppRoutes.favorites}
              className="header__nav-link header__nav-link--profile"
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__user-name user__name">
                {user}
              </span>
              <span className="header__favorite-count">3</span>
            </Link>
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
};

export default Authorization;
