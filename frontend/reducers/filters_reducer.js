import { RECEIVE_FILTER } from "../actions/filter_actions";
const filterReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FILTER:
      return { filter: action.filter, filterType: action.filterType };
    default:
      return state;
  }
};

export default filterReducer;
