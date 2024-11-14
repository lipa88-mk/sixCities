import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { AuthData, Offer, UserData, Comment, PostReview } from '../types/types';
import { ApiRoute, AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import {
  loadCurrentOffer,
  loadNearByOffers,
  loadOffers,
  loadReviews,
  loadUserData,
  requireAuthorization,
  setCurrentOfferLoading,
  setError,
  setOffersloading,
} from './action';
import { AppDispatch, State } from '../types/state';
import { dropToken, saveToken } from '../services/token';
import { store } from './';

export const clearErrorAction = createAsyncThunk('page/clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
});

export const fetchOffersAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('offers/fetch', async (_arg, { dispatch, extra: api }) => {
  const { data } = await api.get<Offer[]>(ApiRoute.Offers);
  dispatch(setOffersloading(true));
  dispatch(loadOffers(data));
  dispatch(setOffersloading(false));
});

export const fetchOfferAction = createAsyncThunk<
  void,
  Offer['id'],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('current-offer/fetch', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<Offer>(`${ApiRoute.Offers}/${id}`);
  dispatch(setCurrentOfferLoading(true));
  dispatch(loadCurrentOffer(data));
  dispatch(setCurrentOfferLoading(false));
});

export const fetchCommentsAction = createAsyncThunk<
  void,
  Offer['id'],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('current-offer/comments', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<Comment[]>(`${ApiRoute.Comments}/${id}`);
  dispatch(loadReviews(data));
});

export const postCommentAction = createAsyncThunk<
  void,
  PostReview,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('post/review', async ({ id, comment, rating }, { dispatch, extra: api }) => {
  const { data } = await api.post<Comment[]>(`${ApiRoute.Comments}/${id}`, {
    comment,
    rating,
  });
  dispatch(loadReviews(data));
});

export const fetchNearByOffersAction = createAsyncThunk<
  void,
  Offer['id'],
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('current-offer/near-by', async (id, { dispatch, extra: api }) => {
  const { data } = await api.get<Offer[]>(`${ApiRoute.Offers}/${id}/nearby`);
  dispatch(loadNearByOffers(data));
});

export const checkAuthAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuth', async (_arg, { dispatch, extra: api }) => {
  try {
    const {
      data
    } = await api.get<UserData>(ApiRoute.LogIn);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(loadUserData(data));
  } catch {
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(loadUserData(null));
  }
});

export const loginAction = createAsyncThunk<
  void,
  AuthData,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'user/login',
  async ({ login: email, password }, { dispatch, extra: api }) => {
    const {
      data
    } = await api.post<UserData>(ApiRoute.LogIn, { email, password });
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(loadUserData(data));
    window.history.back();
  }
);

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(ApiRoute.LogOut);
  dropToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  dispatch(loadUserData(null));
});
