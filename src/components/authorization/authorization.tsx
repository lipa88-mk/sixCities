import React from "react";
import { AuthorizationStatus } from "../../const";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  getAuthorizationStatus,
  getUser,
} from "../../store/user-process/selectors";
import { logoutAction } from "../../store/action";
import { useFetchFavorites } from "../../services/queries";
import { Link } from "@tanstack/react-router";

const Authorization: FC = () => {
  const isLogged =
    useAppSelector(getAuthorizationStatus) === AuthorizationStatus.Auth;

  return (
    <ul className="header__nav-list">
      {isLogged ? <AuthorizedUserView /> : <GuestView />}
    </ul>
  );
};

export default Authorization;

const AuthorizedUserView: FC = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);
  const { data } = useFetchFavorites();
  const favoritesNumber = data?.length || 0;
  const handleSignOut: React.MouseEventHandler<HTMLAnchorElement> = (evt) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };
  return (
    <>
      <li className="header__nav-item user">
        <Link
          to={"/favorites"}
          className="header__nav-link header__nav-link--profile"
        >
          {user && (
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
        </Link>
      </li>

      <li className="header__nav-item">
        <a className="header__nav-link" href="/" onClick={handleSignOut}>
          <span className="header__signout">Sign out</span>
        </a>
      </li>
    </>
  );
};

const GuestView: FC = () => {
  return (
    <li className="header__nav-item user">
      <Link
        to={"/login"}
        className="header__nav-link header__nav-link--profile"
      >
        <div className="header__avatar-wrapper user__avatar-wrapper" />
        <span className="header__login">Sign in</span>
      </Link>
    </li>
  );
};
