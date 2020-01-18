import React, { useEffect } from "react";
import RestaurantFeaturedItem from "./restaurant_featured_item";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

export const RestaurantFeatured = props => {

  useEffect((props) => {
    props.fetchFeaturedRestaurants();
  });

  const { restaurants } = props;
  let restaurantItems = null;
  if (restaurants) {
    restaurantItems = restaurants.map(restaurant => (
      <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
        <RestaurantFeaturedItem restaurant={restaurant} />
      </CSSTransition>
    ));
  }

  return (
    <>
      <section className="featured-restaurants">
        <div className="featured-header">
          <h2>Featured Restaurants</h2>
          <Link to="/restaurants" className="highlight">
            View All
            </Link>
        </div>
        <CSSTransition
          in={true}
          appear={true}
          timeout={300}
          classNames="fade"
        >
          <ul className="restaurants-container">{restaurantItems}</ul>
        </CSSTransition>
      </section>
    </>
  );
}
