import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
class ReservationForm extends React.Component {
  constructor(props) {
    super(props);
      ;
    this.state = {
      party_size: this.props.reservation.party_size || "",
      date: this.parseDate(this.props.reservation.date) || "",
      start_time: this.parseTime(this.props.reservation.start_time) || "",
      first_name: "",
      end_time: "",
      last_name: "",
      phonenumber: "",
      email: "",
      restaurant_id: this.props.restaurant.id,
      user_id: this.props.currentUser.id
    };

      ;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.parseDate = this.parseDate.bind(this);
    this.parseTime = this.parseTime.bind(this);
    this.thumbnail = null;
      ;
    if (this.props.restaurant.image_url) {
      this.thumbnail = {
        backgroundImage: `url(${this.props.restaurant.image_url})`
      };
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const reservation = Object.assign({}, this.state);
    this.props
      .createReservation(reservation)
      .then(() => this.props.history.push(`/`));
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  renderErrors() {
    const errors = this.props.errors || [];

    return (
      <ul>
        {errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }
  parseTime(time) {
    time = time.slice(11, 16);
    return time[0] < 1 ? `${time.slice(1)} AM` : `${time} PM`;
  }
  parseDate(date) {
    const date_pieces = String(date).split(" ");
    const months = {
      Jan: "January",
      Feb: "February",
      Mar: "March",
      Apr: "April",
      May: "May",
      Jun: "June",
      Jul: "July",
      Aug: "August",
      Sep: "September",
      Oct: "October",
      Nov: "November",
      Dec: "December"
    };

    const month = months[date_pieces[1]];
    const day = date_pieces[2];
    const year = date_pieces[3];

    return `${month} ${day}, ${year}`;
  }

  renderErrors() {
    const errors = this.props.errors;
    if (errors.length > 0) {
      return (
        <ul className="errors">
          {errors.map((error, i) => (
            <li className="error" key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  header() {
    // if (this.props.party_size && this.state.date && this.state.start_time) {
    return (
      <div className="form-head">
        <h2>You're almost done!</h2>
        <div className="reservation-thumbnail" style={this.thumbnail}></div>
        <div className="reservation-booking-details">
          <h2>{this.props.restaurant.name}</h2>
          <div className="booking-icons">
            <div className="booking-icon">
              <p>
                <FontAwesomeIcon icon="calendar" />
              </p>
              <p>Date: {this.state.date}</p>
            </div>
            <div className="booking-icon">
              <p>
                <FontAwesomeIcon icon="clock" />
              </p>
              <p> Time: {this.state.start_time}</p>
            </div>
            <div className="booking-icon">
              <p>
                <FontAwesomeIcon icon="user" />
              </p>
              <p>Party Size: {this.state.party_size}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  footer() {
    return (
      <p>
        By clicking “Complete reservation” you agree to the NeverWait Terms of
        Use and Privacy Policy.
      </p>
    );
  }

  render() {
      ;
    return (
      <>
        <div className="form-container reservation">
          {this.header()}
          <form onSubmit={this.handleSubmit}>
            <div className="inputs-container">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                placeholder="First Name*"
                value={this.state.first_name}
                onChange={this.update("first_name")}
              />
              <label htmlFor="username">Last Name</label>
              <input
                type="text"
                placeholder="Last Name*"
                value={this.state.last_name}
                onChange={this.update("last_name")}
              />
            </div>
            <div className="inputs-container">
              <label htmlFor="phonenumber">Phone Number</label>
              <input
                type="tel"
                placeholder="Phone Number*"
                value={this.state.phonenumber}
                onChange={this.update("phonenumber")}
              />
              <label htmlFor="phonenumber">Email</label>
              <input
                type="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.update("email")}
              />
            </div>
            {/* <ul className="errors">{errorItems}</ul> */}
            <button className="readon-submit">Complete Reservation</button>
            {this.renderErrors()}
            {this.footer()}
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(ReservationForm);
