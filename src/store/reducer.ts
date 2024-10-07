import { createReducer } from '@reduxjs/toolkit';
import type { CityPlacement, Offer, SortName, Comment, UserData } from '../types/types';
import { setCity, loadOffers, setSorting, setReviews, requireAuthorization, setError, setUserEmail, setOffersloading } from './action';
import { cities, CityCenter, Sorting, AuthorizationStatus } from '../const';

type State = {
    city: CityPlacement;
    offers: Offer[];
    sorting: SortName;
    reviews: Comment[];
    isOffersLoading: boolean;
    authorizationStatus: AuthorizationStatus;
    error: string | null;
    user: UserData['email'] | null;
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
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  user: '',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = {
        name: action.payload,
        location: CityCenter[action.payload]
      };
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setOffersloading, (state, action) => {
      state.isOffersLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.user = action.payload;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    })
    .addCase(setReviews, (state, action) => {
      state.reviews = action.payload;
    });
});
