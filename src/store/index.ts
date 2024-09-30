import { configureStore } from '@reduxjs/toolkit';

import { reducer } from './reducer';
import { setOffers } from './action';
import { offers } from '../mocks/offers';

const store = configureStore({
  reducer
});

store.dispatch(setOffers(offers));

export default store;
