import { createAction } from '@reduxjs/toolkit';

import type { CityName, Offer } from '../types/types';

export const Action = {
  SET_CITY: 'city/set',
  SET_OFFERS: 'offers/set'
};

export const setCity = createAction<CityName>(Action.SET_CITY);
export const setOffers = createAction<Offer[]>(Action.SET_OFFERS);
