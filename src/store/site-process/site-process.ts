import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Sorting, StoreSlice } from '../../const';
import { SiteProcess } from '../../types/state';
import { SortName } from '../../types/types';

const initialState: SiteProcess = {
  sorting: Sorting.Popular,
  error: null,
};

export const siteProcess = createSlice({
  name: StoreSlice.SiteProcess,
  initialState,
  reducers: {
    setSorting: (state, action: PayloadAction<SortName>) => {
      state.sorting = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setSorting, setError } = siteProcess.actions;
