import { connect } from "react-redux";
import ReviewIndex from "./review_index";
import { fetchReviews } from "../../actions/review_actions";
import { openModal } from "../../actions/modal_actions";
import {
  createReview,
  deleteReview,
  clearReviews
} from "../../actions/review_actions";
import { clearAllFilters } from "../../actions/filter_actions";

const msp = (state, ownProps) => {
    ;
  const review_ids = ownProps.review_ids;
  const { users } = state.entities;
  const filter = state.ui.filter;
  const errors = state.errors.review;
  let reviews = [];
  if (review_ids && Object.values(state.entities.reviews).length > 0) {
      ;
    reviews = review_ids.map(id => {
        ;
      return state.entities.reviews[id];
    });
  }
    ;
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
  clearAllFilters: () => dispatch(clearAllFilters()),
  deleteReview: (reviewId, restaurantId) =>
    dispatch(deleteReview(reviewId, restaurantId)),
  createReview: review => dispatch(createReview(review)),
  clearReviews: () => dispatch(clearReviews())
});

export default connect(msp, mdp)(ReviewIndex);
