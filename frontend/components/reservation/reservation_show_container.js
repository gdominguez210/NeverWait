import React from "react";
import { connect } from "react-redux";

import ReservationShow from "./reservation_show";
import { fetchReservations } from "../../../actions/reservations_actions";

const msp = (state, ownProps) => {
  return {
    restaurant: state.entities.restaurants[
      ownProps.match.params.restaurantId
    ] || {
      name: "",
      address: "",
      phone: "",
      owner_id: "",
      location_id: "",
      lat: "",
      long: "",
      description: "",
      website: "",
      price_range: "",
      capacity: "",
      neighborhood: "",
      hours_of_operation: "",
      cuisines: "",
      dining_style: "",
      dress_code: "",
      parking_details: "",
      public_transit: "",
      payment_options: "",
      executive_chef: "",
      additional: "",
      total_rating: "",
      photoUrls: ""
    },
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    reviews: state.entities.reviews
  };
};

const mdp = dispatch => ({
  fetchRestaurant: id => dispatch(fetchRestaurant(id)),
  deleteRestaurant: id => dispatch(deleteRestaurant(id))
});

export default connect(
  msp,
  mdp
)(RestaurantShow);
