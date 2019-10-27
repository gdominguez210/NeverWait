import {
  RECEIVE_RESERVATION,
  RECEIVE_RESERVATIONS,
  REMOVE_RESERVATION,
  OPEN_TIME_SLOT
} from "../actions/reservation_actions";
import { RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_RESTAURANT } from "../actions/restaurants_actions";

const reservationsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case OPEN_TIME_SLOT:
      return Object.assign({}, state, {
        date: action.date,
        start_time: action.start_time,
        party_size: action.party_size
      });
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
      return Object.assign({}, state, action.reservations);
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, action.reservations);
    default:
      return state;
  }
};

export default reservationsReducer;
