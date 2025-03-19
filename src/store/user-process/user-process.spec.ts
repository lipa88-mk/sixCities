import { userProcess } from './user-process';
import { AuthorizationStatus } from '../../const';
import { checkAuthAction, loginAction, logoutAction } from '../action';
import { UserProcess } from '../../types/state';
import { User } from '../../types/types';

const fetchedUser: User = {
  id: 1,
  name: 'User',
  avatarUrl: 'http://null.com',
  isPro: false,
  email: 'abc123@gmail.com',
  token: 'qwe',
};

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
};

describe('Reducer: userProcess', () => {
  it('without additional parameters should return initial state', () => {
    expect(userProcess.reducer(void 0, { type: 'UNKNOWN_ACTION' })).toEqual(
      initialState
    );
  });

  it('should fetch authorization status', () => {
    const state = initialState;

    expect(
      userProcess.reducer(state, { type: checkAuthAction.rejected.type })
    ).toEqual({
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: null,
    });

    expect(
      userProcess.reducer(state, {
        type: checkAuthAction.fulfilled.type,
        payload: fetchedUser,
      })
    ).toEqual({
      authorizationStatus: AuthorizationStatus.Auth,
      user: fetchedUser,
    });
  });

  it('should login user', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: null,
    };

    expect(
      userProcess.reducer(state, {
        type: loginAction.fulfilled.type,
        payload: fetchedUser,
      })
    ).toEqual({
      authorizationStatus: AuthorizationStatus.Auth,
      user: fetchedUser,
    });

    expect(
      userProcess.reducer(state, { type: loginAction.rejected.type })
    ).toEqual({
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: null,
    });
  });

  it('should logiout user', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.Auth,
      user: fetchedUser,
    };

    expect(
      userProcess.reducer(state, {
        type: logoutAction.fulfilled.type
      })
    ).toEqual({
      authorizationStatus: AuthorizationStatus.NoAuth,
      user: null,
    });
  });
});
