import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-dates/initialize";
import moment from "moment";
import {
  DateRangePicker,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";

import renderLoader from "../loader/loader";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.moment = require("moment");
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
    this.currentDateObj = moment(new Date());
    this.validTimeslots(this.currentDateObj);
    this.state = {
      res: {
        party_size: 1,
        date: this.currentDateObj,
        start_time: this.validTimes[0]
      },
      focused: false,
      query: { name: "" }
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validTimeslots(date) {
    let result = this.currentDateObj.format("M/D/YY") === date.format("M/D/YY");
    let timeNow = this.moment().format("h:mma");
    debugger;

    if (result) {
      debugger;
      this.validTimes = this.hours.filter(
        el => this.moment(el, "h: mma") > this.moment(timeNow, "h:mma")
      );
    } else {
      debugger;
      this.validTimes = this.hours;
    }
  }
  startTime() {
    let options = this.validTimes.map((el, idx) => (
      <option key={`el-${idx}`} value={`${el}`}>
        {el}
      </option>
    ));
    return (
      <label>
        <span className="icon">
          <FontAwesomeIcon icon="clock" /> {this.state.res.start_time}{" "}
        </span>
        <select
          value={this.state.res.start_time}
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
        <span className="icon">
          <FontAwesomeIcon icon="calendar" />
        </span>
        <SingleDatePicker
          date={this.state.res.date} // momentPropTypes.momentObj or null
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
  handleDateChange(pickedDate) {
    const res = { ...this.state.res };
    res.date = pickedDate;
    this.setState(
      {
        res: res
      },
      () => {
        this.validTimeslots(this.state.res.date);
        this.forceUpdate();
      }
    );
  }
  update(field) {
    debugger;
    const query = { ...this.state.query };
    const res = { ...this.state.res };

    return e => {
      if (field === "name") {
        debugger;
        query.name = e.target.value;
        this.setState({
          query: query
        });
      } else {
        debugger;
        res[field] = e.target.value;
        this.setState({
          res: res
        });
      }
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props
      .search(this.state)
      .then(() => this.props.history.push(`/search-restaurants`));
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
    let label = parseInt(this.state.res.party_size) === 1 ? "person" : "people";
    debugger;
    return (
      <label>
        <span className="icon">
          <FontAwesomeIcon icon="user" />
        </span>
        {this.state.res.party_size} {label}
        <select
          value={this.state.res.party_size}
          onChange={this.update("party_size")}
        >
          {options}
        </select>
      </label>
    );
  }
  render() {
    return (
      <>
        <div className="search-form">
          <form onSubmit={this.handleSubmit}>
            <div className="res-container">
              {this.date()}
              {this.startTime()}
              {this.partySize()}
            </div>
            <div className="query-container">
              <input
                placeholder="Location or Restaurant"
                onChange={this.update("name")}
                value={this.state.query.name}
              />
            </div>
            <button className="readon">Let's go</button>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(SearchForm);
