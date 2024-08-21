import { cities } from '../const';

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
  city: CityName;
  location: Location;
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

// comments

export type Comment = {
  id: number;
  date: string;
  comment: string;
  rating: number;
  user: User;
}

export type User= {
  id: number;
  name: string;
  avatarURL: string;
  isPro: boolean;
}
