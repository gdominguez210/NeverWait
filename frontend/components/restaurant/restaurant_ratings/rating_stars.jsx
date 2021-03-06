import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const RestaurantStars = props => {
  let percentage = null;
  let fill = null;
  if (props.type) {
    percentage = (props.type.total_rating * 100.0) / 5;
    fill = { width: `${percentage}%` };
  }

  return (
    <div className="back-stars">
      <FontAwesomeIcon icon="star" />
      <FontAwesomeIcon icon="star" />
      <FontAwesomeIcon icon="star" />
      <FontAwesomeIcon icon="star" />
      <FontAwesomeIcon icon="star" />
      <div className="front-stars" style={fill}>
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
        <FontAwesomeIcon icon="star" />
      </div>
    </div>
  );
};

export default RestaurantStars;
