import React from "react";
import { receiveFilter } from "../../../actions/filter_actions";
const RestaurantBars = props => {
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
  if (props.restaurant.star_ratings) {
    const totalReviews = props.restaurant.total_reviews;
    const FiveStarsPercent =
      (props.restaurant.star_ratings["5"] / totalReviews) * 100.0;
    const FourStarsPercent =
      (props.restaurant.star_ratings["4"] / totalReviews) * 100.0;
    const ThreeStarsPercent =
      (props.restaurant.star_ratings["3"] / totalReviews) * 100.0;
    const TwoStarsPercent =
      (props.restaurant.star_ratings["2"] / totalReviews) * 100.0;
    const OneStarPercent =
      (props.restaurant.star_ratings["1"] / totalReviews) * 100.0;

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
    amountFive = props.restaurant.star_ratings["5"];
    amountFour = props.restaurant.star_ratings["4"];
    amountThree = props.restaurant.star_ratings["3"];
    amountTwo = props.restaurant.star_ratings["2"];
    amountOne = props.restaurant.star_ratings["1"];
  }
  return (
    <>
      <div className="stat-bar-container">
        <span>5</span>
        <div
          className="stat-bar"
          data-amount={amountFive}
          onClick={() => dispatch(receiveFilter(5, "Review"))}
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
          onClick={() => dispatch(receiveFilter(4, "Review"))}
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
          onClick={() => dispatch(receiveFilter(3, "Review"))}
        >
          <div
            className="inner-stat-bar"
            style={fillThree}
            data-amount={amountThree}
          ></div>
        </div>
      </div>
      <div className="stat-bar-container">
        <span>2</span>
        <div
          className="stat-bar"
          data-amount={amountTwo}
          onClick={() => dispatch(receiveFilter(2, "Review"))}
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
          onClick={() => dispatch(receiveFilter(1, "Review"))}
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
};

export default RestaurantBars;
