export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const RECEIVE_SEARCH_QUERY = "RECEIVE_SEARCH_QUERY";
import * as APIUtil from "../util/search_api_util";

export const receiveSearchQuery = data => ({
  type: RECEIVE_SEARCH_QUERY,
  query: data.query,
  res: data.res
});

export const search = data => dispatch => {
  debugger;

  typeof data.res.date === "string"
    ? data.res.date
    : (data.res.date = data.res.date.format("M/D/YY"));

  return APIUtil.search(data).then(data => dispatch(receiveSearchQuery(data)));
};

// export const autocomplete = data => dispatch => {
//   return APIUtil.search(data).then(data => dispatch(receiveSearchQuery(data)));
// }
