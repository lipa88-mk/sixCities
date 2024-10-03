import { createAction } from '@reduxjs/toolkit';

import type { CityName, Offer, SortName, Comment } from '../types/types';

export const Action = {
  SET_CITY: 'city/set',
  SET_OFFERS: 'offers/set',
  SET_SORTING: 'sorting/set',
  SET_REVIEWS: 'reviews/set',
};

export const setCity = createAction<CityName>(Action.SET_CITY);
export const setOffers = createAction<Offer[]>(Action.SET_OFFERS);
export const setSorting = createAction<SortName>(Action.SET_SORTING);
export const setReviews = createAction<Comment[]>(Action.SET_REVIEWS);
