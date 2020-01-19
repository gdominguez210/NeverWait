import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RestaurantStars from "./restaurant_ratings/rating_stars";

const RestaurantIndexItem = props => {
  const { restaurant, deleteRestaurant, deleteFavorite, res, findTable, history, type, currentUser } = props;
  let banner;
  restaurant.image_url ? banner = { backgroundImage: `url(${restaurant.image_url})` } : banner = {};

  const handleClick = e => {
    e.preventDefault();
    let newRes = Object.assign({}, res);

    newRes.start_time = e.target.dataset.timeslot;
    findTable(newRes, restaurant.id).then(payload => {
      if (!payload.available_openings) return history.push(`/new-reservation`);
    });
  };

  const handleAvailableTimes = () => {
    if (restaurant.available_times) {
      let moment = require("moment");
      let resTime = moment(res.start_time, "h: mma");
      let available_times = restaurant.available_times.filter(
        el => moment(el, "h: mma") > moment(resTime, "h:mma")
      );
      let times = available_times.map((el, idx) => (<button className="readon" onClick={handleClick} key={`${el}-${idx}`} data-timeslot={el}> {el}</button>));
      let mes = null;
      times.length === 0 ? mes = "Sorry, there are no available times left within a 2 and a half hour window." :
        mes = `You're in luck! We still have ${times.length} ${
        times.length === 1 ? "timeslot" : "timeslots"
        } left`;

      return (
        <>
          <div className="booking-header">
            {booked()}
            <p>{mes}</p>
          </div>
          <div className="available-times">{times}</div>
        </>
      )
    }
  };
  const booked = () => {
    return (
      <p className="restaurant-booked">
        <span className="icon"> <FontAwesomeIcon icon="chart-line" /> </span>
        Booked {restaurant.booked_today} {restaurant.booked_today === 1 ? " time " : " times "} this day
      </p>
    );
  };
  const manageDelete = () => {
    let result;
    if (props.currentUser && props.currentUser.id === restaurant.owner_id) {
      result = (<button className="highlight" onClick={() => deleteRestaurant(restaurant.id)}>Delete</button>);
    } else {
      result = null;
    }
    return result;
  };

  const manageDeleteFavorite = e => {
    e.preventDefault();
    let favorite_id = currentUser.favorite_ids.find(el => restaurant.favorite_ids.includes(el));
    deleteFavorite(favorite_id, restaurant.id);
  };

  const price = () => {
    let result = null;
    if (restaurant.price_range === "cheap") {
      result = (<span className="icon"><FontAwesomeIcon icon="dollar-sign" /></span>);
    } else if (restaurant.price_range === "moderate") {
      result = (
        <span className="icon">
          <FontAwesomeIcon icon="dollar-sign" />
          <FontAwesomeIcon icon="dollar-sign" />
        </span>
      );
    } else if (restaurant.price_range === "pricey") {
      result = (
        <span className="icon">
          <FontAwesomeIcon icon="dollar-sign" />
          <FontAwesomeIcon icon="dollar-sign" />
          <FontAwesomeIcon icon="dollar-sign" />
        </span>
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
            <div className="restaurant-header-left">
              <Link to={`/restaurants/${restaurant.id}`}>
                <h3 className="restaurant-name">{restaurant.name}</h3>
              </Link>
              <div className="restaurant-ratings">
                <RestaurantStars type={restaurant} />
                {restaurant.total_reviews > 0 ? restaurant.total_reviews : 0}
                {restaurant.total_reviews === 1 ? " review " : " reviews "}
              </div>
            </div>
            <div className="restaurant-header-right">
              {type === "favorite" ? (
                <div className="restaurant-options">
                  <button onClick={manageDeleteFavorite} className="readon">Delete Favorite</button>
                </div>
              ) : null}
              <ul className="restaurant-location">
                <li>{price()}</li>
                <li>{restaurant.neighborhood}</li>
              </ul>
            </div>
          </div>
          {type !== "favorite" ? (<div className="restaurant-times">{handleAvailableTimes()}</div>) : null}
        </div>
      </div>
    </li>
  );
};

export default RestaurantIndexItem;
