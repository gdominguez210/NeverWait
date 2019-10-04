import React from "react";
import RestaurantQuickLinks from "./restaurant_quicklinks";
import RestaurantGallery from "../restaurant_gallery/restaurant_gallery";
import RestaurantStars from "../restaurant_ratings/rating_stars";
const RestaurantMain = props => {
  const { restaurant } = props;
  const ref = createRef();
  const handleClick = () =>
        ref.current.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
  });
  
  return (
    <>
      <main class="restaurant-content">
        <RestaurantQuickLinks />
        <section class="restaurant-content-inner">
          <h1 id="overview">{restaurant.name}</h1>
         <RestaurantStars />
          <p>{restaurant.description}</p>
          <RestaurantGallery />
        </section>
      </main>
    </>
  );
};

export default RestaurantMain;
