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
import { Offer } from '../../types/offers';

type AppProps = {
  offers: Offer[];
  locations: LocationItemProps[];
};

const App: FC<AppProps> = ({ locations, offers }) => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoutes.root} element={<MainScreen locations={locations} offers={offers} />} >
        <Route path={':city'} element={<MainScreen locations={locations} offers={offers} />} />
      </Route>

      <Route path={AppRoutes.login} element={<LoginScreen />} />

      <Route path={AppRoutes.favorites} element={<PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth} ><FavoritesScreen /></PrivateRoute>} />

      <Route path={AppRoutes.offer} >
        <Route path={':id'} element={<PropertyScreen offers={offers} />} />
      </Route>

      <Route path={'*'} element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
