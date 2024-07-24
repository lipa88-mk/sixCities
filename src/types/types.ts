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
