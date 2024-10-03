import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import { AppRoutes, AuthorizationStatus } from '../../const';
import PrivateRoute from '../../components/private-route/private-route';
import { FC } from 'react';
import type { Offer, CityPlacement, Comment } from '../../types/types';

type AppProps = {
  offers: Offer[];
  city: CityPlacement;
  reviews: Comment[];
};

const App: FC<AppProps> = ({ offers, city, reviews }) => (
  <BrowserRouter>
    <Routes>
      <Route index element={<MainScreen />} />
      <Route path={AppRoutes.login} element={<LoginScreen />} />

      <Route
        path={AppRoutes.favorites}
        element={
          <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
            <FavoritesScreen />
          </PrivateRoute>
        }
      />

      <Route path={AppRoutes.offer}>
        <Route path={':id'} element={<PropertyScreen offers={offers} nearbyOffers={offers} city={city} reviews={reviews} />} />
      </Route>

      <Route path={'*'} element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
