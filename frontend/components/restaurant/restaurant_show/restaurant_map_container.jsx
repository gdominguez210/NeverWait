import React from "react";
import { connect } from "react-redux";

import RestaurantMap from "./restaurant_map";

const msp = (state, ownProps) => {
  return {
    restaurant: state.entities.restaurants[
      ownProps.match.params.restaurantId
    ] || {
      name: "",
      address: "",
      phone: "",
      owner_id: "",
      location: "",
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
    currentUser: state.entities.users[state.session.id]
  };
};

export default connect(
  msp,
  null
)(RestaurantMap);
