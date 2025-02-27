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
  setSorting,
  fetchOffersAction,
  setError,
  fetchOfferAction,
  fetchFavoritesAction,
  fetchCommentsAction,
  postFavoriteAction,
  postCommentAction,
  fetchNearByOffersAction,
  checkAuthAction,
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
  favorites: Offer[];
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
  userData: null,
  review: null,
  favorites: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setCity, (state, action) => {
      state.city = {
        name: action.payload,
        location: CityCenter[action.payload],
      };
    })

    // offers:
    .addCase(fetchOffersAction.pending, (state) => {
      state.isOffersLoading = true;
    })
    .addCase(fetchOffersAction.fulfilled, (state, action) => {
      state.offers = action.payload;
      state.isOffersLoading = false;
    })
    .addCase(setSorting, (state, action) => {
      state.sorting = action.payload;
    })

    // current offer:
    .addCase(fetchOfferAction.pending, (state) => {
      state.isCurrentOfferLoading = true;
    })
    .addCase(fetchOfferAction.fulfilled, (state, action) => {
      state.currentOffer = action.payload;
      state.isCurrentOfferLoading = false;
    })
    .addCase(fetchCommentsAction.fulfilled, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(postCommentAction.fulfilled, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(fetchNearByOffersAction.fulfilled, (state, action) => {
      state.nearByOffers = action.payload;
    })

    // favorites:
    .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
      state.favorites = action.payload;
    })
    .addCase(postFavoriteAction.fulfilled, (state, action) => {
      const updatedOffer = action.payload;
      state.offers = state.offers.map((offer) => offer.id === updatedOffer.id ? updatedOffer : offer);

      if (state.currentOffer && state.currentOffer.id === updatedOffer.id) {
        state.currentOffer = updatedOffer;
      }

      if (updatedOffer.isFavorite) {
        state.favorites = state.favorites.concat(updatedOffer);
      } else {
        state.favorites = state.favorites.filter((favoriteOffer) => favoriteOffer.id !== updatedOffer.id);
      }
    })

    // user auth:
    .addCase(checkAuthAction.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.userData = action.payload;
    })
    .addCase(checkAuthAction.rejected, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })

    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});
