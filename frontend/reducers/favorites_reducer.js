import {
  RECEIVE_FAVORITE,
  REMOVE_FAVORITE,
  RECEIVE_FAVORITES
} from "../actions/favorite_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_RESTAURANT } from "../actions/restaurants_actions";
const favoritesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FAVORITE:
      return Object.assign({}, state, {
        [action.favorite.user_id]: action.favorite
      });
    case RECEIVE_FAVORITES:
      return Object.assign({}, action.favorites);
    case REMOVE_FAVORITE:
      let newState = Object.assign({}, state);
      delete newState[action.favoriteId];
      return newState;
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, action.favorites);
    case RECEIVE_RESTAURANT:
       ;
      return Object.assign({}, action.favorites);
    default:
      return state;
  }
};

export default favoritesReducer;
