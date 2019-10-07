import * as APIUtil from "../util/restaurant_api_util";

export const RECEIVE_RESTAURANTS = "RECEIVE_RESTAURANTS";
export const RECEIVE_RESTAURANT = "RECEIVE_RESTAURANT";
export const REMOVE_RESTAURANT = "REMOVE_RESTAURANT";
export const RECEIVE_RESTAURANT_ERRORS = "RECEIVE_RESTAURANT_ERRORS";

export const receiveRestaurants = restaurants => ({
  type: RECEIVE_RESTAURANTS,
  restaurants
});
export const receiveErrors = errors => {
  debugger;
  return {
    type: RECEIVE_RESTAURANT_ERRORS,
    errors
  };
};
export const receiveRestaurant = restaurant => ({
  type: RECEIVE_RESTAURANT,
  restaurant
});

export const removeRestaurant = restaurantId => ({
  type: REMOVE_RESTAURANT,
  restaurantId
});

export const fetchRestaurants = () => dispatch =>
  APIUtil.fetchRestaurants()
    .then(restaurants => dispatch(receiveRestaurants(restaurants)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

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
