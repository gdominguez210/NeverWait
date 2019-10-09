import { connect } from "react-redux";
import { RestaurantIndex } from "./restaurant_index";
import {
  fetchRestaurants,
  deleteRestaurant
} from "../../actions/restaurants_actions";

const msp = state => {
  const { restaurants } = state.entities;
  debugger;
  return {
    restaurants: Object.values(restaurants),
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => ({
  fetchRestaurants: () => dispatch(fetchRestaurants()),
  deleteRestaurant: id => dispatch(deleteRestaurant(id))
});

export default connect(
  msp,
  mdp
)(RestaurantIndex);
