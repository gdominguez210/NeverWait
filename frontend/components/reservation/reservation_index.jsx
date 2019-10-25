import React from "react";
import ReservationIndexItem from "./reservation_index_item";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

export class ReservationIndex extends React.Component {
  constructor(props) {
    super(props);
     ;
  }

  componentDidMount() {
     ;
    this.props.fetchReservations(this.props.match.params.userId);
     ;
  }

  render() {
    const { reservations } = this.props;
    const { restaurants } = this.props;
    let reservationItems = null;
     ;
    if (reservations) {
      reservationItems = reservations.map((reservation, idx) => (
        <ReservationIndexItem
          reservation={reservation}
          key={reservation.id}
          restaurant={restaurants[reservation.restaurant_id]}
        />
      ));
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
            <ul className="reservations-list">{reservationItems}</ul>
          </CSSTransition>
        </section>
      </>
    );
  }
}

export default ReservationIndex;
