import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainScreen } from '../../pages/main-screen/main-screen';
import { FavoritesScreen } from '../../pages/favorites-screen/favorites-screen';
import { LoginScreen } from '../../pages/login-screen/login-screen';
import { PropertyScreen } from '../../pages/property-screen/property-screen';
import { PageNotFound } from '../../pages/page-not-found/page-not-found';
import { AppRoutes, AuthorizationStatus } from '../../const';
import PrivateRoute from '../../components/private-route/private-route';
import { FC } from 'react';
import type {LocationItemProps} from '../../pages/main-screen/main-screen';

type AppProps = {
  locations: LocationItemProps[];
};

const App: FC<AppProps> = ({ locations }) => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoutes.root} element={<MainScreen locations={locations} />} >
        <Route path={':city'} element={<MainScreen locations={locations} />} />
      </Route>

      <Route path={AppRoutes.login} element={<LoginScreen />} />

      <Route path={AppRoutes.favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth} ><FavoritesScreen /></PrivateRoute>} />

      <Route path={AppRoutes.offer} element={<PropertyScreen />} >
        <Route path={':id'} element={<PropertyScreen />} />
      </Route>

      <Route path={'*'} element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
