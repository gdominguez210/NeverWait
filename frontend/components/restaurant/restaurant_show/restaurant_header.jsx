import React from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import RestaurantStars from "../restaurant_ratings/rating_stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const RestaurantHeader = props => {
  const total = props.restaurant.total_reviews === 1 ? "review" : "reviews";
  return (
    <>
      <div className="restaurant-header">
        <h1 id="overview">{props.restaurant.name}</h1>
        <div className="subheader">
          <div className="stars-container">
            <RestaurantStars restaurant={props.restaurant} />
            <p>{props.restaurant.total_rating}</p>
          </div>
          <p>
            {props.restaurant.total_reviews} {total}
          </p>
          <p>Price Range: {props.restaurant.price_range}</p>
        </div>
      </div>
    </>
  );
};

export default RestaurantHeader;
