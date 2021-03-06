import * as ApiUtil from "../util/review_api_util";

export const RECEIVE_REVIEW = "RECEIVE_REVIEW";
export const REMOVE_REVIEW = "REMOVE_REVIEW";
export const RECEIVE_REVIEWS = "RECEIVE_REVIEWS";
export const RECEIVE_REVIEW_ERRORS = "RECEIVE_REVIEW_ERRORS";
export const CLEAR_REVIEWS = "CLEAR_REVIEWS";
const receiveReviews = payload => ({
  type: RECEIVE_REVIEWS,
  reviews: payload.reviews,
  users: payload.users
});
const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});

const removeReview = (reviewId, restaurantId) => ({
  type: REMOVE_REVIEW,
  reviewId,
  restaurantId
});

export const clearReviews = () => ({
  type: CLEAR_REVIEWS
});
export const receiveErrors = errors => {
  return {
    type: RECEIVE_REVIEW_ERRORS,
    errors
  };
};

export const createReview = review => dispatch =>
  ApiUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

export const updateReview = review => dispatch =>
  ApiUtil.updateReview(review)
    .then(review => dispatch(receiveReview(review)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

export const deleteReview = (reviewId, restaurantId) => dispatch =>
  ApiUtil.deleteReview(reviewId, restaurantId)
    .then(review => dispatch(removeReview(reviewId, restaurantId)))
    .fail(errors => dispatch(receiveErrors(errors.responseJSON)));

export const fetchReviews = id => dispatch => {
  return ApiUtil.fetchReviews(id).then(reviews => {
    return dispatch(receiveReviews(reviews));
  });
};

// export const fetchReviewsWithId = (restaurantId) => dispatch =>
//   ApiUtil.fetchReviews().then(reviews => dispatch(receiveReviews(reviews)));
