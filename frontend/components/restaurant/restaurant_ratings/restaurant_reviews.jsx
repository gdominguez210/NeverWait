import React, { createRef } from "react";
import ReviewIndexContainer from "../../reviews/review_index_container";
import RestaurantStars from "./rating_stars";
import { CSSTransition } from "react-transition-group";
import RestaurantBars from "./restaurant_bars";
const RestaurantReviews = props => {
  return (
    <>
      <div ref={props.reviews}>
        <h2>What {props.restaurant.total_reviews} People Are Saying</h2>
        <div className="stats-container">
          <div className="stats-overview">
            <p>
              <strong>Overall ratings and reviews</strong>
            </p>
            <p>
              Reviews can only be made by diners who have eaten at this
              restaurant
            </p>
            <div className="stars-container">
              <RestaurantStars restaurant={props.restaurant} />
              <p>{`${props.restaurant.total_rating} based on recent ratings`}</p>
            </div>
          </div>
          <div className="restaurant-bars">
            <RestaurantBars restaurant={props.restaurant} />
          </div>
        </div>
        <div className="restaurant-ratings-breakdown">
          <div className="restaurant-rating-container">
            <p>{props.restaurant.food_rating}</p>
            <p>Food</p>
          </div>
          <div className="restaurant-rating-container">
            <p>{props.restaurant.service_rating}</p>
            <p>Service</p>
          </div>
          <div className="restaurant-rating-container">
            <p>{props.restaurant.food_rating}</p>
            <p>Ambience</p>
          </div>
          <div className="restaurant-rating-container">
            <p>{props.restaurant.value_rating}</p>
            <p>Value</p>
          </div>
        </div>
        <ReviewIndexContainer review_ids={props.restaurant.review_ids} />
      </div>
    </>
  );
};

export default RestaurantReviews;
