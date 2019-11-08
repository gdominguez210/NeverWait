import { connect } from "react-redux";
import SearchForm from "./search_form";
import { search } from "../../actions/search_actions";
import { autocomplete } from "../../util/search_api_util";

const msp = (state, ownProps) => {
  // const { restaurants } = state.entities;
  // return {
  //   restaurants: Object.values(restaurants)
  // };
};

const mdp = dispatch => ({
  search: data => dispatch(search(data)),
  autocomplete: data => autocomplete(data)
});

export default connect(
  null,
  mdp
)(SearchForm);
