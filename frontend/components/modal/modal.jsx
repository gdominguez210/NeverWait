import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import LoginFormContainer from "../session/LoginFormContainer.jsx";
import SignUpFormContainer from "../session/SignUpFormContainer.jsx";
import CreateReviewFormContainer from "../reviews/review_forms/create_review_container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { CSSTransition } from "react-transition-group";
class Modal extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    this.restaurant_id = this.props.location.pathname[
      this.props.location.pathname.length - 1
    ];
  }

  render() {
    if (!this.props.modal) {
      return null;
    }

    let component = null;

    switch (this.props.modal) {
      case "login":
        component = <LoginFormContainer />;
        break;
      case "signup":
        component = <SignUpFormContainer />;
        break;
      case "review":
        component = (
          <CreateReviewFormContainer restaurant_id={this.restaurant_id} />
        );
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
