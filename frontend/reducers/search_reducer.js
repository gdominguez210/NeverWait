import { RECEIVE_RESTAURANT } from "../actions/restaurants_actions";
import { RECEIVE_SEARCH_QUERY } from "../actions/search_actions";
const searchReducer = (state = {}, action) => {
  Object.freeze(state);

  debugger;
  switch (action.type) {
    case RECEIVE_SEARCH_QUERY:
      return { query: action.query, res: action.res };
    case RECEIVE_RESTAURANT:
      return {};
    default:
      return state;
  }
};

export default searchReducer;
