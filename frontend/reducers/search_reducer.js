import {
  RECEIVE_RESTAURANT,
  RECEIVE_RESTAURANTS
} from "../actions/restaurants_actions";
import { RECEIVE_SEARCH_QUERY } from "../actions/search_actions";
const searchReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_SEARCH_QUERY:
      return { query: action.query, res: action.res };
    case RECEIVE_RESTAURANTS:
      return Object.assign({}, state, action.search);
    case RECEIVE_RESTAURANT:
      return {};
    default:
      return state;
  }
};

export default searchReducer;
