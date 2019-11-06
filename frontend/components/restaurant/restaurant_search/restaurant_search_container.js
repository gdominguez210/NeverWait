import { connect } from "react-redux";
import { RestaurantSearchIndex } from "./restaurant_search_index";
import { fetchSearchedRestaurants } from "../../../actions/restaurants_actions";

const msp = state => {
  const { restaurants } = state.entities;
  const { search } = state.ui;
  return {
    restaurants: Object.values(restaurants),
    currentUser: state.entities.users[state.session.id],
    search
  };
};

const mdp = dispatch => ({
  fetchSearchedRestaurants: data => dispatch(fetchSearchedRestaurants(data))
});

export default connect(
  msp,
  mdp
)(RestaurantSearchIndex);
