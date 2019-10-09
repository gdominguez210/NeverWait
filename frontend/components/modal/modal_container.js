import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Modal from "./modal";
import { closeModal } from "../../actions/modal_actions";
const msp = (state, ownProps) => ({
  modal: state.ui.modal
});

const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(
  msp,
  mdp
)(Modal);
