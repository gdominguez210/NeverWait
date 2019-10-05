import React from "react";

const RestaurantBanner = props => {
  const { restaurant } = props;
  debugger;
  let banner;
  if (props.restaurant.image_url) {
    banner = {
      backgroundImage: `url(${props.restaurant.image_url})`
    };
  } else {
    banner = {};
  }

  return (
    <>
      <section className="restaurant-featured-image">
        <div className="featured-img" style={banner}></div>
      </section>
    </>
  );
};

export default RestaurantBanner;
