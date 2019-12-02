import { connect } from "react-redux";
import SearchSidebarForm from "./search_sidebar_form";
import { search, receiveSearchQuery } from "../../actions/search_actions";
import { autocomplete } from "../../util/search_api_util";
import { receiveFilter, clearFilter } from "../../actions/filter_actions";
const msp = (state, ownProps) => {
  const { search, filter } = state.ui;
  return {
    search,
    filter
  };
};

const mdp = dispatch => ({
  searchQuery: data => dispatch(search(data)),
  receiveSearchQuery: query => dispatch(receiveSearchQuery(query)),
  receiveFilter: (val, type) => dispatch(receiveFilter(val, type)),
  clearFilter: filter => dispatch(clearFilter(filter)),
  autocomplete: data => autocomplete(data)
});

export default connect(msp, mdp)(SearchSidebarForm);
