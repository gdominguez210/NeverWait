import * as APIUtil from "../util/restaurant_api_util";

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";
export const REMOVE_RESTAURANT = "REMOVE_RESTAURANT";
export const RECEIVE_RESTAURANT_ERRORS = "RECEIVE_RESTAURANT_ERRORS";
export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";

export const receiveRestaurants = payload => {
  return {
    type: RECEIVE_RESTAURANTS,
    restaurants: payload.restaurants,
    search: payload.search
  };
};
export const receiveErrors = errors => {
  return {
    type: RECEIVE_RESTAURANT_ERRORS,
    errors
  };
};
export const receiveRestaurant = payload => {
  return {
    type: RECEIVE_RESTAURANT,
    restaurant: payload.restaurant,
    reviews: payload.reviews,
    users: payload.users,
    favorites: payload.favorites
  };
};

export const receiveSearchResults = data => ({
  type: RECEIVE_SEARCH_RESULTS,
  query: data.query,
  res: data.res
});
export const removeRestaurant = restaurantId => ({
  type: REMOVE_RESTAURANT,
  restaurantId
});

export const fetchSearchedRestaurants = data => dispatch => {
  return APIUtil.fetchSearchedRestaurants(data).then(restaurants =>
    dispatch(receiveRestaurants(restaurants))
  );
};

export const fetchRestaurants = () => dispatch => {
  return APIUtil.fetchRestaurants()
    .then(restaurants => dispatch(receiveRestaurants(restaurants)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));
};

export const fetchFeaturedRestaurants = () => dispatch =>
  APIUtil.fetchFeaturedRestaurants()
    .then(restaurants => dispatch(receiveRestaurants(restaurants)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

export const fetchRestaurant = id => dispatch =>
  APIUtil.fetchRestaurant(id)
    .then(restaurant => dispatch(receiveRestaurant(restaurant)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

export const createRestaurant = restaurant => dispatch =>
  APIUtil.createRestaurant(restaurant)
    .then(restaurant => dispatch(receiveRestaurant(restaurant)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

export const updateRestaurant = restaurant => dispatch =>
  APIUtil.updateRestaurant(restaurant)
    .then(restaurant => dispatch(receiveRestaurant(restaurant)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

export const deleteRestaurant = restaurantId => dispatch =>
  APIUtil.deleteRestaurant(restaurantId)
    .then(restaurant => dispatch(removeRestaurant(restaurantId)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));
