import {Navigate} from 'react-router-dom';
import {AppRoutes, AuthorizationStatus} from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

const PrivateRoute = ({authorizationStatus, children}: PrivateRouteProps): JSX.Element =>
  authorizationStatus === AuthorizationStatus.Auth
    ? children
    : <Navigate to={AppRoutes.login} />;

export default PrivateRoute;
