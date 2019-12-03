import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_REVIEWS } from "../actions/review_actions";
import { RECEIVE_RESTAURANT } from "../actions/restaurants_actions";
import { RECEIVE_FAVORITE } from "../actions/favorite_actions";
import { REMOVE_RESERVATION } from "../actions/reservation_actions";
const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESTAURANT:
      return Object.assign({}, state, action.users);
    case RECEIVE_REVIEWS:
      return Object.assign({}, state, action.users);
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {
        [action.currentUser.id]: action.currentUser
      });
    case RECEIVE_FAVORITE:
      let favoriteState = Object.assign({}, state);
      favoriteState[action.favorite.user_id].favorite_ids.push(
        action.favorite.id
      );
      return favoriteState;
    default:
      return state;
  }
};

export default usersReducer;
