import { createSlice } from "@reduxjs/toolkit";
import { SiteData } from "../../types/state";
import { StoreSlice } from "../../const";
import {
  fetchCommentsAction,
  postCommentAction,
} from "../action";

const initialState: SiteData = {
  reviews: [],
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
  },
});
