import React from "react";
import RestaurantStars from "../restaurant_ratings/rating_stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RestaurantHeader = props => {
  const total = props.restaurant.total_reviews === 1 ? "review" : "reviews";
  let priceRange = null;
  if (props.restaurant.price_range === "cheap") {
    priceRange = "$10 and under";
  } else if (props.restaurant.price_range === "moderate") {
    priceRange = "$30 and under";
  } else {
    priceRange = "$50 and over";
  }
  return (
    <div className="restaurant-header">
      <h1 id="overview">{props.restaurant.name}</h1>
      <div className="subheader">
        <div className="stars-container">
          <RestaurantStars restaurant={props.restaurant} />
          <p>{props.restaurant.total_rating}</p>
        </div>
        <p>{props.restaurant.total_reviews} {total}</p>
        <p><span className="icon"><FontAwesomeIcon icon="money-bill" /></span>{priceRange}</p>
      </div>
    </div>
  );
};

export default RestaurantHeader;
