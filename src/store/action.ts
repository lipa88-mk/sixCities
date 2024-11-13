import { createAction } from '@reduxjs/toolkit';
import type { CityName, Offer, SortName, Comment } from '../types/types';
import { AuthorizationStatus } from '../const';

export const setCity = createAction<CityName>('city/set');

export const loadOffers = createAction<Offer[]>('offers/load');
export const setOffersloading = createAction<boolean>('offers/setStatus');

export const loadCurrentOffer = createAction<Offer>('current-offer/load');
export const setCurrentOfferLoading = createAction<boolean>('current-offe/setStatus');

export const setSorting = createAction<SortName>('sorting/set');
export const loadReviews = createAction<Comment[]>('reviews/load');
export const loadNearByOffers = createAction<Offer[]>('current-offer/near-by');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('page/setError');
export const setUserEmail = createAction<string | null>('user/setEmail');
