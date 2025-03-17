import { store } from '../store';

import type { CityPlacement, Offer, SortName, User, Comment } from './types';
import { AuthorizationStatus } from '../const';

export type SiteData = {
  offers: Offer[];
  isOffersLoading: boolean;

  //     offer: Offer | null;
  //     isOfferLoading: boolean;
  currentOffer: Offer | null;
  isCurrentOfferLoading: boolean;

  //     comments: Comment[];
  reviews: Comment[];

  nearByOffers: Offer[];

  //     favoriteOffers: Offer[];
  //     isFavoriteOffersLoading: boolean;
  favorites: Offer[];
  isFavoritesLoading: boolean;
};

export type SiteProcess = {
  city: CityPlacement;
  sorting: SortName;
  error: string | null;
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  user: User;
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
