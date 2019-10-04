import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import restaurantsReducer from "./restaurants_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    restaurants: restaurantsReducer
})

export default entitiesReducer;