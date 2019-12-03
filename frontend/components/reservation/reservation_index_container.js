import { connect } from "react-redux";
import ReservationIndex from "./reservation_index";
import {
  fetchReservations,
  deleteReservation
} from "../../actions/reservation_actions";

const msp = (state, ownProps) => {
  return {
    reservations: Object.values(state.entities.reservations) || [
      {
        date: "",
        start_date: "",
        party_size: ""
      }
    ],
    restaurants: state.entities.restaurants,
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => ({
  fetchReservations: userId => dispatch(fetchReservations(userId)),
  deleteReservation: reservationId => dispatch(deleteReservation(reservationId))
});

export default connect(msp, mdp)(ReservationIndex);
