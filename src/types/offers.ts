export type OfferType = 'Private room' | 'Apartment';
export type Rating = 0 | 1 | 2| 3 | 4 | 5;

export type Offers = {
  id: number;
  description: string;
  type: OfferType;
  price: number;
  rating: Rating;
  isPremium: boolean;
}

