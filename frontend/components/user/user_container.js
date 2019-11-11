import React from "react";
import { connect } from "react-redux";
import UserShow from "./user";
const msp = (state, ownProps) => {
  return { currentUser: state.entities.users[state.session.id] };
};

export default connect(
  msp,
  null
)(UserShow);
