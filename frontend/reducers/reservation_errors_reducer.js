import {
  RECEIVE_RESERVATION_ERRORS,
  OPEN_TIME_SLOT
} from "../actions/reservation_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESERVATION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case OPEN_TIME_SLOT:
      return [];
    default:
      return state;
  }
};
