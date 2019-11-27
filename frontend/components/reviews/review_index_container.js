import { connect } from "react-redux";
import ReviewIndex from "./review_index";
import { fetchReviews } from "../../actions/review_actions";
import { openModal } from "../../actions/modal_actions";
import { createReview, deleteReview } from "../../actions/review_actions";
import { clearFilter } from "../../actions/filter_actions";

const msp = (state, ownProps) => {
  const review_ids = ownProps.review_ids;
  const { users } = state.entities;
  const filter = state.ui.filter;
  const errors = state.errors.review;
  let reviews = [];
  if (review_ids) {
    reviews = review_ids.map(id => state.entities.reviews[id]);
  }
  return {
    reviews,
    users,
    currentUser: state.entities.users[state.session.id],
    filter,
    errors
  };
};

const mdp = dispatch => ({
  fetchReviews: id => dispatch(fetchReviews(id)),
  openModal: modal => dispatch(openModal(modal)),
  clearFilter: () => dispatch(clearFilter()),
  deleteReview: (reviewId, restaurantId) =>
    dispatch(deleteReview(reviewId, restaurantId)),
  createReview: review => dispatch(createReview(review))
});

export default connect(msp, mdp)(ReviewIndex);
