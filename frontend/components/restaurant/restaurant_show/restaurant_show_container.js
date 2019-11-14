import React from "react";
import { connect } from "react-redux";

import RestaurantShow from "./restaurant_show";
import {
  fetchRestaurant,
  deleteRestaurant
} from "../../../actions/restaurants_actions";
import {
  createFavorite,
  deleteFavorite
} from "../../../actions/favorite_actions";

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
      photoUrls: "",
      review_ids: [],
      favorite_ids: [],
      available_openings: "",
      percent_recommended: "",
      noise_level: ""
    },
    currentUser: state.entities.users[state.session.id],
    users: state.entities.users,
    reviews: state.entities.reviews,
    favorites: state.entities.favorites
  };
};

const mdp = dispatch => ({
  fetchRestaurant: id => dispatch(fetchRestaurant(id)),
  deleteRestaurant: id => dispatch(deleteRestaurant(id)),
  createFavorite: favorite => dispatch(createFavorite(favorite)),
  deleteFavorite: (favoriteId, restaurantId) =>
    dispatch(deleteFavorite(favoriteId, restaurantId))
});

export default connect(msp, mdp)(RestaurantShow);
