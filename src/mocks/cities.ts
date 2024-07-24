import type { City } from '../types/types';

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CityPlacement = {
  name: City;
  location: Location;
}
