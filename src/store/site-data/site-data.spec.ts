import { siteData } from "./site-data";
import {
  fetchCommentsAction,
  postCommentAction,
} from "../action";
import { SiteData } from "../../types/state";
import { User, Comment } from "../../types/types";

const initialState: SiteData = {
  reviews: [],
};

const fetchedUser: User = {
  id: 1,
  name: "User",
  avatarUrl: "img/user-1.jpg",
  isPro: false,
  email: "qwe@gmail.com",
  token: "qwe",
};

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

    };
    expect(
      siteData.reducer(state, {
        type: fetchCommentsAction.fulfilled.type,
        payload: fetchedComments,
      })
    ).toEqual({
      reviews: fetchedComments,
    });
  });

  it("should post review", () => {
    const state = {
      reviews: [],
    };
    expect(
      siteData.reducer(state, {
        type: postCommentAction.fulfilled.type,
        payload: fetchedComments,
      })
    ).toEqual({
      reviews: fetchedComments,
    });
  });
});
