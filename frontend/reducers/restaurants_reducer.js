import {RECEIVE_RESTAURANTS, RECEIVE_RESTAURANT, REMOVE_RESTAURANT } from '../actions/restaurants_actions'

const restaurantsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_RESTAURANTS:
            debugger
            return action.restaurants;
        case RECEIVE_RESTAURANT:
            return Object.assign({}, state, {[action.restaurant.id]: action.restaurant})
        case REMOVE_RESTAURANT:
            let newState = Object.assign({}, state);
            delete newState[action.restaurantId];
            return newState;
        default: 
            return state;
    }
}

export default restaurantsReducer;