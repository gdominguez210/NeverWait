import * as ApiUtil from "../util/reservation_api_util";

export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";
export const RECEIVE_RESERVATIONS = "RECEIVE_RESERVATIONS";
export const RECEIVE_RESERVATION_ERRORS = "RECEIVE_RESERVATION_ERRORS";
export const OPEN_TIME_SLOT = "OPEN_TIME_SLOT";

const receiveReservations = reservations => ({
  type: RECEIVE_RESERVATIONS,
  reservations
});
export const receiveErrors = errors => {
  return {
    type: RECEIVE_RESERVATION_ERRORS,
    errors
  };
};
const receiveReservation = reservation => ({
  type: RECEIVE_RESERVATION,
  reservation
});

const removeReservation = reservationId => ({
  type: REMOVE_RESERVATION,
  reservationId
});

const openTimeslot = payload => {
  return {
    type: OPEN_TIME_SLOT,
    date: payload.date,
    start_time: payload.start_time,
    party_size: payload.party_size
  };
};

export const createReservation = reservation => dispatch =>
  ApiUtil.createReservation(reservation)
    .then(reservation => dispatch(receiveReservation(reservation)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

export const updateReservation = reservation => dispatch =>
  ApiUtil.updateReservation(reservation)
    .then(reservation => dispatch(receiveReservation(reservation)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

export const deleteReservation = reservationId => dispatch =>
  ApiUtil.deleteReservation(reservationId)
    .then(reservation => dispatch(removeReservation(reservationId)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

export const fetchReservations = id => dispatch => {
  return ApiUtil.fetchReservations(id).then(reservations => {
    return dispatch(receiveReservations(reservations));
  });
};

export const findTable = reservationRequest => dispatch => {
    ;
  reservationRequest.date = String(reservationRequest.date);
    ;
  return ApiUtil.findTable(reservationRequest)
    .then(reservation => {
        ;
      return dispatch(openTimeslot(reservation));
    })
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));
};
