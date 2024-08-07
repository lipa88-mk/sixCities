import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import { AppRoutes, AuthorizationStatus } from '../../const';
import PrivateRoute from '../../components/private-route/private-route';
import { FC } from 'react';
import type { Offer, CityPlacement } from '../../types/types';

type AppProps = {
  offers: Offer[];
  city: CityPlacement;
};

const App: FC<AppProps> = ({ offers, city }) => (
  <BrowserRouter>
    <Routes>
      <Route
        index
        element={<MainScreen offers={offers} city={city} />}
      />
      <Route path={AppRoutes.login} element={<LoginScreen />} />

      <Route
        path={AppRoutes.favorites}
        element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <FavoritesScreen offers={offers} />
          </PrivateRoute>
        }
      />

      <Route path={AppRoutes.offer}>
        <Route path={':id'} element={<PropertyScreen offers={offers} />} />
      </Route>

      <Route path={'*'} element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
