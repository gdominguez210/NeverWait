import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Modal from "./modal";
import { closeModal, openModal } from "../../actions/modal_actions";
const msp = (state, ownProps) => ({
  modal: state.ui.modal,
  errors: state.errors.reservation
});

const mdp = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(Modal);
