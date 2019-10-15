import * as ApiUtil from "../util/review_api_util";

export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const RECEIVE_FAVORITES = "RECEIVE_FAVORITES";

const receiveFavorite = favorite => ({
  type: RECEIVE_FAVORITE,
  favorite
});

const removeFavorite = favoriteId => ({
  type: REMOVE_FAVORITE,
  favoriteId
});

const receiveFavorites = userId => ({
  type: RECEIVE_FAVORITES,
  userId
});
