import { configureStore } from '@reduxjs/toolkit';

import { reducer } from './reducer';
import { setOffers, setReviews } from './action';
import { offers } from '../mocks/offers';
import { reviews } from '../mocks/reviews';

const store = configureStore({
  reducer
});

// ToDo: replace with server data
store.dispatch(setOffers(offers));
store.dispatch(setReviews(reviews));

export default store;
