import { siteData } from "./site-data";

import {
  fetchCommentsAction,
  fetchFavoritesAction,
  postFavoriteAction,
  postCommentAction,
} from "../action";
import { SiteData } from "../../types/state";
import { Offer, User, Comment } from "../../types/types";
import { cities, CityCenter } from "../../const";

const initialState: SiteData = {
  reviews: [],
  favorites: [],
  isFavoritesLoading: false,
};

const fetchedUser: User = {
  id: 1,
  name: "User",
  avatarUrl: "img/user-1.jpg",
  isPro: false,
  email: "qwe@gmail.com",
  token: "qwe",
};

const fetchedOffers: Offer[] = [
  {
    id: 1,
    price: 120,
    rating: 4.0,
    title: "Offer 1",
    isPremium: true,
    isFavorite: false,
    city: {
      name: cities[0],
      location: CityCenter[cities[0]],
    },
    location: CityCenter[cities[0]],
    previewImage: "img/1.jpg",
    description: "Nice house",
    type: "hotel",
    goods: ["dish washer", "wi-fi"],
    bedrooms: 2,
    host: fetchedUser,
    maxAdults: 3,
    images: ["img/1.jpg", "img/2.jpg", "img/3.jpg"],
  },
];

const fetchedComments: Comment[] = [
  {
    id: 1,
    comment: "Hello!",
    date: "11-10-2017",
    rating: 1.0,
    user: fetchedUser,
  },
];

describe("Reducer: siteData", () => {
  it("without additional parameters should return initial state", () => {
    expect(siteData.reducer(void 0, { type: "UNKNOWN_ACTION" })).toEqual(
      initialState
    );
  });

  it("should fetch reviews for current offer", () => {
    const state = {
      reviews: [],
      favorites: [],
      isFavoritesLoading: false,
    };
    expect(
      siteData.reducer(state, {
        type: fetchCommentsAction.fulfilled.type,
        payload: fetchedComments,
      })
    ).toEqual({
      offers: [],
      isOffersLoading: false,

      reviews: fetchedComments,
      favorites: [],
      isFavoritesLoading: false,
    });
  });

  it("should post review", () => {
    const state = {
      offers: [],
      isOffersLoading: false,

      reviews: [],
      favorites: [],
      isFavoritesLoading: false,
    };
    expect(
      siteData.reducer(state, {
        type: postCommentAction.fulfilled.type,
        payload: fetchedComments,
      })
    ).toEqual({
      offers: [],
      isOffersLoading: false,

      reviews: fetchedComments,
      favorites: [],
      isFavoritesLoading: false,
    });
  });

  it("should fetch favorite offers", () => {
    const state = initialState;

    expect(
      siteData.reducer(state, { type: fetchFavoritesAction.pending.type })
    ).toEqual({
      reviews: [],
      favorites: [],
      isFavoritesLoading: true,
    });
    expect(
      siteData.reducer(state, {
        type: fetchFavoritesAction.fulfilled.type,
        payload: fetchedOffers,
      })
    ).toEqual({
      reviews: [],
      favorites: fetchedOffers,
      isFavoritesLoading: false,
    });
    expect(
      siteData.reducer(state, { type: fetchFavoritesAction.rejected.type })
    ).toEqual(initialState);
  });

  it("should post to favorites", () => {
    const state: SiteData = {
      reviews: [],
      favorites: [],
      isFavoritesLoading: false,
    };

    expect(
      siteData.reducer(state, {
        type: postFavoriteAction.fulfilled.type,
        payload: { ...fetchedOffers[0], isFavorite: true },
      })
    ).toEqual({
      favorites: [{ ...fetchedOffers[0], isFavorite: true }],
      reviews: [],
      isFavoritesLoading: false,
    });

    expect(
      siteData.reducer(state, {
        type: postFavoriteAction.fulfilled.type,
        payload: { ...fetchedOffers[0], isFavorite: false },
      })
    ).toEqual({
      favorites: [],
      reviews: [],
      isFavoritesLoading: false,
    });
  });
});
