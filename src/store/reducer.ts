import { createReducer } from '@reduxjs/toolkit';
import type { CityPlacement, Offer, SortName, Comment } from '../types/types';
import { setCity, fetchOffers, setSorting, setReviews } from './action';
import { cities, CityCenter, Sorting } from '../const';

type State = {
    city: CityPlacement;
    offers: Offer[];
    sorting: SortName;
    reviews: Comment[];
    isOffersLoading: boolean;
}

const initialCity = cities[0];

const initialState: State = {
  city: {
    name: initialCity,
    location: CityCenter[initialCity]
  },
  offers: [],
  sorting: Sorting.Popular,
  reviews: [],
  isOffersLoading: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = {
        name: action.payload,
        location: CityCenter[action.payload]
      };
    })
    .addCase(fetchOffers.pending, (state) => {
      state.isOffersLoading = true;
    })
    .addCase(fetchOffers.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoading = false;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    });
});
