import React from "react";
import ReservationIndexItem from "./reservation_index_item";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import isEqual from "../../util/isEqual";
let moment = require("moment");
export class ReservationIndex extends React.Component {
  constructor(props) {
    super(props);
    this.is_Mounted = false;
  }

  componentDidMount() {
    this.props.fetchReservations(this.props.match.params.userId);
    this.is_Mounted = true;
  }

  componentDidUpdate(prevProps) {
    if (this.is_Mounted && !isEqual(this.props.reservation, prevProps.reservations) {
      this.props.fetchReservations(this.props.match.params.userId);
    }
  }
  render() {
    let { reservations, deleteReservation } = this.props;
    reservations = reservations.filter(
      reservation => reservation instanceof Object
    );

    const { restaurants, currentUser } = this.props;
    let reservationItems = null;
    let pastReservations = null;
    let upcomingReservations = null;
    let pastResHTML = null;
    let upcomingResHTML = null;
    if (reservations) {
      pastReservations = [];
      upcomingReservations = [];
      reservations.forEach(reservation => {
        let { date, start_time, end_time } = reservation;
        let dateObj = moment(reservation.date, "MM/DD/YY");
        let currentDateStr = moment(new Date(), "MM/DD/YY").format("MM/DD/YY");
        let currentDateObj = moment(currentDateStr, "MM/DD/YY");
        let timeNow = moment().format("h:mma");
        let resTime = moment(start_time, "h: mma");
        timeNow = moment(timeNow, "h:mma");
        let status = null;
        let result1 = currentDateObj.isAfter(dateObj);
        let result2 =
          currentDateObj.isSame(dateObj) && timeNow.isAfter(resTime);
        if (result1 || result2) {
          status = "past";
        } else {
          status = "upcoming";
        }
        if (status === "past") {
          pastReservations.push(
            <ReservationIndexItem
              reservation={reservation}
              status={status}
              key={reservation.id}
              restaurant={restaurants[reservation.restaurant_id]}
            />
          );
        } else {
          upcomingReservations.push(
            <ReservationIndexItem
              reservation={reservation}
              deleteReservation={deleteReservation}
              status={status}
              key={reservation.id}
              restaurant={restaurants[reservation.restaurant_id]}
            />
          );
        }
        if (upcomingReservations.length > 0) {
          upcomingResHTML = (
            <>
              <h2>Upcoming Reservations</h2>
              <ul className="reservations-list">{upcomingReservations}</ul>
            </>
          );
        }
        if (pastReservations.length > 0) {
          pastResHTML = (
            <>
              <h2>Past Reservations</h2>
              <ul className="reservations-list">{pastReservations}</ul>
            </>
          );
        }
      });
    }

    return (
      <>
        <section className="inner-container">
          <section className="reservations-container-outter">
            <aside className="user-options">
              <h3>Account Options</h3>
              <ul>
                {/* <li>
                  <Link to={`/users/${currentUser.id}/`}>
                    <span className="icon">
                      <FontAwesomeIcon icon="user" />
                    </span>
                    My Profile
                  </Link>
                </li> */}
                <li>
                  <Link to={`/users/${currentUser.id}/favorites`}>
                    <span className="icon">
                      <FontAwesomeIcon icon="star" />
                    </span>
                    My Favorites
                  </Link>
                </li>
              </ul>
            </aside>
            <section className="reservations-container">
              <CSSTransition
                in={true}
                appear={true}
                timeout={300}
                classNames="fade"
              >
                <>
                  {upcomingResHTML}
                  {pastResHTML}
                </>
              </CSSTransition>
            </section>
          </section>
        </section>
      </>
    );
  }
}

export default ReservationIndex;
