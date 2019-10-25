import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ReservationForm from "./reservation_form";
import { createReservation } from "./../../actions/reservation_actions";
import { openModal } from "./../../actions/modal_actions";
import { closeModal } from "./../../actions/modal_actions";
const mapStateToProps = (state, ownProps) => {
   ;
  const reservation = {
    party_size: state.entities.reservations.party_size,
    date: state.entities.reservations.date,
    start_time: state.entities.reservations.start_time,
    end_time: "",
    restaurant_name: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    email: ""
  };
  const currentUser = state.entities.users[state.session.id];
  const restaurant = Object.values(state.entities.restaurants)[0];
  const errors = state.errors.reservation;
  // const currentUser = state.entities.users[state.session.id];
  // const formType = "Create";
  return { reservation, restaurant, currentUser, errors };
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
