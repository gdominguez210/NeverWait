import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-dates/initialize";
// import "react-dates/lib/css/_datepicker.css";
import moment from "moment";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";
// const moment = require("moment");

class FindTableForm extends React.Component {
  constructor(props) {
    super(props);
      ;
    this.defaultDateTime = new Date();
    this.state = {
      party_size: 1,
      date: moment(new Date()),
      start_time: "",
      focused: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.parseDate = this.parseDate.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
      ;
    // let parsed = String(this.state.date);
    // this.setState({
    //   date: parsed
    // });
    const reservationRequest = Object.assign({}, this.state);
    this.props.findTable(reservationRequest).then(reservation => {
        ;
      return this.props.history.push(`/new-reservation`);
    });
  }

  handleDateChange(pickedDate) {
    this.setState({
      date: pickedDate
    });
  }
  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }
  parseDate(date) {
    const parts = String(date).split(" ");
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

    const month = months[parts[1]];
    const day = parts[2];
    const year = parts[3];

    return `${month} ${day}, ${year}`;
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

  partySize() {
    let options = [];
    for (let i = 1; i <= 20; i++) {
      options.push(
        <option key={`party-${i}`} value={`${i}`}>
          For {`${i}`}
        </option>
      );
    }
    return (
      <label>
        Party Size
        <select
          value={this.state.party_size}
          onChange={this.update("party_size")}
        >
          {options}
        </select>
      </label>
    );
  }
  startTime() {
    return (
      <label>
        Time
        <select
          value={this.state.start_time}
          onChange={this.update("start_time")}
        >
          <option value="2019-10-10T00:00:00">12:00 AM</option>
          <option value="2019-10-10T00:30:00">12:30 AM</option>
          <option value="2019-10-10T01:00:00">1:00 AM</option>
          <option value="2019-10-10T01:30:00">1:30 AM</option>
          <option value="2019-10-10T02:00:00">2:00 AM</option>
          <option value="2019-10-10T02:30:00">2:30 AM</option>
          <option value="2019-10-10T03:00:00">3:00 AM</option>
          <option value="2019-10-10T03:30:00">3:30 AM</option>
          <option value="2019-10-10T04:00:00">4:00 AM</option>
          <option value="2019-10-10T04:30:00">4:30 AM</option>
          <option value="2019-10-10T05:00:00">5:00 AM</option>
          <option value="2019-10-10T05:30:00">5:30 AM</option>
          <option value="2019-10-10T06:00:00">6:00 AM</option>
          <option value="2019-10-10T06:30:00">6:30 AM</option>
          <option value="2019-10-10T07:00:00">7:00 AM</option>
          <option value="2019-10-10T07:30:00">7:30 AM</option>
          <option value="2019-10-10T08:00:00">8:00 AM</option>
          <option value="2019-10-10T08:30:00">8:30 AM</option>
          <option value="2019-10-10T09:00:00">9:00 AM</option>
          <option value="2019-10-10T09:30:00">9:30 AM</option>
          <option value="2019-10-10T10:00:00">10:00 AM</option>
          <option value="2019-10-10T10:30:00">10:30 AM</option>
          <option value="2019-10-10T11:00:00">11:00 AM</option>
          <option value="2019-10-10T11:30:00">11:30 AM</option>
          <option value="2019-10-10T12:00:00">12:00 PM</option>
          <option value="2019-10-10T12:30:00">12:30 PM</option>
          <option value="2019-10-10T13:00:00">1:00 PM</option>
          <option value="2019-10-10T13:30:00">1:30 PM</option>
          <option value="2019-10-10T14:00:00">2:00 PM</option>
          <option value="2019-10-10T14:30:00">2:30 PM</option>
          <option value="2019-10-10T15:00:00">3:00 PM</option>
          <option value="2019-10-10T15:30:00">3:30 PM</option>
          <option value="2019-10-10T16:00:00">4:00 PM</option>
          <option value="2019-10-10T16:30:00">4:30 PM</option>
          <option value="2019-10-10T17:00:00">5:00 PM</option>
          <option value="2019-10-10T17:30:00">5:30 PM</option>
          <option value="2019-10-10T18:00:00">6:00 PM</option>
          <option value="2019-10-10T18:30:00">6:30 PM</option>
          <option value="2019-10-10T19:00:00">7:00 PM</option>
          <option value="2019-10-10T19:30:00">7:30 PM</option>
          <option value="2019-10-10T20:00:00">8:00 PM</option>
          <option value="2019-10-10T20:30:00">8:30 PM</option>
          <option value="2019-10-10T21:00:00">9:00 PM</option>
          <option value="2019-10-10T21:30:00">9:30 PM</option>
          <option value="2019-10-10T22:00:00">10:00 PM</option>
          <option value="2019-10-10T22:30:00">10:30 PM</option>
          <option value="2019-10-10T23:00:00">11:00 PM</option>
          <option value="2019-10-10T23:30:00">11:30 PM</option>
        </select>
      </label>
    );
  }
  date() {
    return (
      <label>
        Date
        <SingleDatePicker
          date={this.state.date} // momentPropTypes.momentObj or null
          onDateChange={date => this.handleDateChange(date)} // PropTypes.func.isRequired
          focused={this.state.focused} // PropTypes.bool
          onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
          id={"reservation_cal"} // PropTypes.string.isRequired,
          numberOfMonths={1}
          small={true}
        />
      </label>
    );
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
  render() {
    return (
      <>
        <div className="reservation-container">
          <h3>Make a Reservation</h3>
          <hr />
          <form onSubmit={this.handleSubmit}>
            {this.partySize()}
            <div className="date-time">
              {this.date()}
              {this.startTime()}
            </div>
            {/* <ul className="errors">{errorItems}</ul> */}
            <button className="readon-submit">Find a Table</button>
            {this.renderErrors()}
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(FindTableForm);
