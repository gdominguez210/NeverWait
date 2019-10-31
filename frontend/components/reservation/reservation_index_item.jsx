import React from "react";
import { Link } from "react-router-dom";
import { parseDate, dateAbvToInt } from "../../util/format_date_time";
import moment from "moment";
const ReservationIndexItem = props => {
  debugger;
  let moment = require("moment");
  const { reservation, restaurant, status } = props;
  debugger;
  let parsedDate = parseDate(reservation.date);
  const { date, start_time, end_time } = reservation;
  debugger;

  let banner;
  if (restaurant.image_url) {
    banner = {
      backgroundImage: `url(${restaurant.image_url})`
    };
  } else {
    banner = {};
  }

  return (
    <li className={`reservation-index-item ${status}`}>
      <div className="inner-wrap">
        <Link to={`#`}>
          <div className="thumbnail">
            <div className="thumbnail-img" style={banner}></div>
            <i className="fas fa-image"></i>
          </div>
        </Link>
        <div className="reservation-details">
          <h3 className="reservation-name">{restaurant.name}</h3>
          <p className="reservation-address">{parsedDate}</p>
          <p className="reservation-phone">{start_time}</p>
        </div>
      </div>
    </li>
  );
};

export default ReservationIndexItem;