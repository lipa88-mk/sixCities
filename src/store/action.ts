import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import type { CityName, Offer, SortName, Comment } from '../types/types';
import { ApiRoute } from '../const';

export const Action = {
  SET_CITY: 'city/set',
  FETCH_OFFERS: 'offers/fetch',
  SET_SORTING: 'sorting/set',
  SET_REVIEWS: 'reviews/set',
};

export const setCity = createAction<CityName>(Action.SET_CITY);
export const setSorting = createAction<SortName>(Action.SET_SORTING);
export const setReviews = createAction<Comment[]>(Action.SET_REVIEWS);

export const fetchOffers = createAsyncThunk(Action.FETCH_OFFERS, async (_, thunkAPI) => {
  const axios = thunkAPI.extra as AxiosInstance;
  const { data } = await axios.get<Offer[]>(ApiRoute.Offers);

  return data;
});
