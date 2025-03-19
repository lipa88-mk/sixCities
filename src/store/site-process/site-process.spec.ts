import type { SortName } from '../../types/types';

import { siteProcess, setCity, setSorting, setError } from './site-process';
import { cities, CityCenter, Sorting } from '../../const';
import { SiteProcess } from '../../types/state';

describe('Reducer: siteProcess', () => {

  const initialState: SiteProcess = {
    city: {
      name: cities[0],
      location: CityCenter[cities[0]],
    },
    sorting: Sorting.Popular,
    error: null,
  };

  it('without additional parameters should return initial state', () => {
    expect(siteProcess.reducer(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual(initialState);
  });

  it('should set city by a given name', () => {
    const state = initialState;

    expect(siteProcess.reducer(state, setCity(cities[1])))
      .toEqual({
        city: {
          name: cities[1],
          location: CityCenter[cities[1]],
        },
        sorting: Sorting.Popular,
        error: null,
      });
  });

  it('should set sorting by a given name', () => {
    const state = initialState;

    expect(siteProcess.reducer(state, setSorting(Object.keys(Sorting)[1] as SortName)))
      .toEqual({
        city: {
          name: cities[0],
          location: CityCenter[cities[0]],
        },
        sorting: Object.keys(Sorting)[1],
        error: null,
      });
  });

  it('should set error by a given name', () => {
    const state = initialState;

    expect(siteProcess.reducer(state, setError('some error')))
      .toEqual({
        city: {
          name: cities[0],
          location: CityCenter[cities[0]],
        },
        sorting: Sorting.Popular,
        error: 'some error',
      });
  });
});
