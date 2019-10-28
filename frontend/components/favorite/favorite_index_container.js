import { connect } from "react-redux";
import FavoriteIndex from "./favorite_index";
import { fetchFavorites } from "../../actions/favorite_actions";

const msp = (state, ownProps) => {
  return {
    favorites: Object.values(state.entities.favorites),
    restaurants: Object.values(state.entities.restaurants)
  };
};

const mdp = dispatch => ({
  fetchFavorites: userId => dispatch(fetchFavorites(userId))
});

export default connect(
  msp,
  mdp
)(FavoriteIndex);
