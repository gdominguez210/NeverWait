import { connect } from "react-redux";
import Carousel from "./carousel";
import {
  fetchFeaturedRestaurants,
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
  fetchFeaturedRestaurants: () => dispatch(fetchFeaturedRestaurants())
});

export default connect(msp, mdp)(Carousel);
