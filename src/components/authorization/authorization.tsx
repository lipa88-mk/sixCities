import { Link } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-action';

const Authorization: FC = () => {
  const dispatch = useAppDispatch();
  const isLogged =
    useAppSelector((state) => state.authorizationStatus) ===
    AuthorizationStatus.Auth;
  const user = useAppSelector((state) => state.user);

  const handleSignOut: React.MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <ul className="header__nav-list">
      <li className="header__nav-item user">
        <Link
          to={isLogged ? AppRoutes.favorites : AppRoutes.login}
          className="header__nav-link header__nav-link--profile"
        >
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          {isLogged && (
            <>
              <span className="header__user-name user__name">{user}</span>
              <span className="header__favorite-count">3</span>
            </>
          )}
          {!isLogged && <span className="header__login">Sign in</span>}
        </Link>
      </li>
      {isLogged && (
        <li className="header__nav-item">
          <a className="header__nav-link" href="/" onClick={handleSignOut}>
            <span className="header__signout">Sign out</span>
          </a>
        </li>
      )}
    </ul>
  );
};

export default Authorization;
