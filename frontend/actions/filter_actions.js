export const RECEIVE_FILTER = "RECEIVE_FILTER";
export const CLEAR_ALL_FILTERS = "CLEAR_ALL_FILTERS";
export const CLEAR_FILTER = "CLEAR_FILTER";

export const receiveFilter = (filterVal, filterType) => {
  debugger;
  return {
    type: RECEIVE_FILTER,
    filter: { type: filterType, val: filterVal }
  };
};

export const clearFilter = filter => {
  return {
    type: CLEAR_FILTER,
    filter
  };
};

export const clearAllFilters = () => {
  return {
    type: CLEAR_ALL_FILTERS
  };
};
