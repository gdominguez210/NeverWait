import React from "react";

const RestaurantBars = props => {
  let fillFive,
    fillFour,
    fillThree,
    fillTwo,
    fillOne = null;
  if (props.restaurant.total_reviews) {
    const totalReviews = props.restaurant.total_reviews;
    const FiveStarsPercent =
      (props.restaurant.star_ratings.five_stars / totalReviews) * 100.0;
    const FourStarsPercent =
      (props.restaurant.star_ratings.four_stars / totalReviews) * 100.0;
    const ThreeStarsPercent =
      (props.restaurant.star_ratings.three_stars / totalReviews) * 100.0;
    const TwoStarsPercent =
      (props.restaurant.star_ratings.two_stars / totalReviews) * 100.0;
    const OneStarPercent =
      (props.restaurant.star_ratings.one_star / totalReviews) * 100.0;

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
        5
        <div className="stat-bar">
          <div className="inner-stat-bar" style={fillFive}></div>
        </div>
      </div>
      <div className="stat-bar-container">
        4
        <div className="stat-bar">
          <div className="inner-stat-bar" style={fillFour}></div>
        </div>
      </div>
      <div className="stat-bar-container">
        3
        <div className="stat-bar">
          <div className="inner-stat-bar" style={fillThree}></div>
        </div>
      </div>
      <div className="stat-bar-container">
        2
        <div className="stat-bar">
          <div className="inner-stat-bar" style={fillTwo}></div>
        </div>
      </div>
      <div className="stat-bar-container">
        1
        <div className="stat-bar">
          <div className="inner-stat-bar" style={fillOne}></div>
        </div>
      </div>
    </>
  );
};

export default RestaurantBars;
