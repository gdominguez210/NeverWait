import { combineReducers } from "redux";
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import sessionReducer from './errors_reducer';

const rootReducer = combineReducers({
   session:sessionReducer,
   entities:entitiesReducer,
   errors:errorsReducer
})

export default rootReducer;