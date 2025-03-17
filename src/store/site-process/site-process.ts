import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cities, CityCenter, Sorting, StoreSlice } from '../../const';
import { SiteProcess } from '../../types/state';
import { CityName, SortName } from '../../types/types';

const initialState: SiteProcess = {
  city: {
    name: cities[0],
    location: CityCenter[cities[0]],
  },
  sorting: Sorting.Popular,
  error: null,
};

export const siteProcess = createSlice({
  name: StoreSlice.SiteProcess,
  initialState,
  reducers: {
    setCity: (state, action: PayloadAction<CityName>) => {
      state.city = {
        name: action.payload,
        location: CityCenter[action.payload],
      };
    },
    setSorting: (state, action: PayloadAction<SortName>) => {
      state.sorting = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setCity, setSorting, setError } = siteProcess.actions;
