import { RECEIVE_FILTER, CLEAR_FILTER } from "../actions/filter_actions";
const filterReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FILTER:
      let filterState = Object.assign({}, state);
      filterState[`filterItem${action.filter.type}`] = action.filter;

      // return { filter: action.filter, filterType: action.filterType };
      return filterState;
    case CLEAR_FILTER:
      return {};
    default:
      return state;
  }
};

export default filterReducer;
