export const RECEIVE_FILTER = "RECEIVE_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";
export const receiveFilter = (filterVal, filterType) => {
  debugger;
  return {
    type: RECEIVE_FILTER,
    filter: { type: filterType, val: filterVal }
  };
};

export const clearFilter = () => {
  return {
    type: CLEAR_FILTER
  };
};
