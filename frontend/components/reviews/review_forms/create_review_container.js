import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ReviewForm from "./restaurant_form";
import { createReview } from "../../../actions/review_actions";

const mapStateToProps = (state, ownProps) => {
  const review = {
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
  debugger;
  return { review, currentUser };
};

const mapDispatchToProps = dispatch => {
  return {
    action: review => dispatch(createReview(review))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
