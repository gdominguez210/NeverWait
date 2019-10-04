import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const RestaurantStars = props => {
  return (
    <>
      <div class="stars">
      <FontAwesomeIcon icon="star" />
      <FontAwesomeIcon icon="star" />
      <FontAwesomeIcon icon="star" />
      <FontAwesomeIcon icon="star" />
      <FontAwesomeIcon icon="star" />
      <p>No rating</p>
      <p>No reviews</p>
      </div>
    </>
  );
};

export default RestaurantStars;