import React from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import RestaurantStars from "../restaurant_ratings/rating_stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const RestaurantHeader = props => {
  debugger;
  return (
    <>
      <div class="restaurant-header">
        <h1 id="overview">{props.restaurant.name}</h1>
        <div class="subheader">
          <div className="stars-container">
            <RestaurantStars restaurant={props.restaurant} />
            <p>{props.restaurant.total_rating}</p>
          </div>
          <p>{props.restaurant.total_reviews} reviews</p>
          <p>Price Range: {props.restaurant.price_range}</p>
        </div>
      </div>
    </>
  );
};

export default RestaurantHeader;
