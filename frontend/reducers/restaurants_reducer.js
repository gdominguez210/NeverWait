import {
  RECEIVE_RESTAURANTS,
  RECEIVE_RESTAURANT,
  REMOVE_RESTAURANT
} from "../actions/restaurants_actions";
import { RECEIVE_REVIEW, REMOVE_REVIEW } from "../actions/review_actions";
import { RECEIVE_FAVORITE, REMOVE_FAVORITE } from "../actions/favorite_actions";
import {
  RECEIVE_RESERVATIONS,
  AVAILABLE_TIME_SLOTS
} from "../actions/reservation_actions";
const restaurantsReducer = (state = {}, action) => {
  Object.freeze(state);

  debugger;
  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      return action.restaurants;
    // case RECEIVE_RESTAURANT:
    //   return Object.assign({}, state, {
    //     [action.restaurant.id]: action.restaurant
    //   });
    case RECEIVE_RESTAURANT:
      return Object.assign(
        {},
        {
          [action.restaurant.id]: action.restaurant
        }
      );
    case AVAILABLE_TIME_SLOTS:
      let resState = Object.assign({}, state);
      resState[action.restaurant_id].available_openings =
        action.available_openings;
      resState[action.restaurant_id].receiveReservation = true;
      return resState;
    case RECEIVE_RESERVATIONS:
      return Object.assign({}, state, action.restaurants);
    case RECEIVE_REVIEW:
      let reviewState = Object.assign({}, state);
      reviewState[action.review.restaurant_id].review_ids.push(
        action.review.id
      );
      return reviewState;
    // case REMOVE_REVIEW:
    //   let removeState = Object.assign({}, state);
    //    ;
    //   let removeIdx = Object.values(removeState)[0].review_ids.indexOf(
    //     action.reviewId
    //   );
    //   delete Object.values(removeState)[0].review_ids[removeIdx];
    //   return removeState;
    case REMOVE_REVIEW:
      let removeState = Object.assign({}, state);
      let removeIdx = removeState[action.restaurantId].review_ids.indexOf(
        action.reviewId
      );
      delete removeState[action.restaurantId].review_ids[removeIdx];
      return removeState;
    case REMOVE_RESTAURANT:
      let newState = Object.assign({}, state);
      delete newState[action.restaurantId];
      return newState;
    case RECEIVE_FAVORITE:
      let favoriteState = Object.assign({}, state);
      favoriteState[action.favorite.restaurant_id].favorite_ids.push(
        action.favorite.id
      );
      return favoriteState;
    case REMOVE_FAVORITE:
      let removeFavoriteState = Object.assign({}, state);
      let removeFavIdx = removeFavoriteState[
        action.restaurantId
      ].favorite_ids.indexOf(action.favoriteId);
      delete removeFavoriteState[action.restaurantId].favorite_ids[
        removeFavIdx
      ];
      return removeFavoriteState;
    default:
      return state;
  }
};

export default restaurantsReducer;
