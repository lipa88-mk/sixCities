import { createAsyncThunk } from '@reduxjs/toolkit';
import { ApiRoute, TIMEOUT_SHOW_ERROR } from '../const';
import {
  checkAuthAction,
  setError
} from './action';
import { store } from './';
import { AuthData, UserData } from '../types/types';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { saveToken, dropToken } from '../services/token';

export const clearErrorAction = createAsyncThunk('page/clearError', () => {
  setTimeout(() => store.dispatch(setError(null)), TIMEOUT_SHOW_ERROR);
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
    const { data } = await api.post<UserData>(ApiRoute.LogIn, {
      email,
      password,
    });
    saveToken(data.token);
    dispatch(checkAuthAction());
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
  dispatch(checkAuthAction());
});
