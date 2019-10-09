import React from "react";
import RestaurantQuickLinks from "./restaurant_quicklinks";
import RestaurantGallery from "../restaurant_gallery/restaurant_gallery";
import RestaurantStars from "../restaurant_ratings/rating_stars";
import ReviewIndex from "../../reviews/review_index_container";
import RestaurantReviews from "../restaurant_ratings/restaurant_reviews";
import RestaurantHeader from "./restaurant_header";
import CreateRestaurantForm from "../restaurant_forms/create_form_container";
import { Route, Link } from "react-router-dom";
const RestaurantMain = props => {
  const { restaurant } = props;
  // const ref = createRef();
  // const handleClick = () =>
  //       ref.current.scrollIntoView({
  //         behavior: 'smooth',
  //         block: 'start',
  // });

  return (
    <>
      <main class="restaurant-content">
        <RestaurantQuickLinks />
        <section class="restaurant-content-inner">
          <RestaurantHeader restaurant={restaurant} />

          <p>{restaurant.description}</p>
          <RestaurantGallery restaurant={restaurant} />
          <RestaurantReviews restaurant={restaurant} />
        </section>
      </main>
    </>
  );
};

export default RestaurantMain;
