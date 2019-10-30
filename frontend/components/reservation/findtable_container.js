import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FindTableForm from "./findtable_form";
import { findTable } from "./../../actions/reservation_actions";
const mapStateToProps = (state, ownProps) => {
  const reservation = {
    party_size: "",
    date: "",
    start_time: ""
  };
  debugger;
  const errors = state.errors.reservation;
  const restaurants = state.entities.restaurants;
  const restaurant = Object.values(restaurants);
  const currentUser = state.entities.users[state.session.id];
  return { restaurants, reservation, errors, currentUser, restaurant };
};

const mapDispatchToProps = dispatch => {
  return {
    findTable: (reservationRequest, restaurantId) =>
      dispatch(findTable(reservationRequest, restaurantId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindTableForm);
