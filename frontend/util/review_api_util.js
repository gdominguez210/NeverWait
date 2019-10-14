export const createReview = review =>
  $.ajax({
    method: "POST",
    url: `/api/restaurants/${review.restaurant_id}/reviews`,
    data: { review }
  });

export const updateReview = review =>
  $.ajax({
    method: "PATCH",
    url: `/api/reviews/${review.id}`,
    data: { review }
  });

export const deleteReview = (reviewId, restaurantId) =>
  $.ajax({
    method: "DELETE",
    url: `/api/reviews/${reviewId}`
  });

export const fetchReviews = id =>
  $.ajax({
    method: "GET",
    url: `/api/restaurants/${id}/reviews`
  });
