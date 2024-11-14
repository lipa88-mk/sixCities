import { cities, Sorting } from '../const';

type OfferType = 'apartment' | 'room' | 'house' | 'hotel';

export type CityName = typeof cities[number];

export type Offer = {
  id: number;
  title: string;
  type: OfferType;
  price: number;
  rating: number;
  isPremium: boolean;
  isFavorite: boolean;
  previewImage: string;
  city: CityPlacement;
  location: Location;
  bedrooms: number;
  description: string;
  goods: string[];
  host: {
    avatarUrl: string;
    id: number;
    isPro: boolean;
    name: string;
  };
  images: string[];
  maxAdults: number;
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

export type UserData = User & {
  email: string;
  token: string;
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
}

// Sorting

export type SortName = keyof typeof Sorting;
