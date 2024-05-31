import type {Offer} from '../types/offers';

export const offers: Offer[] = [
  {
    id: 1000,
    description: 'Wood and stone place',
    type: 'Private room',
    price: 80,
    rating: 4,
    isPremium: false
  },
  {
    id: 1001,
    description: 'Beautiful & luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
    rating: 5,
    isPremium: true
  },
  {
    id: 1002,
    description: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
    rating: 4,
    isPremium: false
  },
  {
    id: 1003,
    description: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
    rating: 5,
    isPremium: true
  },
];
