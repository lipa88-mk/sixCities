import { createSelector } from '@reduxjs/toolkit';
import { StoreSlice, SortingFunctions } from '../../const';
import {State} from '../../types/state';
import { Offer, Comment} from '../../types/types';
import { getCity, getSorting } from '../site-process/selectors';

export const getIsOffersLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isOffersLoading;
export const getOffers = ({ [StoreSlice.SiteData]: SITE_DATA}: State): Offer[] => SITE_DATA.offers;

export const getIsFavoriteOffersLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isFavoritesLoading;
export const getFavoriteOffers = ({ [StoreSlice.SiteData]: SITE_DATA}: State): Offer[] => SITE_DATA.favorites;

export const getIsOfferLoading = ({ [StoreSlice.SiteData]: SITE_DATA }: State): boolean => SITE_DATA.isCurrentOfferLoading;
export const getOffer = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Offer | null => SITE_DATA.currentOffer;

export const getNearbyOffers = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Offer[] => SITE_DATA.nearByOffers;
export const getComments = ({ [StoreSlice.SiteData]: SITE_DATA }: State): Comment[] => SITE_DATA.reviews;

export const selectOffers = createSelector(
  [getOffers, getCity, getSorting],
  (offers, city, sorting) => offers.filter((offer) => offer.city.name === city.name).sort(SortingFunctions[sorting])
);
