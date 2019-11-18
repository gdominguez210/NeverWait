import React from "react";
import { withRouter } from "react-router-dom";
import ReviewIndexItem from "./review_index_item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
    this.is_Mounted = false;
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

  render() {
    const { reviews, currentUser, openModal, filter } = this.props;
    let reviewItems = null;
    let reviewList = null;
    let addReview = null;
    debugger;
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
      if (filter && filter.filterType === "Review") {
        let filteredReviewItems = [];
        // filteredReviewItems = reviews.filter(review => {
        //   if (review.total_rating === this.filter) {
        //     return review;
        //   }
        // }, filter);
        for (let i = 0; i < reviews.length; i++) {
          let review = reviews[i];
          if (review.total_rating === filter.filter) {
            filteredReviewItems.push(review);
          }
        }
        debugger;
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
        debugger;
      } else {
        reviewItems = reviews.map(review => {
          debugger;
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
          {addReview}
          {reviewList}
        </div>
      </>
    );
  }
}

export default withRouter(ReviewIndex);
