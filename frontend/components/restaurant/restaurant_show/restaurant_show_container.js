import React from 'react';
import { connect } from 'react-redux';

import RestaurantShow from './restaurant_show';
import { fetchRestaurant } from '../../../actions/restaurants_actions';


const msp = (state, ownProps) => {
    debugger
    return {
    restaurant: state.entities.restaurants[ownProps.match.params.restaurantId] || {name: "", address: "", phone: "", owner_id: "", location_id: "", lat: "", long: "", description: "", website: "", price_range: "", capacity:"", neighborhood: "", hours_of_operation: "", cuisines:"", dining_style:"", dress_code:"", parking_details:"", public_transit:"", payment_options:"", executive_chef: "", addtional:"", parameters: ""}
}}

const mdp = dispatch => ({
    fetchRestaurant: (id) => dispatch(fetchRestaurant(id))
})

export default connect(msp, mdp)(RestaurantShow);