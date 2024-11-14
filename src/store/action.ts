import { createAction } from '@reduxjs/toolkit';
import type { CityName, Offer, SortName, Comment, PostReview, UserData } from '../types/types';
import { AppRoutes, AuthorizationStatus } from '../const';

export const setCity = createAction<CityName>('city/set');

export const loadOffers = createAction<Offer[]>('offers/load');
export const setOffersloading = createAction<boolean>('offers/setStatus');

export const loadCurrentOffer = createAction<Offer>('current-offer/load');
export const setCurrentOfferLoading = createAction<boolean>('current-offe/setStatus');

export const setSorting = createAction<SortName>('sorting/set');
export const loadReviews = createAction<Comment[]>('reviews/load');
export const postReview = createAction<PostReview>('review/post');
export const loadNearByOffers = createAction<Offer[]>('current-offer/nearBy');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const loadUserData = createAction<UserData | null>('user/loadUserData');

export const setError = createAction<string | null>('page/setError');
export const redirectToRoute = createAction<AppRoutes>('app/redirectToRoute');
