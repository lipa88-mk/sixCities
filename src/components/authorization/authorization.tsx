import { Link } from 'react-router-dom';
import { ApiRoute, AppRoutes, AuthorizationStatus } from '../../const';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus, getUser } from '../../store/user-process/selectors';
import { logoutAction } from '../../store/action';
import { useQuery } from '@tanstack/react-query';
import { api } from '../../store';
import { Offer } from '../../types/types';

const Authorization: FC = () => {
  const dispatch = useAppDispatch();
  const isLogged =
    useAppSelector(getAuthorizationStatus) ===
    AuthorizationStatus.Auth;
  const user = useAppSelector(getUser);

  const {data} = useQuery({
    queryKey: ["favorites"],
    queryFn: async () => {
      try {
        const response = await api.get<Offer[]>(ApiRoute.Favorites);
        return response.data;
      } catch (error) {
        const axiosError = error as Error;
        console.error('Error fetching favorites:', axiosError.message);
        throw axiosError;
      }
    }
  });

  const favoritesNumber = data?.length || 0;

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
          {isLogged && user && (
            <>
              <div
                className="header__avatar-wrapper user__avatar-wrapper"
                style={
                  {
                    backgroundImage: `url(${user.avatarUrl})`,
                  } as React.CSSProperties
                }
              />
              <span className="header__user-name user__name">
                {user?.email}
              </span>
              <span className="header__favorite-count">{favoritesNumber}</span>
            </>
          )}
          {!isLogged && (
            <>
              <div className="header__avatar-wrapper user__avatar-wrapper" />
              <span className="header__login">Sign in</span>
            </>
          )}
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
