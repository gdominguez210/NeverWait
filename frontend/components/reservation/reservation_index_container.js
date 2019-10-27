import { connect } from "react-redux";
import ReservationIndex from "./reservation_index";
import { fetchReservations } from "../../actions/reservation_actions";

const msp = (state, ownProps) => {
  debugger;
  return {
    reservations: Object.values(state.entities.reservations) || [
      {
        date: "",
        start_date: "",
        party_size: ""
      }
    ],
    restaurants: state.entities.restaurants
  };
};

const mdp = dispatch => ({
  fetchReservations: userId => dispatch(fetchReservations(userId))
});

export default connect(
  msp,
  mdp
)(ReservationIndex);
