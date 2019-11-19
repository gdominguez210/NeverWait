export const RECEIVE_FILTER = "RECEIVE_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";
export const receiveFilter = (filter, filterType) => {
  return {
    type: RECEIVE_FILTER,
    filter,
    filterType
  };
};

export const clearFilter = () => {
  return {
    type: CLEAR_FILTER
  };
};
