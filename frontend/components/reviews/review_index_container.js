import { connect } from "react-redux";
import ReviewIndex from "./review_index";
import { fetchReviews } from "../../actions/review_actions";
import { openModal } from "../../actions/modal_actions";
const msp = (state, ownProps) => {
  const { reviews } = state.entities;
  debugger;
  return {
    reviews: Object.values(reviews),
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => ({
  fetchReviews: id => dispatch(fetchReviews(id)),
  openModal: modal => dispatch(openModal(modal))
});

export default connect(
  msp,
  mdp
)(ReviewIndex);
