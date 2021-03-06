export const RECEIVE_FILTER = "RECEIVE_FILTER";
export const CLEAR_FILTER = "CLEAR_FILTER";
export const receiveFilter = filter => {
  return {
    type: RECEIVE_FILTER,
    filter
  };
};

export const clearFilter = () => {
  return {
    type: CLEAR_FILTER
  };
};
