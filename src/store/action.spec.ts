import type { Action } from 'redux';
import type { State } from '../types/state';
import thunk, { ThunkDispatch } from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { api } from '.';
import { ApiRoute } from '../const';
import { checkAuthAction, loginAction } from './action';
import { User } from '../types/types';

describe('Async actions', () => {
  const mockAPI = new MockAdapter(api);
  const middlewares = [thunk.withExtraArgument(api)];
  const mockStore = configureMockStore<
    State,
    Action,
    ThunkDispatch<State, typeof api, Action>
  >(middlewares);

  it('checkAuthAction should be fullfilled when server returns 200', async () => {
    const store = mockStore();
    const fetchedUser: User = {
      id: 1,
      name: 'User',
      avatarUrl: '/img/1.png',
      isPro: false,
      email: 'email@mail.com',
      token: 'qwe',
    };
    mockAPI.onGet(ApiRoute.LogIn).reply(200, fetchedUser);
    expect(store.getActions()).toEqual([]);
    await store.dispatch(checkAuthAction());
    const actions = store.getActions().map(({ type }) => type as string);
    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.fulfilled.type,
    ]);
  });

  it('checkAuthAction should be rejected when server returns 401', async () => {
    const store = mockStore();
    mockAPI.onGet(ApiRoute.LogIn).reply(401, {});
    expect(store.getActions()).toEqual([]);

    await store.dispatch(checkAuthAction());
    const actions = store.getActions().map(({ type }) => type as string);
    expect(actions).toEqual([
      checkAuthAction.pending.type,
      checkAuthAction.rejected.type,
    ]);
  });

  it('loginAction should be fullfilled when server returns 200', async () => {
    const store = mockStore();
    const authData = { login: 'qwe@qwe.com', password: 'qwe' };
    mockAPI.onPost(ApiRoute.LogIn).reply(200, authData);
    expect(store.getActions()).toEqual([]);
    await store.dispatch(loginAction(authData));
    const actions = store.getActions().map(({ type }) => type as string);
    expect(actions).toEqual([
      loginAction.pending.type,
      loginAction.fulfilled.type,
    ]);
  });

  it('loginAction should be rejected when server returns 401', async () => {
    const store = mockStore();
    const authData = { login: 'qwe@qwe.com', password: 'qwe' };
    mockAPI.onPost(ApiRoute.LogIn).reply(401, {});
    expect(store.getActions()).toEqual([]);

    await store.dispatch(loginAction(authData));
    const actions = store.getActions().map(({ type }) => type as string);
    expect(actions).toEqual([
      loginAction.pending.type,
      loginAction.rejected.type,
    ]);
  });

});
