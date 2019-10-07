import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import restaurantsReducer from "./restaurants_reducer";
import reviewsReducer from "./reviews_reducer";
const entitiesReducer = combineReducers({
  users: usersReducer,
  restaurants: restaurantsReducer,
  reviews: reviewsReducer
});

export default entitiesReducer;
