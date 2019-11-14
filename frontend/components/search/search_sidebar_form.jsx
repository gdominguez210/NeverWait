import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import renderLoader from "../loader/loader";
import { library, toHtml } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { isThisSecond } from "date-fns";

library.add(fas);
class SearchSidebarForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: this.props.search.query
    };
    this.handleClick = this.handleClick.bind(this);
    this.is_Mounted = false;
    this.renderFilterBar = this.renderFilterBar.bind(this);
  }
  componentDidMount() {
    this.is_Mounted = true;
  }

  componentDidUpdate(prevProps) {
    if (this.is_Mounted) {
      if (prevProps.search.query !== this.props.search.query) {
        this.setState({
          query: this.props.search.query
        });
      }
    }
  }

  renderFilterBar() {
    return this.state.showActivePriceRange || this.state.showActiveRating ? (
      <div className="filter-bar">
        <h2>Filters:</h2>
        {this.state.query.price_range ? (
          <div>
            <span class="tag">Price Range: {this.state.query.price_range}</span>
          </div>
        ) : null}
        {this.state.query.rating ? (
          <div>
            <span class="tag">Rating: {this.state.query.rating}</span>
          </div>
        ) : null}
      </div>
    ) : null;
  }
  handleClick(e) {
    const query = { ...this.state.query };
    const { searchQuery, search } = this.props;
    // let showActiveRating = false;
    if (e.target.dataset.rating) {
      debugger;
      query.rating === e.target.dataset.rating
        ? (query.rating = false)
        : (query.rating = e.target.dataset.rating);
      this.setState(
        {
          query,
          showActiveRating: true
        },
        () => searchQuery({ query: this.state.query, res: search.res })
      );
    } else if (e.target.dataset.price_range) {
      debugger;
      query.price_range === e.target.dataset.price_range
        ? (query.price_range = false)
        : (query.price_range = e.target.dataset.price_range);
      this.setState(
        {
          query,
          showActivePriceRange: true
        },
        () => searchQuery({ query: this.state.query, res: search.res })
      );
    }
  }

  ratings() {
    return (
      <div className="rating-options">
        <p>
          <span className="icon">
            <FontAwesomeIcon icon="star" />
          </span>
          Rating
        </p>
        <button
          onClick={e => this.handleClick(e)}
          data-rating="5"
          className={
            this.state.showActiveRating && this.state.query.rating === "5"
              ? "active"
              : null
          }
        >
          5 Stars
        </button>
        <button
          onClick={e => this.handleClick(e)}
          data-rating="4"
          className={
            this.state.showActiveRating && this.state.query.rating === "4"
              ? "active"
              : null
          }
        >
          4 Stars
        </button>
        <button
          onClick={e => this.handleClick(e)}
          data-rating="3"
          className={
            this.state.showActiveRating && this.state.query.rating === "3"
              ? "active"
              : null
          }
        >
          3 Stars
        </button>
        <button
          onClick={e => this.handleClick(e)}
          data-rating="2"
          className={
            this.state.showActiveRating && this.state.query.rating === "2"
              ? "active"
              : null
          }
        >
          2 Stars
        </button>
        <button
          onClick={e => this.handleClick(e)}
          data-rating="1"
          className={
            this.state.showActiveRating && this.state.query.rating === "1"
              ? "active"
              : null
          }
        >
          1 Star
        </button>
      </div>
    );
  }
  map() {}
  priceRanges() {
    return (
      <div className="price-options">
        <p>
          <span className="icon">
            <FontAwesomeIcon icon="money-bill" />
          </span>{" "}
          Price{" "}
        </p>
        <div className="price-buttons">
          <button
            onClick={e => this.handleClick(e)}
            data-price_range="cheap"
            className={
              this.state.showActivePriceRange &&
              this.state.query.price_range === "cheap"
                ? "active"
                : null
            }
          >
            <span className="icon">
              <FontAwesomeIcon icon="dollar-sign" />
            </span>
          </button>
          <button
            onClick={e => this.handleClick(e)}
            data-price_range="moderate"
            className={
              this.state.showActivePriceRange &&
              this.state.query.price_range === "moderate"
                ? "active"
                : null
            }
          >
            <span className="icon">
              <FontAwesomeIcon icon="dollar-sign" />
            </span>
            <span className="icon">
              <FontAwesomeIcon icon="dollar-sign" />
            </span>
          </button>
          <button
            onClick={e => this.handleClick(e)}
            data-price_range="pricey"
            className={
              this.state.showActivePriceRange &&
              this.state.query.price_range === "pricey"
                ? "active"
                : null
            }
          >
            <span className="icon">
              <FontAwesomeIcon icon="dollar-sign" />
            </span>
            <span className="icon">
              <FontAwesomeIcon icon="dollar-sign" />
            </span>
            <span className="icon">
              <FontAwesomeIcon icon="dollar-sign" />
            </span>
          </button>
        </div>
      </div>
    );
  }

  neighborHoods() {}

  render() {
    return (
      <div className="filter-options">
        {this.priceRanges()}
        {this.ratings()}
        {/* {this.renderFilterBar()} */}
      </div>
    );
  }
}

export default SearchSidebarForm;
