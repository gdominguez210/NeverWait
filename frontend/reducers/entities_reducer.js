import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import restaurantsReducer from "./restaurants_reducer";
import reviewsReducer from "./reviews_reducer";
import reservationsReducer from "./reservation_reducer";
import favoritesReducer from "./favorites_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  restaurants: restaurantsReducer,
  reviews: reviewsReducer,
  reservations: reservationsReducer,
  favorites: favoritesReducer
});

export default entitiesReducer;
