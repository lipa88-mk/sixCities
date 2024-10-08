import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './reducer';
import { setReviews } from './action';
import { createAPI } from '../services/api';

import { reviews } from '../mocks/reviews';

export const api = createAPI();

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

// ToDo: replace with server data
store.dispatch(setReviews(reviews));

