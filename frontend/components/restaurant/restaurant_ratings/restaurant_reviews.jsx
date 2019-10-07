import React, { createRef } from "react";
import ReviewIndexContainer from "../../reviews/review_index_container";
import RestaurantStars from "./rating_stars";
import { CSSTransition } from "react-transition-group";

const RestaurantReviews = props => {
  return (
    <>
      <h2>What {props.restaurant.total_reviews} People Are Saying</h2>
      <div class="stats-overview">
        <p>
          <strong>Overall ratings and reviews</strong>
        </p>
        <p>
          Reviews can only be made by diners who have eaten at this restaurant
        </p>
        <div className="stars-container">
          <RestaurantStars restaurant={props.restaurant} />
          <p>{`${props.restaurant.total_rating} based on recent ratings`}</p>
        </div>
      </div>
      <div class="restaurant-ratings-breakdown">
        <div class="restaurant-rating-container">
          <p>{props.restaurant.food_rating}</p>
          <p>Food</p>
        </div>
        <div class="restaurant-rating-container">
          <p>{props.restaurant.service_rating}</p>
          <p>Service</p>
        </div>
        <div class="restaurant-rating-container">
          <p>{props.restaurant.food_rating}</p>
          <p>Ambience</p>
        </div>
        <div class="restaurant-rating-container">
          <p>{props.restaurant.value_rating}</p>
          <p>Value</p>
        </div>
      </div>
      <ReviewIndexContainer />
    </>
  );
};

export default RestaurantReviews;
