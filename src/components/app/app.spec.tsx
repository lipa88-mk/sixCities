import { configureMockStore } from "@jedmao/redux-mock-store";
import {
  AppRoutes,
  AuthorizationStatus,
  cities,
  CityCenter,
  Sorting,
} from "../../const";
import { createMemoryHistory } from "history";
import { Provider } from "react-redux";
import HistoryRouter from "../history-route/history-route";
import App from "./app";
import { render, screen } from "@testing-library/react";
import type { Offer, User } from "../../types/types";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const mockStore = configureMockStore();
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const user: User = {
  id: 1,
  name: "User",
  avatarUrl: "img/user-1.jpg",
  isPro: false,
  email: "qwe@gmail.com",
  token: "qwe",
};

const offers: Offer[] = [
  {
    id: 1,
    price: 120,
    rating: 4.0,
    title: "Offer 1",
    isPremium: true,
    isFavorite: false,
    city: {
      name: cities[0],
      location: CityCenter[cities[0]],
    },
    location: CityCenter[cities[0]],
    previewImage: "img/1.jpg",
    description: "Nice house",
    type: "hotel",
    goods: ["dish washer", "wi-fi"],
    bedrooms: 2,
    host: user,
    maxAdults: 3,
    images: ["img/1.jpg", "img/2.jpg", "img/3.jpg"],
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

const history = createMemoryHistory();

const fakeApp = (
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <App />
      </HistoryRouter>
    </Provider>
  </QueryClientProvider>
);

describe("Application Routing", () => {
  it('should render "MainScreen" when user navigate to "/"', () => {
    history.push(AppRoutes.root);
    render(fakeApp);
    expect(screen.getByText(/Cities/i)).toBeInTheDocument();
    expect(screen.getByText("Sign out")).toBeInTheDocument();
    expect(
      screen.getByText(`1 places to stay in ${cities[0]}`)
    ).toBeInTheDocument();
    expect(screen.getAllByText(Sorting.Popular)).toHaveLength(2);
    expect(screen.getByText("Premium")).toBeInTheDocument();
    expect(screen.getByText(offers[0].title)).toBeInTheDocument();
  });

  it('should render "Login" when user navigate to "/login"', () => {
    history.push(AppRoutes.login);
    render(fakeApp);

    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it('should render "FavoritesScreen" when user navigate to "/favorites"', () => {
    history.push(AppRoutes.favorites);
    render(fakeApp);
    expect(screen.getByText("Saved listing")).toBeInTheDocument();
  });
});
