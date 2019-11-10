import { connect } from "react-redux";
import SearchForm from "./search_form";
import { search } from "../../actions/search_actions";
import { autocomplete } from "../../util/search_api_util";

const msp = (state, ownProps) => {
  const { search } = state.ui;
  return {
    searchQuery: search
  };
};

const mdp = dispatch => ({
  search: data => dispatch(search(data)),
  autocomplete: data => autocomplete(data)
});

export default connect(
  msp,
  mdp
)(SearchForm);
