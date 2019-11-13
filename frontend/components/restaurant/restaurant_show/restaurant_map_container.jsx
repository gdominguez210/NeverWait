import React from "react";
import { connect } from "react-redux";

import RestaurantMap from "./restaurant_map";

const msp = (state, ownProps) => {
    ;
  return {
    restaurant: state.entities.restaurants[ownProps.match.params.restaurantId]
  };
};

export default connect(
  msp,
  null
)(RestaurantMap);
