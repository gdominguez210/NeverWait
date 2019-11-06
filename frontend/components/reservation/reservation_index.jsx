import React from "react";
import ReservationIndexItem from "./reservation_index_item";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

export class ReservationIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchReservations(this.props.match.params.userId);
  }

  render() {
    let { reservations } = this.props;
    reservations = reservations.filter(
      reservation => reservation instanceof Object
    );

    const { restaurants } = this.props;
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
        let dateObj = moment(date);
        let currentDateObj = moment(new Date());
        let timeNow = moment().format("h:mma");
        let resTime = moment(start_time, "h: mma");
        timeNow = moment(timeNow, "h:mma");
        let status = null;
        if (
          dateObj._d < currentDateObj._d ||
          (currentDateObj.format("M/D/YY") === dateObj.format("M/D/YY") &&
            resTime._i < timeNow._i)
        ) {
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
      </>
    );
  }
}

export default ReservationIndex;
