import React from "react";
import ReactDOM from "react-dom/client";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { Provider } from "react-redux";
import App from "./components/app/app";
import { store } from "./store";
import ErrorMessage from "./components/error-message/error-message";
import HistoryRouter from "./components/history-route/history-route";
import { browserHistory } from "./browser-history";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
export const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <HistoryRouter history={browserHistory}>
          <ErrorMessage />
          <App />
        </HistoryRouter>
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
