export enum AppRoutes {
  login = '/login',
  favorites = '/favorites',
  offer = '/offer',
  root = '/',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'] as const;

export const URL_MARKER_DEFAULT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg';
export const URL_MARKER_CURRENT =
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg';

export const Settings = {
  STAR_RATING_MAX: 5,
  LOCATIONS_LIST: [
    'Paris',
    'Cologne',
    'Brussels',
    'Amsterdam',
    'Hamburg',
    'Dusseldorf',
  ],
  // locations: [
  //   { city: 'Paris', offers: 1 },
  //   { city: 'Cologne', offers: 2 },
  //   { city: 'Brussels', offers: 5 },
  //   { city: 'Amsterdam', offers: 3 },
  //   { city: 'Hamburg', offers: 0 },
  //   { city: 'Dusseldorf', offers: 4 },
  // ],
};
