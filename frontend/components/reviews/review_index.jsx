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
    this.handleClick = this.handleClick.bind(this);
    this.sort = this.sort.bind(this);
    this.renderSort = this.renderSort.bind(this);
  }

  componentDidMount() {
    // this.props.fetchReviews(this.props.match.params.restaurantId);
    this.is_Mounted = true;
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
     ;
    switch (type) {
      case "newest":
        arr = arr.sort((a, b) => (a.id > b.id ? 1 : -1));
        return arr;
      case "oldest":
        arr = arr.sort((a, b) => (a.id < b.id ? 1 : -1));
        return arr;
      case "top-rated":
        arr = arr.sort((a, b) => (a.total_rating < b.total_rating ? 1 : -1));
         ;
        return arr;
      case "lowest-rated":
        arr = arr.sort((a, b) => (a.total_rating > b.total_rating ? 1 : -1));
        return arr;
      default:
        return arr;
    }
  }

  renderFilters() {
    if (this.props.filter && this.props.filter.filterType === "Review") {
      return (
        <div className="filters-container">
          <p>Filters</p>
          <div class="filter-tags">
            <button className="filter-tag" onClick={this.props.clearFilter}>
              <span className="icon">
                <FontAwesomeIcon icon="check-square" />
              </span>
              {this.props.filter.filter}{" "}
              {this.props.filter.filter === 1 ? "star" : "stars"}
            </button>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
  handleClick(e) {
    let sortOption = e.target.dataset.sortoption;
    this.setState({
      sort: sortOption
    });
  }
  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  toggleDropdown() {
     ;
    if (this.state.showDropdown) {
      this.setState({ showDropdown: false });
    } else {
      this.setState({ showDropdown: true });
    }
  }

  sortList() {
    return this.state.showDropdown ? (
      <ul>
        <li data-sortoption="newest" onClick={this.handleClick}>
          <span className="icon">
            <FontAwesomeIcon icon="circle" />
          </span>
          Newest
        </li>
        <li data-sortoption="oldest" onClick={this.handleClick}>
          <span className="icon">
            <FontAwesomeIcon icon="circle" />
          </span>
          Oldest
        </li>
        <li data-sortoption="top-rated" onClick={this.handleClick}>
          <span className="icon">
            <FontAwesomeIcon icon="circle" />
          </span>
          Top Rated
        </li>
        <li data-sortoption="lowest-rated" onClick={this.handleClick}>
          <span className="icon">
            <FontAwesomeIcon icon="circle" />
          </span>
          Lowest Rated
        </li>
      </ul>
    ) : null;
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
  render() {
    let { reviews, currentUser, openModal, filter } = this.props;
    let reviewItems = null;
    let reviewList = null;
    let addReview = null;
     ;
    if (currentUser) {
      addReview = (
        <>
          <button onClick={() => openModal("review")} className="readon">
            <span className="icon">
              <FontAwesomeIcon icon="plus" />
            </span>
            Add Review
          </button>
        </>
      );
    }
    if (this.is_Mounted) {
      if (this.state.sort) {
         ;
        reviews = this.sort(reviews, this.state.sort);
         ;
      }
      if (filter && filter.filterType === "Review") {
        let filteredReviewItems = [];
        for (let i = 0; i < reviews.length; i++) {
          let review = reviews[i];
          if (review.total_rating === filter.filter) {
            filteredReviewItems.push(review);
          }
        }
         ;
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
         ;
      } else {
        reviewItems = reviews.map(review => {
           ;
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
            <div className="review-filter-sort">
              {this.renderSort()}
              {this.renderFilters()}
            </div>
            {addReview}
          </div>
          {reviewList}
        </div>
      </>
    );
  }
}

export default withRouter(ReviewIndex);
