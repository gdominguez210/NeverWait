import { connect } from "react-redux";
import {
  receiveFilter,
  clearFilter,
  clearAllFilters
} from "../../../actions/filter_actions";
import RestaurantBars from "./restaurant_bars";

const msp = (state, OwnProps) => ({ filter: state.ui.filter });
const mdp = dispatch => ({
  receiveFilter: (val, type) => dispatch(receiveFilter(val, type)),
  clearAllFilters: () => dispatch(clearAllFilters()),
  clearFilter: filter => dispatch(clearFilter(filter))
});

export default connect(msp, mdp)(RestaurantBars);
