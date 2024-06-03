import {Navigate} from 'react-router-dom';
import {AppRoutes, AuthorizationStatus} from '../../const';
import { FC } from 'react';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

const PrivateRoute: FC<PrivateRouteProps> = ({authorizationStatus, children}) =>
{ if (authorizationStatus === AuthorizationStatus.Auth) {return children;}
  return <Navigate to={AppRoutes.login} />;};

export default PrivateRoute;
