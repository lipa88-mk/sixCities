import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainScreen } from '../../pages/main-screen/main-screen';
import { FavoritesScreen } from '../../pages/favorites-screen/favorites-screen';
import { LoginScreen } from '../../pages/login-screen/login-screen';
import { PropertyScreen } from '../../pages/property-screen/property-screen';
import { Page404 } from '../../pages/page404/page404';
import { AppRoutes } from '../../const';

type AppProps = {
  offersCount: number;
  locationsList: string[];
};

const App = ({ offersCount, locationsList }: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path={AppRoutes.root} element={<MainScreen offersCount={offersCount} locationsList={locationsList} />} />
      <Route path={AppRoutes.login} element={<LoginScreen />}>
      </Route>
      <Route path={AppRoutes.favorites} element={<FavoritesScreen />} />
      <Route path={AppRoutes.offer} element={<PropertyScreen />} >
        <Route path={':id'} element={<PropertyScreen />} />
      </Route>
      <Route path={'*'} element={<Page404 />} />
    </Routes>
  </BrowserRouter>
);

export default App;
