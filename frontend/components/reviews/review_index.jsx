import React from "react";
import { withRouter } from "react-router-dom";
import ReviewIndexItem from "./review_index_item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: false
    };
    this.is_Mounted = false;
    this.renderFilters = this.renderFilters.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.sortList = this.sortList.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.sort = this.sort.bind(this);
    this.renderSort = this.renderSort.bind(this);
    this.demoReview = this.demoReview.bind(this);
    this.handleNewReview = this.handleNewReview.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    // this.props.fetchReviews(this.props.match.params.restaurantId);
    this.is_Mounted = true;
    this.props.loadingDone();
  }

  componentWillUnmount() {
    this.props.clearReviews();
  }

  componentDidUpdate(prevProps) {
    // if (
    //   prevProps.match.params.restaurantId !==
    //   this.props.match.params.restaurantId
    // ) {
    //   this.props.fetchReviews(this.props.match.params.restaurantId);
    // }
  }

  sort(arr, type) {
    switch (type) {
      case "Newest":
        arr = arr.sort((a, b) => (a.id >= b.id ? 1 : -1));
        return arr;
      case "Oldest":
        arr = arr.sort((a, b) => (a.id < b.id ? 1 : -1));
        return arr;
      case "Top Rated":
        arr = arr.sort((a, b) => (a.total_rating > b.total_rating ? 1 : -1));
        return arr;
      case "Lowest Rated":
        arr = arr.sort((a, b) => (a.total_rating < b.total_rating ? 1 : -1));
        return arr;
      default:
        return arr;
    }
  }
  handleSort(sortOption) {
    return () => {
      this.setState({
        sort: sortOption
      });
    };
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  toggleDropdown() {
    this.state.showDropdown
      ? this.setState({ showDropdown: false })
      : this.setState({ showDropdown: true });
  }

  sortList() {
    let sortOptions = ["Newest", "Oldest", "Top Rated", "Lowest Rated"];
    let sortItems = sortOptions.map((option, idx) => {
      return (
        <li onClick={this.handleSort(sortOptions[idx])} key={idx}>
          <span className="icon">
            <FontAwesomeIcon icon="circle" />
          </span>
          {option}
        </li>
      );
    });
    return this.state.showDropdown ? <ul>{sortItems}</ul> : null;
  }

  renderFilters() {
    if (this.props.filter) {
      let activeFilters = Object.values(this.props.filter);
      if (activeFilters.length > 0) {
        let filterItems = activeFilters.map((filter, idx) => {
          return (
            <button
              key={filter.type}
              className="filter-tag"
              onClick={() => this.props.clearAllFilters()}
            >
              <span className="icon">
                <FontAwesomeIcon icon="check-square" />
              </span>
              {filter.val} {filter.val > 1 ? "stars" : "star"}
            </button>
          );
        });
        return (
          <>
            {filterItems.length > 0 ? (
              <div className="filter-bar">
                <p>Filters</p>
                <div className="filter-tags">{filterItems}</div>
              </div>
            ) : null}
          </>
        );
      }
    }
  }
  demoReview() {
    return {
      restaurant_id: parseInt(this.props.match.params.restaurantId),
      food_rating: Math.floor(Math.random() * (+5 - +1) + +1),
      service_rating: Math.floor(Math.random() * (+5 - +1) + +1),
      value_rating: Math.floor(Math.random() * (+5 - +1) + +1),
      noise_level: Math.floor(Math.random() * (+5 - +1) + +1),
      ambience_rating: Math.floor(Math.random() * (+5 - +1) + +1),
      body: "This is a randomly generated review"
    };
  }
  renderSort() {
    return (
      <div className="sort-dropdown">
        <p>Sort by</p>
        <button onClick={this.toggleDropdown}>
          <span className="sort-value">
            {this.state.sort ? this.state.sort : null}
          </span>
          <span className="icon">
            {this.state.showDropdown ? (
              <FontAwesomeIcon icon="chevron-up" />
            ) : (
              <FontAwesomeIcon icon="chevron-down" />
            )}
          </span>
          {this.sortList()}
        </button>
      </div>
    );
  }
  renderErrors() {
    const errors = this.props.errors;
    if (errors.length > 0) {
      return (
        <ul className="errors">
          {errors.map((error, i) => (
            <li className="error" key={`error-${i}`}>
              {error.includes("User")
                ? error
                    .split(" ")
                    .slice(1)
                    .join(" ")
                : error}
            </li>
          ))}
        </ul>
      );
    }
  }
  handleNewReview(buttonType) {
    let { currentUser, openModal, createReview } = this.props;

    if (currentUser) {
      if (buttonType === "addReview") {
        openModal("review");
      } else if (buttonType === "demoReview") {
        createReview(this.demoReview());
      }
    } else {
      openModal("login");
    }
  }
  render() {
    let { reviews, filter } = this.props;
    let reviewItems = null;
    let reviewList = null;
    if (this.is_Mounted && reviews.length > 0) {
      if (this.state.sort) {
        reviews = this.sort(reviews, this.state.sort);
      }
      if (Object.values(filter).length > 0) {
        let filterItem = Object.values(filter)[0];
        if (filterItem.type === "review") {
          let filteredReviewItems = [];
          for (let i = 0; i < reviews.length; i++) {
            let review = reviews[i];
            if (review.total_rating === parseInt(filterItem.val)) {
              filteredReviewItems.push(review);
            }
          }
          reviewItems = filteredReviewItems.map(review => {
            return (
              <ReviewIndexItem
                deleteReview={this.props.deleteReview}
                currentUser={this.props.currentUser}
                review={review}
                author={this.props.users[review.user_id]}
                key={review.id}
              />
            );
          });
        }
      } else {
        reviewItems = reviews
          .slice(0)
          .reverse()
          .map(review => {
            return (
              <ReviewIndexItem
                deleteReview={this.props.deleteReview}
                currentUser={this.props.currentUser}
                review={review}
                author={this.props.users[review.user_id]}
                key={review.id}
              />
            );
          });
      }
      reviewList = <ul className="reviews">{reviewItems}</ul>;
    }

    return (
      <>
        <div className="review-container">
          <div className="review-toolbar">
            <div className="review-filter-sort">{this.renderSort()}</div>
            <button
              onClick={() => this.handleNewReview("addReview")}
              className="readon"
            >
              <span className="icon">
                <FontAwesomeIcon icon="plus" />
              </span>
              Add Review
            </button>
            <button
              className="readon demo"
              onClick={() => this.handleNewReview("demoReview")}
            >
              <span className="icon">
                <FontAwesomeIcon icon="bolt" />
              </span>
              Add Quick Review
            </button>
          </div>
          {this.renderFilters()}
          {this.renderErrors()}
          {reviewList}
        </div>
      </>
    );
  }
}

export default withRouter(ReviewIndex);
