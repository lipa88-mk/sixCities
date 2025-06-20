import { createSlice } from "@reduxjs/toolkit";
import { SiteData } from "../../types/state";
import { StoreSlice } from "../../const";
import {
  fetchCommentsAction,
  fetchFavoritesAction,
  postFavoriteAction,
  postCommentAction,
} from "../action";

const initialState: SiteData = {
  reviews: [],
  favorites: [],
  isFavoritesLoading: false,
};

export const siteData = createSlice({
  name: StoreSlice.SiteData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCommentsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })

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
