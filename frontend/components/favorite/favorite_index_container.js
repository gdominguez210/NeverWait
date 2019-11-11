import { connect } from "react-redux";
import FavoriteIndex from "./favorite_index";
import { fetchFavorites, deleteFavorite } from "../../actions/favorite_actions";

const msp = (state, ownProps) => {
  return {
    favorites: Object.values(state.entities.favorites),
    restaurants: Object.values(state.entities.restaurants),
    currentUser: state.entities.users[state.session.id]
  };
};

const mdp = dispatch => ({
  fetchFavorites: userId => dispatch(fetchFavorites(userId)),
  deleteFavorite: (favoriteId, restaurantId) =>
    dispatch(deleteFavorite(favoriteId, restaurantId))
});

export default connect(
  msp,
  mdp
)(FavoriteIndex);
