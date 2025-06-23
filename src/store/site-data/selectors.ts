import { StoreSlice } from "../../const";
import { State } from "../../types/state";
import { Offer, Comment } from "../../types/types";

export const getComments = ({
  [StoreSlice.SiteData]: SITE_DATA,
}: State): Comment[] => SITE_DATA.reviews;
