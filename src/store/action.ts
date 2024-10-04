import { createAction } from '@reduxjs/toolkit';
import type { CityName, Offer, SortName, Comment } from '../types/types';
import { AuthorizationStatus } from '../const';

export const setCity = createAction<CityName>('city/set');
export const loadOffers = createAction<Offer[]>('offers/load');
export const setSorting = createAction<SortName>('sorting/set');
export const setReviews = createAction<Comment[]>('reviews/set');
export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');
export const setError = createAction<string | null>('game/setError');
