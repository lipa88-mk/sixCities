import { AuthorizationStatus, StoreSlice } from '../../const';
import { State } from '../../types/state';
import { User } from '../../types/types';

export const getAuthorizationStatus = ({ [StoreSlice.UserProcess]: USER_PROCESS }: State): AuthorizationStatus => USER_PROCESS.authorizationStatus;
export const getUser = ({ [StoreSlice.UserProcess]: USER_PROCESS }: State): User | null => USER_PROCESS.user;
