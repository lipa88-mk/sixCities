import { createReducer } from '@reduxjs/toolkit';
import type { CityPlacement, Offer, SortName, Comment } from '../types/types';
import { setCity, setOffers, setSorting, setReviews } from './action';
import { cities, CityCenter } from '../const';

type State = {
    city: CityPlacement;
    offers: Offer[];
    sorting: SortName;
    reviews: Comment[];
}

const initialCity = cities[0];

const initialState: State = {
  city: {
    name: initialCity,
    location: CityCenter[initialCity]
  },
  offers: [],
  sorting: 'Popular',
  reviews: []
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
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    });
});
