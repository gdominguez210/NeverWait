import { connect } from "react-redux";
import RestaurantSearchIndex from "./restaurant_search_index";
import {
  fetchSearchedRestaurants,
  clearRestaurants
} from "../../../actions/restaurants_actions";
import { findTable } from "../../../actions/reservation_actions";
import { openModal } from "../../../actions/modal_actions";
const msp = state => {
  const { restaurants } = state.entities;
  const { search } = state.ui;
  const errors = state.errors.reservation;
  return {
    restaurants: Object.values(restaurants),
    currentUser: state.entities.users[state.session.id],
    search
  };
};

const mdp = dispatch => ({
  clearRestaurants: () => dispatch(clearRestaurants()),
  fetchSearchedRestaurants: data => dispatch(fetchSearchedRestaurants(data)),
  findTable: (reservationRequest, restaurantId) =>
    dispatch(findTable(reservationRequest, restaurantId))
});

export default connect(msp, mdp)(RestaurantSearchIndex);
