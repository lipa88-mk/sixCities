import { Route, Routes } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import PropertyScreen from '../../pages/property-screen/property-screen';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import { AppRoutes } from '../../const';
import PrivateRoute from '../../components/private-route/private-route';
import { FC } from 'react';

const App: FC = () => (
  <Routes>
    <Route path={AppRoutes.root} element={<MainScreen />}>
      <Route path={':city'} element={<MainScreen />} />
    </Route>

    <Route path={AppRoutes.login} element={<LoginScreen />} />

    <Route
      path={AppRoutes.favorites}
      element={
        <PrivateRoute>
          <FavoritesScreen />
        </PrivateRoute>
      }
    />

    <Route path={`${AppRoutes.offer}/:id`} element={<PropertyScreen />} />
    <Route path={'*'} element={<PageNotFound />} />
    <Route path={AppRoutes.NotFound} element={<PageNotFound />} />
  </Routes>
);

export default App;
