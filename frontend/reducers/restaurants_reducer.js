import {
  RECEIVE_RESTAURANTS,
  RECEIVE_RESTAURANT,
  REMOVE_RESTAURANT
} from "../actions/restaurants_actions";
import { RECEIVE_REVIEW, REMOVE_REVIEW } from "../actions/review_actions";
const restaurantsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_RESTAURANTS:
      return action.restaurants;
    case RECEIVE_RESTAURANT:
      return Object.assign({}, state, {
        [action.restaurant.id]: action.restaurant
      });
    // case RECEIVE_REVIEW:
    //   let reviewState = Object.assign({}, state);
    //   reviewState[action.review.restaurant_id].review_ids.push(
    //     action.review.id
    //   );
    //   return reviewState;
    case REMOVE_REVIEW:
      let removeState = Object.assign({}, state);
      let removeIdx = Object.values(removeState)[0].review_ids.indexOf(
        action.reviewId
      );
      delete Object.values(removeState)[0].review_ids[removeIdx];
      return removeState;
    case REMOVE_RESTAURANT:
      let newState = Object.assign({}, state);
      delete newState[action.restaurantId];
      return newState;
    default:
      return state;
  }
};

export default restaurantsReducer;
