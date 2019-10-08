import React from "react";
import { withRouter } from "react-router-dom";
import ReviewIndexItem from "./review_index_item";
class ReviewIndex extends React.Component {
  constructor(props) {
    super(props);
    debugger;
  }

  componentDidMount() {
    debugger;
    this.props.fetchReviews(this.props.match.params.restaurantId);
    debugger;
  }

  render() {
    const { reviews, currentUser, openModal } = this.props;
    let reviewItems = null;
    let reviewList = null;
    let addReview = null;

    if (currentUser) {
      debugger;
      addReview = (
        <>
          <button onClick={() => openModal("review")} className="readon">
            Add Review
          </button>
        </>
      );
    }
    if (reviews) {
      reviewItems = reviews.map(review => <ReviewIndexItem review={review} />);
      reviewList = <ul class="reviews">{reviewItems}</ul>;
    }

    return (
      <>
        {addReview}
        {reviewList}
      </>
    );
  }
}

export default withRouter(ReviewIndex);
