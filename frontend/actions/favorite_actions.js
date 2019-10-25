import * as ApiUtil from "../util/favorite_api_util";

export const RECEIVE_FAVORITE = "RECEIVE_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";
export const RECEIVE_FAVORITES = "RECEIVE_FAVORITES";

const receiveFavorite = favorite => ({
  type: RECEIVE_FAVORITE,
  favorite
});

const removeFavorite = (favoriteId, restaurantId) => ({
  type: REMOVE_FAVORITE,
  favoriteId,
  restaurantId
});

const receiveFavorites = favorites => ({
  type: RECEIVE_FAVORITES,
  favorites
});

export const createFavorite = favorite => dispatch =>
  ApiUtil.createFavorite(favorite).then(favorite =>
    dispatch(receiveFavorite(favorite))
  );
// .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

export const fetchFavorites = userId => dispatch => {
  return ApiUtil.fetchFavorites(userId).then(favorites => {
    return dispatch(receiveFavorites(favorites));
  });
};

export const deleteFavorite = (favoriteId, restaurantId) => dispatch => {
  return ApiUtil.deleteFavorite(favoriteId, restaurantId).then(favorite => {
    return dispatch(removeFavorite(favoriteId, restaurantId));
  });
};
