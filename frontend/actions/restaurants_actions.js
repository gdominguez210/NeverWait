import * as APIUtil from '../util/restaurant_api_util';

export const RECEIVE_RESTAURANTS = 'RECEIVE_RESTAURANTS';
export const RECEIVE_RESTAURANT = 'RECEIVE_RESTAURANT';
export const REMOVE_RESTAURANT = 'REMOVE_RESTAURANT';


export const receiveRestaurants = restaurants =>  ({
    type: RECEIVE_RESTAURANTS,
    restaurants
})

export const receiveRestaurant = restaurant => ({
    type: RECEIVE_RESTAURANT,
    restaurant
})

export const removeRestaurant = restaurantId => ({
    type: RECEIVE_RESTAURANT,
    restaurantId
})

export const fetchRestaurants = () => dispatch => {
    debugger
    return APIUtil.fetchRestaurants().then(restaurants => dispatch(receiveRestaurants(restaurants)))
}

export const fetchRestaurant = (id) => dispatch => (
    APIUtil.fetchRestaurant(id).then(restaurant => dispatch(receiveRestaurant(restaurant)))
)

export const createRestaurant = (restaurant) => dispatch => (
    APIUtil.createRestaurant(restaurant).then(restaurant => dispatch(receiveRestaurant(restaurant)))
)

export const updateRestaurant = (restaurant) => dispatch => (
    APIUtil.updateRestaurant(restaurant).then(restaurant => dispatch(receiveRestaurant(restaurant)))
)

export const deleteRestaurant = (restaurantId) => dispatch => (
    APIUtil.deleteRestaurant(restaurantId).then(restaurant => dispatch(removeRestaurant(restaurantId)))
)

