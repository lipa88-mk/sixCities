import { Navigate } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const';
import { FC } from 'react';
import { useAppSelector } from '../../hooks';

type PrivateRouteProps = {
  children: JSX.Element;
};

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return children;
  }

  return <Navigate to={AppRoutes.login} />;
};

export default PrivateRoute;
