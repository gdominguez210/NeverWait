import React from "react";
import { Link } from "react-router-dom";
import RestaurantStars from "../restaurant/restaurant_ratings/rating_stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReviewIndexItem = props => {
  const { review, author } = props;
  const first_name = author.fname;
  const last_name = author.lname;
  debugger;
  const initials = first_name.slice(0, 1) + last_name.slice(0, 1);
  const total = author.total_reviews > 1 ? "reviews" : "review";
  let deleteHTML = null;

  if (props.currentUser) {
    deleteHTML =
      props.currentUser.id === author.id ? (
        <button
          className="highlight"
          onClick={() => props.deleteReview(review.id)}
        >
          Delete Review
        </button>
      ) : null;
  }
  return (
    <li className="review-index-item">
      <div className="inner-wrap">
        <div className="author-details">
          <div className="user-avatar">{initials}</div>
          <p>{first_name}</p>
          <div className="user-reviews">
            <FontAwesomeIcon icon="comment-alt" />
            <div>{`${author.total_reviews} ${total}`}</div>
          </div>
          {deleteHTML}
        </div>
        <div className="review-details">
          <div className="review-ratings">
            <div className="review-stars"></div>
            <div className="rating-container">
              Total
              <span className="highlight">{review.total_rating}</span>
            </div>
            <div className="rating-container">
              Food
              <span className="highlight">{review.food_rating}</span>
            </div>
            <div className="rating-container">
              Service
              <span className="highlight">{review.service_rating}</span>
            </div>
            <div className="rating-container">
              Value
              <span className="highlight">{review.value_rating}</span>
            </div>
            <div className="rating-container">
              Ambience
              <span className="highlight">{review.ambience_rating}</span>
            </div>
          </div>
          <p>{review.body}</p>
        </div>
      </div>
    </li>
  );
};

export default ReviewIndexItem;
