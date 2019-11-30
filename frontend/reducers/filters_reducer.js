import { RECEIVE_FILTER, CLEAR_ALL_FILTERS } from "../actions/filter_actions";
const filterReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FILTER:
      let filterState = Object.assign({}, state);
      filterState[`filterItem${action.filter.type}`] = action.filter;

      // return { filter: action.filter, filterType: action.filterType };
      return filterState;
    case CLEAR_ALL_FILTERS:
      return {};
    default:
      return state;
  }
};

export default filterReducer;
