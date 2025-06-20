import { StoreSlice } from "../../const";
import { State } from "../../types/state";
import { Offer, Comment } from "../../types/types";

export const getIsFavoriteOffersLoading = ({
  [StoreSlice.SiteData]: SITE_DATA,
}: State): boolean => SITE_DATA.isFavoritesLoading;

export const getFavoriteOffers = ({
  [StoreSlice.SiteData]: SITE_DATA,
}: State): Offer[] => SITE_DATA.favorites;

export const getComments = ({
  [StoreSlice.SiteData]: SITE_DATA,
}: State): Comment[] => SITE_DATA.reviews;
