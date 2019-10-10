import React from "react";
import { withRouter } from "react-router-dom";
import ReviewIndexItem from "./review_index_item";
class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchReviews(this.props.match.params.restaurantId);
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
    const { reviews, currentUser, openModal } = this.props;
    let reviewItems = null;
    let reviewList = null;
    let addReview = null;

    if (currentUser) {
      addReview = (
        <>
          <button onClick={() => openModal("review")} className="readon">
            Add Review
          </button>
        </>
      );
    }
    if (reviews) {
      reviewItems = reviews.map(review => (
        <ReviewIndexItem
          deleteReview={this.props.deleteReview}
          currentUser={this.props.currentUser}
          review={review}
          author={this.props.users[review.user_id]}
          key={review.id}
        />
      ));
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
