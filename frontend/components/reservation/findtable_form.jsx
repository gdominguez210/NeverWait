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
      date: moment(new Date()).startOf("day"),
      start_time: "",
      focused: false
    };
    this.moment = require("moment");
     ;
    this.hours = [
      "12:00am",
      "12:30am",
      "1:00am",
      "1:30am",
      "2:00am",
      "2:30am",
      "3:00am",
      "3:30am",
      "4:00am",
      "4:30am",
      "5:00am",
      "5:30am",
      "6:00am",
      "6:30am",
      "7:00am",
      "7:30am",
      "8:00am",
      "8:30am",
      "9:00am",
      "9:30am",
      "10:00am",
      "10:30am",
      "11:00am",
      "11:30am",
      "12:00pm",
      "12:30pm",
      "1:00pm",
      "1:30pm",
      "2:00pm",
      "2:30pm",
      "3:00pm",
      "3:30pm",
      "4:00pm",
      "4:30pm",
      "5:00pm",
      "5:30pm",
      "6:00pm",
      "6:30pm",
      "7:00pm",
      "7:30pm",
      "8:00pm",
      "8:30pm",
      "9:00pm",
      "9:30pm",
      "10:00pm",
      "10:30pm",
      "11:00pm",
      "11:30pm"
    ];
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleAvailableTimes = this.handleAvailableTimes.bind(this);
    this.renderFindTable = this.renderFindTable.bind(this);
    this.moment = moment.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    // let parsed = String(this.state.date);
    // this.setState({
    //   date: parsed
    // });
     ;
    const reservationRequest = Object.assign({}, this.state);
    this.props
      .findTable(reservationRequest, this.props.match.params.restaurantId)
      .then(payload => {
         ;
        if (!payload.available_openings) {
          return this.props.history.push(`/new-reservation`);
        }
      });
  }
  handleAvailableTimes() {
    if (Object.values(this.props.restaurants).length > 0) {
       ;
      if (
        this.props.restaurants[this.props.match.params.restaurantId]
          .receiveReservation
      ) {
        let timeslots = this.props.restaurants[
          this.props.match.params.restaurantId
        ].available_openings;
        let times = timeslots.map(el => (
          <button
            className="readon"
            data-timeslot={el}
            onClick={this.update("start_time")}
          >
            {el}
          </button>
        ));
         ;
        return (
          <div className="timeSlot-container">
            <p>
              You're in luck! We still have {timeslots.length} timeslots left
            </p>
            <h4>Select a time:</h4>
            {times}
          </div>
        );
      }
    }
  }

  handleDateChange(pickedDate) {
    this.setState({
      date: pickedDate
    });
  }
  update(field) {
     ;
    return e => {
      if (e.target.className) {
        this.setState({
          [field]: e.target.dataset.timeslot
        });
      } else {
        this.setState({
          [field]: e.target.value
        });
      }
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
    let timeNow = this.moment().format("h:mma");
    let validTimes = this.hours.filter(
      el => this.moment(el, "h: mma") > this.moment(timeNow, "h:mma")
    );
    let options = validTimes.map((el, idx) => (
      <option key={`el-${idx}`} value={`${el}`}>
        {el}
      </option>
    ));
    return (
      <label>
        Time
        <select
          value={this.state.start_time}
          onChange={this.update("start_time")}
        >
          {options}
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
  renderFindTable() {
    let submit = <button className="readon-submit">Find a Table</button>;
    if (Object.values(this.props.restaurants).length > 0) {
      if (
        this.props.restaurants[this.props.match.params.restaurantId]
          .available_openings
      ) {
        submit = null;
      }
    }
    return submit;
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
            {this.handleAvailableTimes()}
            {this.renderFindTable()}
            {this.renderErrors()}
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(FindTableForm);
