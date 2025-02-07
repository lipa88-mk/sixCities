import { CityName, Location, Offer, SortName } from './types/types';

export enum AppRoutes {
  login = '/login',
  favorites = '/favorites',
  offer = '/offer',
  root = '/',
  NotFound = '/404'
}

export enum ApiRoute {
  Offers = '/hotels',
  Favorites = '/favorite',
  LogIn = '/login',
  LogOut = '/logout',
  Comments = '/comments'
}

export enum HttpCode {
  NotFound = 404,
  NoAuth = 401
}

export type FavoriteAuth = Pick<Offer, 'id'> & { status: 1 | 0 }

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum Sorting {
  Popular = 'Popular',
  PriseLowToHight = 'Price: low to high',
  PriseHightToLow = 'Price: high to low',
  Rating = 'Top rated first'
}

export const SortingFunctions: {
  [key in SortName]: (a: Offer, b: Offer) => number
} = {
  Popular: () => 0,
  PriseLowToHight: (a, b) => a.price - b.price,
  PriseHightToLow: (a, b) => b.price - a.price,
  Rating: (a, b) => b.rating - a.rating,
};

export const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] as const;

export const Settings = {
  STAR_RATING_MAX: 5,
  MIN_COMMENT_LENGTH: 50,
  MAX_COMMENT_LENGTH: 300,
  LOCATIONS_LIST: cities,
};

export const TIMEOUT_SHOW_ERROR = 5000;

export const URL_MARKER_DEFAULT = './img/pin.svg';
export const URL_MARKER_CURRENT = './img/pin-active.svg';

type CityLocation = {
  [key in CityName]: Location
}

export const CityCenter: CityLocation = {
  'Paris': {
    latitude: 48.85661,
    longitude: 2.351499,
    zoom: 10
  },
  'Cologne': {
    latitude: 50.938361,
    longitude: 6.959974,
    zoom: 10
  },
  'Brussels': {
    latitude: 50.846557,
    longitude: 4.351697,
    zoom: 10
  },
  'Amsterdam': {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 10
  },
  'Hamburg': {
    latitude: 53.550341,
    longitude: 10.000654,
    zoom: 10
  },
  'Dusseldorf': {
    latitude: 51.225402,
    longitude: 6.776314,
    zoom: 10
  },
};
