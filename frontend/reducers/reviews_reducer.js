import {
  RECEIVE_REVIEW,
  REMOVE_REVIEW,
  RECEIVE_REVIEWS
} from "../actions/review_actions";
import { RECEIVE_RESTAURANT } from "../actions/restaurants_actions";
const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANT:
       ;
      return Object.assign({}, action.reviews);
    case RECEIVE_REVIEWS:
      return Object.assign({}, state, action.reviews);
    // return action.reviews;
    case RECEIVE_REVIEW:
      return Object.assign({}, state, { [action.review.id]: action.review });
    case REMOVE_REVIEW:
      let newState = Object.assign({}, state);
      delete newState[action.reviewId];
      return newState;
    default:
      return state;
  }
};

export default reviewsReducer;
