import React from "react";

class RestaurantBars extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const targetVal = e.target.dataset.val;
    const { filter, receiveFilter, clearAllFilters } = this.props;
     ;
    Object.values(this.props.filter).length > 0
      ? filter.review.val === targetVal
        ? clearAllFilters()
        : receiveFilter(targetVal, "review")
      : receiveFilter(targetVal, "review");
  }
  render() {
    let fillFive,
      fillFour,
      fillThree,
      fillTwo,
      fillOne,
      amountFive,
      amountFour,
      amountThree,
      amountTwo,
      amountOne = null;
    const { restaurant } = this.props;
    if (restaurant.star_ratings) {
      const totalReviews = restaurant.total_reviews;
      const FiveStarsPercent =
        (restaurant.star_ratings["5"] / totalReviews) * 100.0;
      const FourStarsPercent =
        (restaurant.star_ratings["4"] / totalReviews) * 100.0;
      const ThreeStarsPercent =
        (restaurant.star_ratings["3"] / totalReviews) * 100.0;
      const TwoStarsPercent =
        (restaurant.star_ratings["2"] / totalReviews) * 100.0;
      const OneStarPercent =
        (restaurant.star_ratings["1"] / totalReviews) * 100.0;

      fillFive = {
        width: `${FiveStarsPercent}%`
      };
      fillFour = {
        width: `${FourStarsPercent}%`
      };
      fillThree = {
        width: `${ThreeStarsPercent}%`
      };
      fillTwo = {
        width: `${TwoStarsPercent}%`
      };
      fillOne = {
        width: `${OneStarPercent}%`
      };
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
          <div
            className="stat-bar"
            data-amount={amountFive}
            data-val="5"
            onClick={this.handleClick}
          >
            <div
              className="inner-stat-bar"
              style={fillFive}
              data-amount={amountFive}
            ></div>
          </div>
        </div>
        <div className="stat-bar-container">
          <span>4</span>
          <div
            className="stat-bar"
            data-amount={amountFour}
            data-val="4"
            onClick={this.handleClick}
          >
            <div
              className="inner-stat-bar"
              style={fillFour}
              data-amount={amountFour}
            ></div>
          </div>
        </div>
        <div className="stat-bar-container">
          <span>3</span>
          <div
            className="stat-bar"
            data-amount={amountThree}
            data-val="3"
            onClick={this.handleClick}
          >
            <div
              className="inner-stat-bar"
              style={fillThree}
              data-val="3"
              data-amount={amountThree}
            ></div>
          </div>
        </div>
        <div className="stat-bar-container">
          <span>2</span>
          <div
            className="stat-bar"
            data-amount={amountTwo}
            data-val="2"
            onClick={this.handleClick}
          >
            <div
              className="inner-stat-bar"
              style={fillTwo}
              data-amount={amountTwo}
            ></div>
          </div>
        </div>
        <div className="stat-bar-container">
          <span>1</span>
          <div
            className="stat-bar"
            data-amount={amountOne}
            data-val="1"
            onClick={this.handleClick}
          >
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
