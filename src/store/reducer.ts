
import { createReducer } from '@reduxjs/toolkit';

import type { CityPlacement, Offer } from '../types/types';

import { setCity, setOffers } from './action';
import { cities, CityCenter } from '../const';

type State = {
    city: CityPlacement;
    offers: Offer[];
}

const initialState: State = {
  city: {
    name: cities[0],
    location: CityCenter[cities[0]]
  },
  offers: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = {
        name: action.payload,
        location: CityCenter[action.payload]
      };
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
    });
});
