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
    const { reviews } = this.props;
    let reviewItems = null;
    let output = null;

    if (reviews) {
      reviewItems = reviews.map(review => <ReviewIndexItem review={review} />);
      output = <ul class="reviews">{reviewItems}</ul>;
    }

    return (
      <>
        <h2>Reviews</h2>
        <p>
          <strong>Overall ratings and reviews</strong>
        </p>
        <p>
          Reviews can only be made by diners who have eaten at this restaurant
        </p>
        {output}
      </>
    );
  }
}

export default withRouter(ReviewIndex);
