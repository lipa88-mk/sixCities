import { useCallback } from 'react';
import { cities } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { CityName } from '../../types/types';
import { City } from '../city/city';
import { getCity } from '../../store/site-process/selectors';
import { setCity } from '../../store/site-process/site-process';

export const CitiesList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const activeCity = useAppSelector(getCity);

  const handleCityClick = useCallback((name: CityName) => {
    dispatch(setCity(name));
  }, [dispatch]);

  return (
    <ul className="locations__list tabs__list">
      {cities.map((city) => (
        <City key={city} name={city} isActive={city === activeCity.name} onClick={handleCityClick} />
      ))}
    </ul>
  );
};

