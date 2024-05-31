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

export const Settings = {
  LOCATIONS_LIST: [
    'Paris',
    'Cologne',
    'Brussels',
    'Amsterdam',
    'Hamburg',
    'Dusseldorf',
  ],
  locations: [
    { city: 'Paris', offers: 1 },
    { city: 'Cologne', offers: 2 },
    { city: 'Brussels', offers: 5 },
    { city: 'Amsterdam', offers: 3 },
    { city: 'Hamburg', offers: 0 },
    { city: 'Dusseldorf', offers: 4 },
  ],
};
