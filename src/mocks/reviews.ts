import type { Comment } from '../types/types';

export const reviews: Comment[] = [
  {
    id: 1,
    date: '2034-11-24',
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    rating: 3.6,
    user: {
      id: 1,
      name: 'Max',
      avatarURL: 'img/avatar-max.jpg',
      isPro: false,
    },
  },
  {
    id: 2,
    date: '2019-04-24',
    comment: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century. A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    rating: 3.7,
    user: {
      id: 2,
      name: 'Angelina',
      avatarURL: 'img/avatar-angelina.jpg',
      isPro: true,
    },
  },
];
