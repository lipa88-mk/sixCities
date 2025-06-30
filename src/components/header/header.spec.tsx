import { render, screen } from "@testing-library/react";
import { configureMockStore } from "@jedmao/redux-mock-store";
import { Header } from "./header";
import { createMemoryHistory } from "history";
import HistoryRouter from "../history-route/history-route";
import { AuthorizationStatus, Sorting } from "../../const";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

describe("Component: Header", () => {
  it("should be rendered correctly", () => {
    const history = createMemoryHistory();
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });
    render(
      <QueryClientProvider client={queryClient}>
        <HistoryRouter history={history}>
          <Header showAuth={false} />
        </HistoryRouter>
      </QueryClientProvider>
    );
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("banner")).toHaveClass("header");
  });

  it("should render Authorization", () => {
    const history = createMemoryHistory();
    const mockStore = configureMockStore();
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
        },
      },
    });

    const store = mockStore({
      SITE_DATA: {
        reviews: [],
      },
      SITE_PROCESS: {
        sorting: Sorting.Popular,
        error: null,
      },
      USER_PROCESS: {
        authorizationStatus: AuthorizationStatus.Auth,
        user: null,
      },
    });
    render(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <HistoryRouter history={history}>
            <Header showAuth />
          </HistoryRouter>
        </Provider>
      </QueryClientProvider>
    );
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toHaveClass("header__nav");
  });
});
