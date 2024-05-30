import {Navigate} from 'react-router-dom';
import {AppRoutes, AuthorizationStatus} from '../../const';
import { FC } from 'react';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

const PrivateRoute: FC<PrivateRouteProps> = ({authorizationStatus, children}) =>
  authorizationStatus === AuthorizationStatus.Auth
    ? children
    : <Navigate to={AppRoutes.login} />;

export default PrivateRoute;
