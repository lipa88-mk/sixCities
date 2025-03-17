import { configureStore } from '@reduxjs/toolkit';
import { createAPI } from '../services/api';
import { rootReducer } from './root-reducer';
import { redirect } from './middlewares/redirect';
import { fetchOffersAction, checkAuthAction, fetchFavoritesAction } from './action';

export const api = createAPI();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());
store.dispatch(fetchFavoritesAction());


