import { connect } from 'react-redux';
import { RestaurantIndex } from './restaurant_index'
import { fetchRestaurants } from '../../actions/restaurants_actions'

const msp = state => {
    const {restaurants} = state.entities;
    return {
        restaurants: Object.values(restaurants),
    }
}

const mdp = dispatch => ({
    fetchRestaurants: () => dispatch(fetchRestaurants())
})
    
export default connect(msp, mdp)(RestaurantIndex);