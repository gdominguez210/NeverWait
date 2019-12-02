import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import renderLoader from "../loader/loader";
import { library, toHtml } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { isThisSecond } from "date-fns";
import { receiveFilter } from "../../actions/filter_actions";

library.add(fas);
class SearchSidebarForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showActivePriceRange: false,
      showActiveRating: false
      // query: this.props.search.query,
      // filter: this.props.filter
    };
    this.handleClick = this.handleClick.bind(this);
    this.is_Mounted = false;
    this.renderFilterBar = this.renderFilterBar.bind(this);
  }
  componentDidMount() {
    this.is_Mounted = true;
  }

  componentDidUpdate(prevProps) {
    const { searchQuery, search, filter } = this.props;
    if (this.is_Mounted) {
      if (JSON.stringify(prevProps.filter) !== JSON.stringify(filter)) {
        const filters = Object.values(filter);
        let filterTerms = {};

        for (let i = 0; i < filters.length; i++) {
          const filterItem = filters[i];

          filterTerms[filterItem.type] = filterItem.val;
        }
        const { name } = search.query;
         ;
        let searchTerm = Object.assign({}, { name }, filterTerms);
         ;
        searchQuery({
          query: searchTerm,
          res: search.res
        });
      }
    }
  }

  renderFilterBar() {
    const { filter } = this.props;
    return this.state.showActivePriceRange || this.state.showActiveRating ? (
      <div className="filter-bar">
        <h2>Filters:</h2>
        {filter.price_range ? (
          <div>
            <span class="tag">Price Range: {filter.price_range}</span>
          </div>
        ) : null}
        {filter.rating ? (
          <div>
            <span class="tag">Rating: {filter.rating}</span>
          </div>
        ) : null}
      </div>
    ) : null;
  }
  handleClick(e) {
    const { receiveFilter, clearFilter, filter } = this.props;
    if (e.target.dataset.rating) {
      let rating = e.target.dataset.rating;
       ;
      let filterRating = filter.rating || {};
       ;
      if (filterRating.val === rating) {
        this.setState(
          {
            showActiveRating: false
          },
          () => {
            clearFilter("rating");
          }
        );
      } else {
        this.setState(
          {
            showActiveRating: true
          },
          () => {
            receiveFilter(rating, "rating");
          }
        );
      }
    } else if (e.target.dataset.price_range) {
      let priceRange = e.target.dataset.price_range;
      let filterPriceRange = filter.price_range || {};

      if (filterPriceRange.val === priceRange) {
        this.setState(
          {
            filter,
            showActivePriceRange: false
          },
          () => {
            clearFilter("price_range");
          }
        );
      } else {
        this.setState(
          {
            showActivePriceRange: true
          },
          () => {
            receiveFilter(priceRange, "price_range");
          }
        );
      }
    }
  }

  ratings() {
    const { filter } = this.props;
    const { showActiveRating } = this.state;
    let filterRating = filter.rating || {};
    return (
      <div className="rating-options">
        <p>
          <span className="icon">
            <FontAwesomeIcon icon="star" />
          </span>
          Rating
        </p>
        <div className="ratings-button-container">
          <button
            onClick={e => this.handleClick(e)}
            data-rating="5"
            className={
              showActiveRating && filterRating.val === "5" ? "active" : null
            }
          >
            5 Stars
          </button>
          <button
            onClick={e => this.handleClick(e)}
            data-rating="4"
            className={
              showActiveRating && filterRating.val === "4" ? "active" : null
            }
          >
            4 Stars
          </button>
          <button
            onClick={e => this.handleClick(e)}
            data-rating="3"
            className={
              showActiveRating && filterRating.val === "3" ? "active" : null
            }
          >
            3 Stars
          </button>
          <button
            onClick={e => this.handleClick(e)}
            data-rating="2"
            className={
              showActiveRating && filterRating.val === "2" ? "active" : null
            }
          >
            2 Stars
          </button>
          <button
            onClick={e => this.handleClick(e)}
            data-rating="1"
            className={
              showActiveRating && filterRating.val === "1" ? "active" : null
            }
          >
            1 Star
          </button>
        </div>
      </div>
    );
  }

  priceRanges() {
    const { filter } = this.props;
    const { showActivePriceRange } = this.state;
    let filterPriceRange = filter.price_range || {};
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
              showActivePriceRange && filterPriceRange.val === "cheap"
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
              showActivePriceRange && filterPriceRange.val === "moderate"
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
              showActivePriceRange && filterPriceRange.val === "pricey"
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
  render() {
    return (
      <div className="filter-options">
        {this.priceRanges()}
        {this.ratings()}
      </div>
    );
  }
}

export default SearchSidebarForm;
