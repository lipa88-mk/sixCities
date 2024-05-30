import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainScreen } from '../../pages/main-screen/main-screen';
import { FavoritesScreen } from '../../pages/favorites-screen/favorites-screen';
import { LoginScreen } from '../../pages/login-screen/login-screen';
import { PropertyScreen } from '../../pages/property-screen/property-screen';
import { Page404 } from '../../pages/page404/page404';

type AppProps = {
  offersCount: number;
  locationsList: string[];
};

export const Paths = {
  login: '/login',
  favorites: '/favorites',
  offer: '/offer',
};

const App = ({ offersCount, locationsList }: AppProps): JSX.Element => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainScreen offersCount={offersCount} locationsList={locationsList} />} />
      <Route path={Paths.login} element={<LoginScreen />}>
      </Route>
      <Route path={Paths.favorites} element={<FavoritesScreen />} />
      <Route path={Paths.offer} element={<PropertyScreen />} />
      <Route path={'*'} element={<Page404 />} />
    </Routes>
  </BrowserRouter>
);

export default App;
