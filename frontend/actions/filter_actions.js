export const RECEIVE_FILTER = "RECEIVE_FILTER";

export const receiveFilter = (filter, filterType) => {
  return {
    type: RECEIVE_FILTER,
    filter,
    filterType
  };
};
