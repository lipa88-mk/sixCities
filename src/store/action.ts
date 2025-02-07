import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import type {
  CityName,
  Offer,
  SortName,
  Comment,
  PostReview,
  UserData,
} from '../types/types';
import { ApiRoute, AppRoutes, AuthorizationStatus, FavoriteAuth, HttpCode } from '../const';
import { AxiosError, AxiosInstance } from 'axios';

export const setCity = createAction<CityName>('city/set');

export const fetchOffersAction = createAsyncThunk<
  Offer[],
  undefined,
  { extra: AxiosInstance }
>('offers/fetch', async (_, { extra }) => {
  const { data } = await extra.get<Offer[]>(ApiRoute.Offers);
  return data;
});

export const fetchFavoritesAction = createAsyncThunk<
  Offer[],
  undefined,
  { extra: AxiosInstance }
>('favorites/load', async (_, { extra }) => {
  const { data } = await extra.get<Offer[]>(ApiRoute.Favorites);
  return data;
});

export const postFavoriteAction = createAsyncThunk<Offer, FavoriteAuth, { extra: AxiosInstance }>(
  'favorites/post',
  async ({ id, status }, { dispatch, extra }) => {
    try {
      const { data } = await extra.post<Offer>(`${ApiRoute.Favorites}/${id}/${status}`);

      return data;
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response?.status === HttpCode.NoAuth) {
        dispatch(redirectToRoute(AppRoutes.login));
      }

      return Promise.reject(error);
    }
  });

export const fetchOfferAction = createAsyncThunk<
  Offer,
  Offer['id'],
  {
    extra: AxiosInstance;
  }
>('current-offer/fetch', async (id, { dispatch, extra }) => {
  try {
    const { data } = await extra.get<Offer>(`${ApiRoute.Offers}/${id}`);
    return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response?.status === HttpCode.NotFound) {
      dispatch(redirectToRoute(AppRoutes.NotFound));
    }
    return Promise.reject(error);
  }
});

export const setSorting = createAction<SortName>('sorting/set');
export const loadReviews = createAction<Comment[]>('reviews/load');
export const postReview = createAction<PostReview>('review/post');
export const loadNearByOffers = createAction<Offer[]>('current-offer/nearBy');

export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);
export const loadUserData = createAction<UserData | null>('user/loadUserData');

export const setError = createAction<string | null>('page/setError');
export const redirectToRoute = createAction<AppRoutes>('app/redirectToRoute');
