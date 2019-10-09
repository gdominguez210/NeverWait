import * as ApiUtil from "../util/reservation_api_util";

export const RECEIVE_RESERVATION = "RECEIVE_RESERVATION";
export const REMOVE_RESERVATION = "REMOVE_RESERVATION";
export const RECEIVE_RESERVATIONS = "RECEIVE_RESERVATIONS";

const receiveReservations = reservations => ({
  type: RECEIVE_RESERVATIONS,
  reservations
});
const receiveReservation = reservation => ({
  type: RECEIVE_RESERVATION,
  reservation
});

const removeReservation = reservationId => ({
  type: REMOVE_RESERVATION,
  reservationId
});

export const createReservation = reservation => dispatch =>
  ApiUtil.createReservation(reservation).then(reservation =>
    dispatch(receiveReservation(reservation))
  );

export const updateReservation = reservation => dispatch =>
  ApiUtil.updateReservation(reservation).then(reservation =>
    dispatch(receiveReservation(reservation))
  );

export const deleteReservation = reservationId => dispatch =>
  ApiUtil.deleteReservation(reservationId).then(reservation =>
    dispatch(removeReservation(reservationId))
  );

export const fetchReservations = id => dispatch => {
  return ApiUtil.fetchReservations(id).then(reservations => {
    debugger;
    return dispatch(receiveReservations(reservations));
  });
};
