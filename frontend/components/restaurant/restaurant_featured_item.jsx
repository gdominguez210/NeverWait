import React from "react";
import { Link } from "react-router-dom";
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

  return (
    <li className="restaurant-item">
      <Link to={`/restaurants/${restaurant.id}`}>
        <div className="thumbnail">
          <div className="thumbnail-img" style={banner}></div>
          <i className="fas fa-image"></i>
        </div>
        <div className="restaurant-details">
          <h3 className="restaurant-name">{restaurant.name}</h3>
          <p className="restaurant-address">{restaurant.address}</p>
          <p className="restaurant-phone">{restaurant.phone}</p>
        </div>
      </Link>
    </li>
  );
};

export default RestaurantFeaturedItem;
