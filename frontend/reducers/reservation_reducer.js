import {
  RECEIVE_RESERVATION,
  RECEIVE_RESERVATIONS,
  REMOVE_RESERVATION
} from "../actions/reservation_actions";

import { RECEIVE_RESTAURANT } from "../actions/restaurant_actions";

const reservationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_RESERVATION:
      return Object.assign({}, state, {
        [action.reservation.user_id]: action.reservation
      });
    case RECEIVE_RESERVATIONS:
      return Object.assign({}, action.reservations);
    case REMOVE_RESERVATION:
      let newState = Object.assign({}, state);
      delete newState[action.id];
      return newState;
    case RECEIVE_RESTAURANT:
      return Object.assign({}, action.reservations);
    default:
      return state;
  }
};

export default reservationsReducer;
