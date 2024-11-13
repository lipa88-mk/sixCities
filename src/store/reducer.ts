import { createReducer } from '@reduxjs/toolkit';
import type {
  CityPlacement,
  Offer,
  SortName,
  Comment,
  UserData,
} from '../types/types';
import {
  setCity,
  loadOffers,
  setSorting,
  loadReviews,
  requireAuthorization,
  setError,
  setUserEmail,
  loadCurrentOffer,
  loadNearByOffers,
} from './action';
import { cities, CityCenter, Sorting, AuthorizationStatus } from '../const';

type State = {
  city: CityPlacement;
  offers: Offer[];
  isOffersLoading: boolean;
  sorting: SortName;
  currentOffer: Offer | null;
  isCurrentOfferLoading: boolean;
  reviews: Comment[];
  nearByOffers: Offer[];
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  user: UserData['email'] | null;
};

const initialCity = cities[0];

const initialState: State = {
  city: {
    name: initialCity,
    location: CityCenter[initialCity],
  },
  offers: [],
  isOffersLoading: false,
  currentOffer: null,
  isCurrentOfferLoading: false,
  sorting: Sorting.Popular,
  reviews: [],
  nearByOffers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  user: '',
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = {
        name: action.payload,
        location: CityCenter[action.payload],
      };
    })
    .addCase(loadOffers, (state, action) => {
      state.isOffersLoading = true;
      state.offers = action.payload;
      state.isOffersLoading = false;
    })
    // .addCase(setOffersloading, (state, action) => {
    //   state.isOffersLoading = action.payload;
    // })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    })

    .addCase(loadCurrentOffer, (state, action) => {
      state.isCurrentOfferLoading = true;
      state.currentOffer = action.payload;
      state.isCurrentOfferLoading = false;
    })
    // .addCase(setCurrentOfferLoading, (state, action) => {
    //   state.isCurrentOfferLoading = action.payload;
    // })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(loadNearByOffers, (state, action) => {
      state.nearByOffers = action.payload;
    })

    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setUserEmail, (state, action) => {
      state.user = action.payload;
    });
});
