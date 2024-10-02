import { createAction } from '@reduxjs/toolkit';

import type { CityName, Offer, SortName } from '../types/types';

export const Action = {
  SET_CITY: 'city/set',
  SET_OFFERS: 'offers/set',
  SET_SORTING: 'sorting/set',
};

export const setCity = createAction<CityName>(Action.SET_CITY);
export const setOffers = createAction<Offer[]>(Action.SET_OFFERS);
export const setSorting = createAction<SortName>(Action.SET_SORTING);
