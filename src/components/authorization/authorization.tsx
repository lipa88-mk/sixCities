import { Link } from 'react-router-dom';
import { Paths } from '../app/app';

type AuthorizationProps = {
  isLogged?: boolean;
};

const Authorization = ({
  isLogged = false,
}: AuthorizationProps): JSX.Element => (
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
          to={Paths.login}
          className="header__nav-link header__nav-link--profile"
        >
          <div className="header__avatar-wrapper user__avatar-wrapper"></div>
          <span className="header__login">Sign in</span>
        </Link>
      </li>
    )}
  </ul>
);

export { Authorization };
