import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ReviewForm from "./review_form";
import { createReview } from "../../../actions/review_actions";
import { closeModal } from "../../../actions/modal_actions";
const mapStateToProps = (state, ownProps) => {
  const review = {
    restaurant_id: ownProps.restaurant_id,
    total_rating: "",
    food_rating: "",
    service_rating: "",
    noise_level: "",
    recommended: "",
    body: "",
    value_rating: "",
    ambience_rating: ""
  };
  const currentUser = state.entities.users[state.session.id];
  const formType = "Create";
  const errors = state.errors.review;
  const restaurants = state.entities.restaurants;
  debugger;
  return { review, currentUser, formType, errors, restaurants };
};

const mapDispatchToProps = dispatch => {
  return {
    action: review => dispatch(createReview(review)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
