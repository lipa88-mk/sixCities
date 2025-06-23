import { render, screen } from '@testing-library/react';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Header } from './header';
import { createMemoryHistory } from 'history';
import HistoryRouter from '../history-route/history-route';
import {
  AuthorizationStatus,
  cities,
  CityCenter,
  Sorting,
} from '../../const';
import { Provider } from 'react-redux';
import type { Offer, User } from '../../types/types';

describe('Component: Header', () => {
  it('should be rendered correctly', () => {
    const history = createMemoryHistory();
    render(
      <HistoryRouter history={history}>
        <Header showAuth={false} />
      </HistoryRouter>
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('banner')).toHaveClass('header');
  });

  it('should render Authorization', () => {
    const history = createMemoryHistory();
    const mockStore = configureMockStore();

    const user: User = {
      id: 1,
      name: 'User',
      avatarUrl: 'img/user-1.jpg',
      isPro: false,
      email: 'qwe@gmail.com',
      token: 'qwe',
    };

    const offers: Offer[] = [
      {
        id: 1,
        price: 120,
        rating: 4.0,
        title: 'Offer 1',
        isPremium: true,
        isFavorite: false,
        city: {
          name: cities[0],
          location: CityCenter[cities[0]],
        },
        location: CityCenter[cities[0]],
        previewImage: 'img/1.jpg',
        description: 'Nice house',
        type: 'hotel',
        goods: ['dish washer', 'wi-fi'],
        bedrooms: 2,
        host: user,
        maxAdults: 3,
        images: ['img/1.jpg', 'img/2.jpg', 'img/3.jpg'],
      },
    ];

    const store = mockStore({
      SITE_DATA: {
        reviews: [],
      },
      SITE_PROCESS: {
        city: {
          name: cities[0],
          location: CityCenter[cities[0]],
        },
        sorting: Sorting.Popular,
        error: null,
      },
      USER_PROCESS: { authorizationStatus: AuthorizationStatus.Auth, user: null },
    });
    render(
      <Provider store={store}>
        <HistoryRouter history={history}>
          <Header showAuth />
        </HistoryRouter>
      </Provider>
    );
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toHaveClass('header__nav');
  });
});
