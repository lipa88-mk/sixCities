import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import type {
  Offer,
  Comment,
  PostReview,
  User,
  AuthData,
} from '../types/types';
import {
  ApiRoute,
  AppRoutes,
  FavoriteAuth,
  HttpCode,
  TIMEOUT_SHOW_ERROR,
} from '../const';
import { AxiosError, AxiosInstance } from 'axios';
import { dropToken, saveToken } from '../services/token';
import { setError } from './site-process/site-process';

// User process:
export const checkAuthAction = createAsyncThunk<
  User,
  undefined,
  { extra: AxiosInstance }
>('user/checkAuth', async (_, { extra }) => {
  const { data } = await extra.get<User>(ApiRoute.LogIn);
  return data;
});

export const loginAction = createAsyncThunk<
  User,
  AuthData,
  { extra: AxiosInstance }
>('user/login', async ({ login: email, password }, { extra: api }) => {
  const { data } = await api.post<User>(ApiRoute.LogIn, {
    email,
    password,
  });
  saveToken(data.token);
  window.history.back();
  return data;

});

export const logoutAction = createAsyncThunk<
  void,
  undefined,
  { extra: AxiosInstance }
>('user/logout', async (_arg, { extra: api }) => {
  await api.delete(ApiRoute.LogOut);
  dropToken();
});

// Site process:
export const clearErrorAction = createAsyncThunk<
  void,
  undefined,
  { extra: AxiosInstance }
>('page/clearError', (_, { dispatch }) => {
  setTimeout(() => dispatch(setError('')), TIMEOUT_SHOW_ERROR);
});

// Site Data:
export const fetchCommentsAction = createAsyncThunk<
  Comment[],
  Offer['id'],
  { extra: AxiosInstance }
>('current-offer/comments', async (id, { extra }) => {
  const { data } = await extra.get<Comment[]>(`${ApiRoute.Comments}/${id}`);
  return data;
});

export const postCommentAction = createAsyncThunk<
  Comment[],
  PostReview,
  {
    extra: AxiosInstance;
  }
>('post/review', async ({ id, comment, rating }, { extra }) => {
  const { data } = await extra.post<Comment[]>(`${ApiRoute.Comments}/${id}`, {
    comment,
    rating,
  });
  return data;
});

export const redirectToRoute = createAction<AppRoutes>('app/redirectToRoute');
