import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import LoginFormContainer from "../session/LoginFormContainer.jsx";
import SignUpFormContainer from "../session/SignUpFormContainer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { CSSTransition } from "react-transition-group";
const Modal = props => {
  debugger;
  if (!props.modal) {
    return null;
  }

  let component = null;

  switch (props.modal) {
    case "login":
      debugger;
      component = <LoginFormContainer />;
      break;
    case "signup":
      debugger;
      component = <SignUpFormContainer />;
      break;
    default:
      return null;
  }

  return (
    <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
      <div className="modal-background" onClick={props.closeModal}>
        <div className="modal-child" onClick={e => e.stopPropagation()}>
          {component}
        </div>
      </div>
    </CSSTransition>
  );
};

const msp = state => ({
  modal: state.ui.modal
});

const mdp = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(
  msp,
  mdp
)(Modal);
