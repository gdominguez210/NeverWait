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
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    debugger;
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
    if (this.props.search.res) {
      this.currentDateObj = moment(this.props.search.res.date, "MM-DD-YYYY");
    } else {
      this.currentDateObj = moment(new Date());
    }
    this.validTimeslots(this.currentDateObj);
    debugger;
    if (this.props.search.res) {
      let idx = this.validTimes.indexOf(this.props.search.res.start_time);
      debugger;
      this.state = {
        res: {
          party_size: this.props.search.res.party_size,
          date: this.props.search.res.date,
          start_time: this.validTimes[idx]
        },
        focused: false,
        query: this.props.search.query,
        autocomplete: "",
        showList: false,
        activeSelection: 0
      };
      debugger;
      // debugger;
      this.props.passSearch ? this.props.passSearch(this.state.res) : null;
      debugger;
    } else {
      debugger;
      this.state = {
        res: {
          party_size: 1,
          date: this.currentDateObj,
          start_time: this.validTimes[0]
        },
        focused: false,
        query: { name: "" },
        autocomplete: "",
        showList: false,
        activeSelection: 0
      };
      debugger;
      this.props.passSearch ? this.props.passSearch(this.state.res) : null;
      debugger;
    }
    this.restaurants = [];
    this.handleDateChange = this.handleDateChange.bind(this);
    this.locations = [];
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleList = this.handleList.bind(this);
    this.throttle = this.throttle.bind(this);
    this.renderAutoList = this.renderAutoList.bind(this);
    this.renderLocations = this.renderLocations.bind(this);
    this.renderRestaurants = this.renderRestaurants.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  validTimeslots(date) {
    let result = moment(new Date()).format("M/D/YY") === date.format("M/D/YY");
    let timeNow = this.moment().format("h:mma");
    debugger;
    if (result) {
      this.validTimes = this.hours.filter(
        el => this.moment(el, "h: mma") > this.moment(timeNow, "h:mma")
      );
    } else {
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
          date={
            moment.isMoment(this.state.res.date)
              ? this.state.res.date
              : moment(this.state.res.date, "MM-DD-YYYY")
          } // momentPropTypes.momentObj or null
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
    debugger;
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

  renderLocations() {
    let locationItems = null;
    if (this.locations.length > 0) {
      locationItems = this.locations.map(el => (
        <li onClick={this.handleClick()} data-searchitem={el}>
          {el}
        </li>
      ));
    }

    return this.locations.length > 0 ? (
      <>
        <p>
          <span className="icon">
            <FontAwesomeIcon icon="map-marker-alt" />
          </span>
          Locations
        </p>
        <ul>{locationItems}</ul>
      </>
    ) : null;
  }

  renderRestaurants() {
    let restaurantItems = null;
    if (this.restaurants.length > 0) {
      restaurantItems = this.restaurants.map(el => (
        <li onClick={this.handleClick()} data-searchitem={el}>
          {el}
        </li>
      ));
    }

    return this.restaurants.length > 0 ? (
      <>
        <p>
          <span className="icon">
            <FontAwesomeIcon icon="store-alt" />
          </span>
          Restaurants
        </p>
        <ul>{restaurantItems}</ul>
      </>
    ) : null;
  }

  renderAutoList() {
    return this.state.showList ? (
      <div className="search-items" tabIndex="1">
        <p>
          <span className="icon">
            <FontAwesomeIcon icon="search" />
          </span>
          Search: {`"${this.state.autocomplete}"`}
        </p>
        {this.renderLocations()}
        {this.renderRestaurants()}
      </div>
    ) : null;
  }
  throttle() {
    if (this.debounceId) {
      clearTimeout(this.debounceId);
    }
    this.debounceId = setTimeout(() => this.handleList(), 500);
  }
  handleList() {
    this.props
      .autocomplete({
        autocomplete: this.state.autocomplete
      })
      .then(data => {
        this.restaurants = [];
        this.locations = [];

        for (let i = 0; i < data.length; i++) {
          let el = data[i];
          if (
            el.searchable_type === "Location" &&
            !this.locations.includes(el.content)
          ) {
            this.locations.push(el.content);
          }
          if (
            el.searchable_type === "Restaurant" &&
            !this.restaurants.includes(el.content)
          ) {
            this.restaurants.push(el.content);
          }
        }
        if (
          this.restaurants.length === 0 &&
          this.locations.length === 0 &&
          this.state.showList
        ) {
          this.setState({
            showList: false
          });
        } else {
          this.setState({
            showList: true
          });
        }
      });
  }

  handleClick(e) {
    const query = { ...this.state.query };
    return e => {
      query.name = e.target.dataset.searchitem;
      this.setState({
        query: query,
        autocomplete: query.name,
        showList: false
      });
    };
  }

  handleKeyDown(e) {}
  update(field) {
    const query = { ...this.state.query };
    const res = { ...this.state.res };
    debugger;
    let that = this;
    return e => {
      debugger;
      if (field === "name") {
        if (e.target.dataset.searchitem) {
          query.name = e.target.dataset.searchitem;
        } else {
          query.name = e.target.value;
        }
        debugger;
        this.setState(
          {
            query: query,
            autocomplete: query.name
          },
          this.throttle()
        );
      } else {
        res[field] = e.target.value;
        this.setState({
          res: res
        });
      }
    };
  }
  handleSubmit(e) {
    e.preventDefault();
    let that = this;
    debugger;
    this.props
      .searchQuery(this.state)
      .then(() =>
        this.props.match.url.includes("search-results")
          ? undefined
          : this.props.history.push(`/search-restaurants`)
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
    let label = parseInt(this.state.res.party_size) === 1 ? "person" : "people";

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
    debugger;
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
              {this.state.showList ? this.renderAutoList() : null}
            </div>
            <button className="readon">Let's go</button>
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(SearchForm);
