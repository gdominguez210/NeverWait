import { connect } from "react-redux";
import RestaurantSearchIndex from "./restaurant_search_index";
import {
  fetchSearchedRestaurants,
  clearRestaurants
} from "../../../actions/restaurants_actions";
import { findTable } from "../../../actions/reservation_actions";
import { openModal } from "../../../actions/modal_actions";
import {
  receiveFilter,
  clearAllFilters
} from "../../../actions/filter_actions";

const msp = state => {
  const { restaurants } = state.entities;
  const { search } = state.ui;
  const filter = state.ui.filter;
  const errors = state.errors.reservation;
  return {
    restaurants: Object.values(restaurants),
    currentUser: state.entities.users[state.session.id],
    search,
    filter
  };
};

const mdp = dispatch => ({
  clearRestaurants: () => dispatch(clearRestaurants()),
  fetchSearchedRestaurants: data => dispatch(fetchSearchedRestaurants(data)),
  receiveFilter: (val, type) => dispatch(receiveFilter(val, type)),
  clearAllFilters: () => dispatch(clearAllFilters()),
  findTable: (reservationRequest, restaurantId) =>
    dispatch(findTable(reservationRequest, restaurantId))
});

export default connect(msp, mdp)(RestaurantSearchIndex);
