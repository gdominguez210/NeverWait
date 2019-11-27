import { connect } from "react-redux";
import SearchSidebarForm from "./search_sidebar_form";
import { search } from "../../actions/search_actions";
import { autocomplete } from "../../util/search_api_util";
import { receiveFilter } from "../../actions/filter_actions";
const msp = (state, ownProps) => {
  const { search } = state.ui;
  return {
    search
  };
};

const mdp = dispatch => ({
  searchQuery: data => dispatch(search(data)),
  receiveFilter: (val, type) => dispatch(receiveFilter(val, type)),
  autocomplete: data => autocomplete(data)
});

export default connect(msp, mdp)(SearchSidebarForm);
