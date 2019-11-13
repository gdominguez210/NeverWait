import { connect } from "react-redux";
import { RestaurantFeatured } from "./restaurant_featured";
import {
  fetchFeaturedRestaurants,
  fetchRestaurants,
  clearRestaurants
} from "../../actions/restaurants_actions";

const msp = state => {
  const { restaurants } = state.entities;
  return {
    restaurants: Object.values(restaurants)
  };
};

const mdp = dispatch => ({
  clearRestaurants: () => dispatch(clearRestaurants()),
  fetchFeaturedRestaurants: () => dispatch(fetchFeaturedRestaurants()),
  fetchRestaurants: () => dispatch(fetchFeaturedRestaurants())
});

export default connect(msp, mdp)(RestaurantFeatured);
