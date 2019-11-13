import React from "react";

const RestaurantBars = props => {
  let fillFive,
    fillFour,
    fillThree,
    fillTwo,
    fillOne = null;
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
  }
  return (
    <>
      <div className="stat-bar-container">
        <span>5</span>
        <div className="stat-bar">
          <div className="inner-stat-bar" style={fillFive}></div>
        </div>
      </div>
      <div className="stat-bar-container">
        <span>4</span>
        <div className="stat-bar">
          <div className="inner-stat-bar" style={fillFour}></div>
        </div>
      </div>
      <div className="stat-bar-container">
        <span>3</span>
        <div className="stat-bar">
          <div className="inner-stat-bar" style={fillThree}></div>
        </div>
      </div>
      <div className="stat-bar-container">
        <span>2</span>
        <div className="stat-bar">
          <div className="inner-stat-bar" style={fillTwo}></div>
        </div>
      </div>
      <div className="stat-bar-container">
        <span>1</span>
        <div className="stat-bar">
          <div className="inner-stat-bar" style={fillOne}></div>
        </div>
      </div>
    </>
  );
};

export default RestaurantBars;
