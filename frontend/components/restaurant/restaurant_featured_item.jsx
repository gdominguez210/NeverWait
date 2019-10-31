import React from "react";
import { Link } from "react-router-dom";
import RestaurantStars from "./restaurant_ratings/rating_stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RestaurantFeaturedItem = props => {
  const { restaurant } = props;
  const details = Object.values(restaurant);
  const detailItems = details.map(detail => <li>{detail}</li>);
  let banner;
  if (restaurant.image_url) {
    banner = {
      backgroundImage: `url(${restaurant.image_url})`
    };
  } else {
    banner = {};
  }

  const price = () => {
    let result = null;
    if (restaurant.price_range === "cheap") {
      result = (
        <span class="icon">
          <FontAwesomeIcon icon="dollar-sign" />
        </span>
      );
    } else if (restaurant.price_range === "moderate") {
      result = (
        <>
          <span class="icon">
            <FontAwesomeIcon icon="dollar-sign" />
            <FontAwesomeIcon icon="dollar-sign" />
          </span>
        </>
      );
    } else if (restaurant.price_range === "pricey") {
      result = (
        <>
          <span class="icon">
            <FontAwesomeIcon icon="dollar-sign" />
            <FontAwesomeIcon icon="dollar-sign" />
            <FontAwesomeIcon icon="dollar-sign" />
          </span>
        </>
      );
    }
    return result;
  };

  return (
    <li className="restaurant-item">
      <Link to={`/restaurants/${restaurant.id}`}>
        <div className="thumbnail">
          <div className="thumbnail-img" style={banner}></div>
          <i className="fas fa-image"></i>
        </div>
        <div className="restaurant-details">
          <Link to={`/restaurants/${restaurant.id}`}>
            <h3 className="restaurant-name">{restaurant.name}</h3>
          </Link>
          <p className="restaurant-ratings">
            <RestaurantStars restaurant={props.restaurant} />
            {restaurant.total_reviews}
            {restaurant.total_reviews === 1 ? " review " : " reviews "}
          </p>
          <p></p>
          <p className="restaurant-location">
            <ul>
              <li>{price()}</li>
              <li>{restaurant.neighborhood}</li>
            </ul>
          </p>
          <p className="restaurant-booked">
            <span class="icon">
              <FontAwesomeIcon icon="chart-line" />
            </span>
            Booked {restaurant.booked_today}
            {restaurant.booked_today === 1 ? " time " : " times "}
            today
          </p>
        </div>
      </Link>
    </li>
  );
};

export default RestaurantFeaturedItem;
