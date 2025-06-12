import { createSlice } from '@reduxjs/toolkit';
import { SiteData } from '../../types/state';
import { StoreSlice } from '../../const';
import {
  fetchOffersAction,
  // fetchOfferAction,
  fetchCommentsAction,
  // fetchNearByOffersAction,
  fetchFavoritesAction,
  postFavoriteAction,
  postCommentAction,
} from '../action';

const initialState: SiteData = {
  offers: [],
  isOffersLoading: false,
  // currentOffer: null,
  // isCurrentOfferLoading: false,
  reviews: [],
  // nearByOffers: [],
  favorites: [],
  isFavoritesLoading: false,
};

export const siteData = createSlice({
  name: StoreSlice.SiteData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // offers:
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersLoading = false;
      })
      .addCase(fetchOffersAction.rejected, (state) => {
        state.isOffersLoading = false;
        state.offers = [];
      })

      // current offer:
      // .addCase(fetchOfferAction.pending, (state) => {
      //   state.isCurrentOfferLoading = true;
      // })
      // .addCase(fetchOfferAction.fulfilled, (state, action) => {
      //   state.currentOffer = action.payload;
      //   state.isCurrentOfferLoading = false;
      // })
      // .addCase(fetchOfferAction.rejected, (state) => {
      //   state.currentOffer = null;
      //   state.isCurrentOfferLoading = false;
      // })

      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      // .addCase(fetchNearByOffersAction.fulfilled, (state, action) => {
      //   state.nearByOffers = action.payload;
      // })

      // favorites:
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isFavoritesLoading = true;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isFavoritesLoading = false;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.isFavoritesLoading = false;
        state.favorites = [];
      })
      .addCase(postFavoriteAction.fulfilled, (state, action) => {
        const updatedOffer = action.payload;
        state.offers = state.offers.map((offer) =>
          offer.id === updatedOffer.id ? updatedOffer : offer
        );

        // if (state.currentOffer && state.currentOffer.id === updatedOffer.id) {
        //   state.currentOffer = updatedOffer;
        // }

        if (updatedOffer.isFavorite) {
          state.favorites = state.favorites.concat(updatedOffer);
        } else {
          state.favorites = state.favorites.filter(
            (favoriteOffer) => favoriteOffer.id !== updatedOffer.id
          );
        }
      });
  },
});
