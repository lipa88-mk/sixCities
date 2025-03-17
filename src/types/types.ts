import { cities, Sorting } from '../const';

type OfferType = 'apartment' | 'room' | 'house' | 'hotel';

export type CityName = typeof cities[number];

export type Offer = {
  bedrooms: number;
  city: CityPlacement;
  description: string;
  goods: string[];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  id: number;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: string;
  price: number;
  rating: number;
  title: string;
  type: OfferType;
}

export type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CityPlacement = {
  name: CityName;
  location: Location;
}

// api
export type AuthData = {
  login: string;
  password: string;
};

// comments

export type Comment = {
  id: number;
  date: string;
  comment: string;
  rating: number;
  user: User;
}

export type PostReview = Pick<Comment, 'comment' | 'rating'> & Pick<Offer, 'id'>;

export type User= {
  id: number;
  name: string;
  avatarUrl: string;
  isPro: boolean;
  email: string;
  token: string;
}

// Sorting

export type SortName = keyof typeof Sorting;
