import type { Offer } from '../types/types';
import { CityCenter } from '../const';

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
    city: {
      name: 'Paris',
      location: CityCenter['Paris'],
    },
    location: CityCenter['Paris'],
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
    city: {
      name: 'Paris',
      location: CityCenter['Paris']
    },
    location: CityCenter['Paris']
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
    city: {
      name: 'Cologne',
      location: CityCenter['Cologne']
    },
    location: CityCenter['Cologne']
  },
  {
    id: 1003,
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 180,
    rating: 2,
    isPremium: true,
    isFavorite: false,
    previewImage: 'img/apartment-02.jpg',
    city: {
      name: 'Paris',
      location: CityCenter['Paris']
    },
    location: CityCenter['Paris']
  },
];
