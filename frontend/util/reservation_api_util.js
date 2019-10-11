export const createReservation = reservation =>
  $.ajax({
    method: "POST",
    url: `/api/restaurants/${reservation.restaurant_id}/reservations`,
    data: { reservation }
  });

export const updateReservation = reservation =>
  $.ajax({
    method: "PATCH",
    url: `/api/reservations/${reservation.id}`,
    data: { reservation }
  });

export const deleteReservation = reservationId =>
  $.ajax({
    method: "DELETE",
    url: `/api/reservations/${reservationId}`
  });

export const fetchReservations = userId =>
  $.ajax({
    method: "GET",
    url: `/api/users/${userId}/reservations`
  });

export const findTable = reservationRequest => {
    ;
  return $.ajax({
    method: "POST",
    url: `/api/reservations/findtable`,
    data: { reservation: reservationRequest }
  });
};
