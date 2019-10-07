import { connect } from "react-redux";
import ReviewIndex from "./review_index";
import { fetchReviews } from "../../actions/review_actions";

const msp = (state, ownProps) => {
  const { reviews } = state.entities;
  debugger;
  return {
    reviews: Object.values(reviews)
  };
};

const mdp = dispatch => ({
  fetchReviews: id => dispatch(fetchReviews(id))
});

export default connect(
  msp,
  mdp
)(ReviewIndex);
