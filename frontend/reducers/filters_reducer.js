import {
  RECEIVE_FILTER,
  CLEAR_ALL_FILTERS,
  CLEAR_FILTER
} from "../actions/filter_actions";
const filterReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_FILTER:
      let filterState = Object.assign({}, state);
      // filterState[`filter_${action.filter.type}`] = action.filter;
      filterState[action.filter.type] = action.filter;
      return filterState;
    case CLEAR_FILTER:
      let clearFilterState = Object.assign({}, state);
      delete clearFilterState[action.filter];
      return clearFilterState;
    case CLEAR_ALL_FILTERS:
      return {};
    default:
      return state;
  }
};

export default filterReducer;
