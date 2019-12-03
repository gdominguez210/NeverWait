import React from "react";
import { Link } from "react-router-dom";
import { parseDate, dateAbvToInt } from "../../util/format_date_time";
import moment from "moment";
const ReservationIndexItem = props => {
  let moment = require("moment");
  const { reservation, restaurant, status, deleteReservation } = props;
  let parsedDate = parseDate(reservation.date);
  const { date, start_time, end_time } = reservation;
  let banner;
  if (restaurant) {
    banner = {
      backgroundImage: `url(${restaurant.image_url})`
    };
  } else {
    banner = {};
  }

  const manageDeleteReservation = e => {
    e.preventDefault();
    deleteReservation(reservation.id);
  };

  return restaurant ? (
    <li className={`reservation-index-item ${status}`}>
      <div className="inner-wrap">
        <Link to={`#`}>
          <div className="thumbnail">
            <div className="thumbnail-img" style={banner}></div>
            <i className="fas fa-image"></i>
          </div>
        </Link>
        <div className="reservation-details">
          <div className="reservation-header">
            <h3 className="reservation-name">{restaurant.name}</h3>
            {deleteReservation ? (
              <button
                onClick={manageDeleteReservation}
                className="readon danger"
              >
                Cancel Reservation
              </button>
            ) : null}
          </div>
          <p className="reservation-address">{parsedDate}</p>
          <p className="reservation-phone">{start_time}</p>
        </div>
      </div>
    </li>
  ) : null;
};

export default ReservationIndexItem;
