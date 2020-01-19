import React from "react";

class RestaurantBars extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.clearAllFilters();
  }
  handleClick = (val) => {
    const { filter, receiveFilter, clearAllFilters } = this.props;
    return () => Object.values(filter).length > 0 ? filter.review.val === val ? clearAllFilters() : receiveFilter(val, "review") : receiveFilter(val, "review");
  }
  render() {
    let [fillFive, fillFour, fillThree, fillTwo, fillOne, amountFive, amountFour, amountThree, amountTwo, amountOne] = Array(10).fill(null);
    const { restaurant } = this.props;
    if (restaurant.star_ratings) {
      const totalReviews = restaurant.total_reviews;
      const FiveStarsPercent = (restaurant.star_ratings["5"] / totalReviews) * 100.0;
      const FourStarsPercent = (restaurant.star_ratings["4"] / totalReviews) * 100.0;
      const ThreeStarsPercent = (restaurant.star_ratings["3"] / totalReviews) * 100.0;
      const TwoStarsPercent = (restaurant.star_ratings["2"] / totalReviews) * 100.0;
      const OneStarPercent = (restaurant.star_ratings["1"] / totalReviews) * 100.0;

      fillFive = { width: `${FiveStarsPercent}%` };
      fillFour = { width: `${FourStarsPercent}%` };
      fillThree = { width: `${ThreeStarsPercent}%` };
      fillTwo = { width: `${TwoStarsPercent}%` };
      fillOne = { width: `${OneStarPercent}%` };
      amountFive = restaurant.star_ratings["5"];
      amountFour = restaurant.star_ratings["4"];
      amountThree = restaurant.star_ratings["3"];
      amountTwo = restaurant.star_ratings["2"];
      amountOne = restaurant.star_ratings["1"];
    }
    return (
      <>
        <div className="stat-bar-container">
          <span>5</span>
          <div className="stat-bar" onClick={this.handleClick(5)}>
            <div
              className="inner-stat-bar"
              data-amount={amountFive}
              style={fillFive}
            ></div>
          </div>
        </div>
        <div className="stat-bar-container">
          <span>4</span>
          <div className="stat-bar" onClick={this.handleClick(4)}>
            <div
              className="inner-stat-bar"
              data-amount={amountFour}
              style={fillFour}
            ></div>
          </div>
        </div>
        <div className="stat-bar-container">
          <span>3</span>
          <div className="stat-bar" onClick={this.handleClick(3)}>
            <div
              className="inner-stat-bar"
              data-amount={amountThree}
              style={fillThree}
            ></div>
          </div>
        </div>
        <div className="stat-bar-container">
          <span>2</span>
          <div className="stat-bar" onClick={this.handleClick(2)}>
            <div
              className="inner-stat-bar"
              data-amount={amountTwo}
              style={fillTwo}
            ></div>
          </div>
        </div>
        <div className="stat-bar-container">
          <span>1</span>
          <div className="stat-bar" data-val="1" onClick={this.handleClick(1)}>
            <div
              className="inner-stat-bar"
              style={fillOne}
              data-amount={amountOne}
            ></div>
          </div>
        </div>
      </>
    );
  }
}

export default RestaurantBars;
