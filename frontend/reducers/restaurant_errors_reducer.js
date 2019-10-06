import { RECEIVE_RESTAURANT_ERRORS } from "../actions/restaurants_actions";
export default (state = [], action) => {
  Object.freeze(state);
  debugger;
  switch (action.type) {
    case RECEIVE_RESTAURANT_ERRORS:
      return action.errors;
    default:
      return state;
  }
};
