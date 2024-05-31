export type OfferType = 'apartment' | 'room' | 'house' | 'hotel';

export type Offer = {
  id: number;
  title: string;
  type: OfferType;
  price: number;
  rating: number;
  isPremium: boolean;
  isFavorite: boolean;
  previewImage: string;
}

