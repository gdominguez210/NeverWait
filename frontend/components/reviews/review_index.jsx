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

    return <>{output}</>;
  }
}

export default withRouter(ReviewIndex);
