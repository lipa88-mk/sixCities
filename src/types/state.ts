import { store } from '../store';

import type { CityPlacement, Offer, SortName, User, Comment } from './types';
import { AuthorizationStatus } from '../const';

export type SiteData = {
  reviews: Comment[];
};

export type SiteProcess = {
  city: CityPlacement;
  sorting: SortName;
  error: string | null;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: User | null;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
