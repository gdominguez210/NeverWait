import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RestaurantStars from "./restaurant_ratings/rating_stars";

const RestaurantIndexItem = props => {
  const { restaurant, deleteRestaurant, res } = props;
  debugger;
  let banner;
  if (restaurant.image_url) {
    banner = {
      backgroundImage: `url(${restaurant.image_url})`
    };
  } else {
    banner = {};
  }

  const handleAvailableTimes = () => {
    debugger;
    if (restaurant.available_times) {
      let moment = require("moment");
      // let timeNow = moment().format("h:mma");
      let resTime = moment(res.start_time, "h: mma");
      let available_times = restaurant.available_times.filter(
        el => moment(el, "h: mma") > moment(resTime, "h:mma")
      );
      let times = available_times.map(el => (
        <button className="readon" data-timeslot={el}>
          {el}
        </button>
      ));
      let mes = null;
      if (times.length === 0) {
        mes =
          "Sorry, there are no available times left within a 2 and a half hour window.";
      } else {
        mes = `You're in luck! We still have ${times.length} ${
          times.length === 1 ? "timeslot" : "timeslots"
        } left`;
      }
      return (
        <>
          <div className="booking-header">
            {booked()}
            <p>{mes}</p>
          </div>
          <div className="available-times">{times}</div>
        </>
      );
    }
  };
  const booked = () => {
    return (
      <p className="restaurant-booked">
        <span class="icon">
          <FontAwesomeIcon icon="chart-line" />
        </span>
        Booked {restaurant.booked_today}
        {restaurant.booked_today === 1 ? " time " : " times "}
        this day
      </p>
    );
  };
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
          <div className="restaurant-header-container">
            <div class="restaurant-header-left">
              <Link to={`/restaurants/${restaurant.id}`}>
                <h3 className="restaurant-name">{restaurant.name}</h3>
              </Link>
              <p className="restaurant-ratings">
                <RestaurantStars restaurant={props.restaurant} />
                {restaurant.total_reviews}
                {restaurant.total_reviews === 1 ? " review " : " reviews "}
              </p>
            </div>
            <div class="restaurant-header-right">
              <ul className="restaurant-location">
                <li>{price()}</li>
                <li>{restaurant.neighborhood}</li>
              </ul>
            </div>
          </div>
          <div className="restaurant-times">{handleAvailableTimes()}</div>
        </div>
      </div>
    </li>
  );
};

export default RestaurantIndexItem;
