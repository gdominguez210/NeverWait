import React from "react";
import { Link } from "react-router-dom";
const RestaurantIndexItem = props => {
  const { restaurant, deleteRestaurant } = props;
  debugger;
  const details = Object.values(restaurant);
  const detailItems = details.map((detail, idx) => (
    <li key={`detail-${idx}`}>{detail}</li>
  ));
  let banner;
  if (restaurant.image_url) {
    banner = {
      backgroundImage: `url(${restaurant.image_url})`
    };
  } else {
    banner = {};
  }

  const manageDelete = () => {
    let result;
    if (props.currentUser) {
      if (props.currentUser.id === restaurant.owner_id) {
        result = (
          <button
            className="highlight"
            onClick={() => deleteRestaurant(restaurant.id)}
          >
            Delete
          </button>
        );
      }
    } else {
      result = null;
    }
    return result;
  };
  return (
    <li className="restaurant-index-item">
      {manageDelete()}
      <div className="inner-wrap">
        <Link to={`/restaurants/${restaurant.id}`}>
          <div className="thumbnail">
            <div className="thumbnail-img" style={banner}></div>
            <i className="fas fa-image"></i>
          </div>
        </Link>
        <div className="restaurant-details">
          <Link to={`/restaurants/${restaurant.id}`}>
            <h3 className="restaurant-name">{restaurant.name}</h3>
          </Link>
          <p className="restaurant-address">
            {restaurant.total_reviews} reviews
          </p>
          <p></p>
          <p className="restaurant-phone">{restaurant.phone}</p>
        </div>
      </div>
    </li>
  );
};

export default RestaurantIndexItem;
