import {StoreSlice} from '../../const';
import {State} from '../../types/state';
import { CityPlacement, SortName } from '../../types/types';

export const getCity = ({ [StoreSlice.SiteProcess]: SITE_PROCESS }: State): CityPlacement => SITE_PROCESS.city;
export const getSorting = ({ [StoreSlice.SiteProcess]: SITE_PROCESS }: State): SortName => SITE_PROCESS.sorting;
export const getError = ({ [StoreSlice.SiteProcess]: SITE_PROCESS }: State): string | null => SITE_PROCESS.error;
