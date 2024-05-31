import type {Offer} from '../types/offers';

export const offers: Offer[] = [
  {
    id: 1000,
    title: 'Wood and stone place',
    type: 'room',
    price: 80,
    rating: 3.5,
    isPremium: false,
    isFavorite: true,
    previewImage: 'img/apartment-01.jpg',
    city: 'Amsterdam',
  },
  {
    id: 1001,
    title: 'Beautiful & luxurious apartment at great location',
    type: 'apartment',
    price: 120,
    rating: 5,
    isPremium: true,
    isFavorite: true,
    previewImage: 'img/apartment-03.jpg',
    city: 'Brussels',
  },
  {
    id: 1002,
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 132,
    rating: 4,
    isPremium: false,
    isFavorite: true,
    previewImage: 'img/apartment-01.jpg',
    city: 'Amsterdam',
  },
  {
    id: 1003,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    rating: 5,
    isPremium: true,
    isFavorite: true,
    previewImage: 'img/apartment-02.jpg',
    city: 'Paris'
  },
];
