import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ReservationForm from "./reservation_form";
import { createReservation } from "./../../actions/reservation_actions";
import { openModal } from "./../../actions/modal_actions";
import { closeModal } from "./../../actions/modal_actions";
const mapStateToProps = (state, ownProps) => {
  debugger;
  const reservation = {
    party_size: state.entities.reservation.party_size,
    date: state.entities.reservation.date,
    start_time: state.entities.reservation.start_time,
    end_time: "",
    restaurant_name: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    email: ""
  };
  const currentUser = state.entities.users[state.session.id];
  const restaurant = Object.values(state.entities.restaurants)[0];
  // const currentUser = state.entities.users[state.session.id];
  // const formType = "Create";
  return { reservation, restaurant, currentUser };
};

const mapDispatchToProps = dispatch => {
  return {
    createReservation: reservation => dispatch(createReservation(reservation)),
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationForm);