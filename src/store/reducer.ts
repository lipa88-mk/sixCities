import { createReducer } from '@reduxjs/toolkit';
import type {
  CityPlacement,
  Offer,
  SortName,
  Comment,
  UserData,
  PostReview,
} from '../types/types';
import {
  setCity,
  loadOffers,
  setSorting,
  loadReviews,
  requireAuthorization,
  setError,
  loadCurrentOffer,
  loadNearByOffers,
  postReview,
  loadUserData,
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
  review: PostReview | null;
  nearByOffers: Offer[];
  authorizationStatus: AuthorizationStatus;
  error: string | null;
  userData: UserData | null;
};

const initialCity = cities[0];

const initialState: State = {
  city: {
    name: initialCity,
    location: CityCenter[initialCity],
  },
  offers: [],
  isOffersLoading: false, //ToDo: fix loaders
  currentOffer: null,
  isCurrentOfferLoading: false,
  sorting: Sorting.Popular,
  reviews: [],
  nearByOffers: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
  userData: null,
  review: null,
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
      state.offers = action.payload;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    })

    .addCase(loadCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })

    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(postReview, (state, action) => {
      state.review = action.payload;
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
    .addCase(loadUserData, (state, action) => {
      state.userData = action.payload;
    });
});
