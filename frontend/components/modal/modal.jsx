import React from "react";
import { closeModal, openModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import LoginFormContainer from "../session/LoginFormContainer.jsx";
import SignUpFormContainer from "../session/SignUpFormContainer.jsx";
import CreateReviewFormContainer from "../reviews/review_forms/create_review_container";
import ErrorModal from "../modal/error_modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { CSSTransition } from "react-transition-group";
class Modal extends React.Component {
  constructor(props) {
    super(props);
    // const split = this.props.location.pathname.split("/");
    // this.restaurant_id = split[split.length - 1];
  }

  componentDidUpdate(prevProps) {
    debugger;
    if (this.props.errors.length > 0) {
      debugger;
      this.props.openModal("reservation-error");
    }
  }
  render() {
    if (!this.props.modal) {
      return null;
    }

    const split = this.props.location.pathname.split("/");
    const restaurant_id = split[split.length - 1];

    let component = null;
    debugger;
    switch (this.props.modal) {
      case "login":
        component = <LoginFormContainer />;
        break;
      case "signup":
        component = <SignUpFormContainer />;
        break;
      case "review":
        component = <CreateReviewFormContainer restaurant_id={restaurant_id} />;
        break;
      case "reservation":
        component = <p>Reservation reserved!</p>;
      case "reservation-error":
        debugger;
        component = <LoginFormContainer />;

        break;
      default:
        return null;
    }

    return (
      <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
        <div className="modal-background" onClick={this.props.closeModal}>
          <div className="modal-child" onClick={e => e.stopPropagation()}>
            {component}
          </div>
        </div>
      </CSSTransition>
    );
  }
}

// const msp = state => ({
//   modal: state.ui.modal
// });

// const mdp = dispatch => ({
//   closeModal: () => dispatch(closeModal())
// });

// export default connect(
//   msp,
//   mdp
// )(Modal);

export default withRouter(Modal);
