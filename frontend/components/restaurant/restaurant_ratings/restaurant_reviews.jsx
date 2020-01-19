import React from "react";
import ReviewIndexContainer from "../../reviews/review_index_container";
import RestaurantStars from "./rating_stars";
import RestaurantBarsContainer from "./restaurant_bars_container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const RestaurantReviews = props => {
  const header = props.restaurant.total_reviews === 1 ? (<h2>What {props.restaurant.total_reviews} Person Is Saying</h2>) : (<h2>What {props.restaurant.total_reviews} People Are Saying</h2>);
  const noise_level = () => {
    if (props.restaurant.noise_level !== "") {
      if (props.restaurant.noise_level <= 2) { return "Quiet"; }
      else if (props.restaurant.noise_level > 2 && props.restaurant.noise_level <= 3.4) { return "Moderate"; }
      else { return "Loud"; }
    }
    else {
      return null;
    }
  };
  return (
    <>
      <div ref={props.reviews}>
        {header}
        <div className="stats-container">
          <div className="stats-overview">
            <p><strong>Overall ratings and reviews</strong></p>
            <p>Reviews can only be made by diners who have eaten at this restaurant</p>
            <div className="stars-container">
              <RestaurantStars type={props.restaurant} />
              <p>{`${props.restaurant.total_rating} based on recent ratings`}</p>
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
          </div>
          <div className="restaurant-bars">
            <RestaurantBarsContainer restaurant={props.restaurant} />
          </div>
        </div>

        <div className="restaurant-additional-stats">
          <p>
            <span className="icon"><FontAwesomeIcon icon="signal" /></span>
            Noise <span className="noise-level">{noise_level()}</span>
          </p>
          <span className="icon"><FontAwesomeIcon icon="thumbs-up" /></span>
          {props.restaurant.percent_recommended}% of people would recommend it
          to a friend
        </div>
        <ReviewIndexContainer loadingDone={props.loadingDone} review_ids={props.restaurant.review_ids} />
      </div>
    </>
  );
};

export default RestaurantReviews;
