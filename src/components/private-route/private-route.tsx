import { Navigate } from 'react-router-dom';
import { AppRoutes, AuthorizationStatus } from '../../const';
import { FC } from 'react';
import { useAppSelector } from '../../hooks';
import { Spinner } from '../spinner/spinner';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
};

const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner />;
  }

  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoutes.login} />
  );
};

export default PrivateRoute;
