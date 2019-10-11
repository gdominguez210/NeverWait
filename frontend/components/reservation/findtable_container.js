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
  const errors = state.errors.reservation;
  // const currentUser = state.entities.users[state.session.id];
  // const formType = "Create";
  return { reservation, errors };
};

const mapDispatchToProps = dispatch => {
  return {
    findTable: reservationRequest => dispatch(findTable(reservationRequest))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FindTableForm);
