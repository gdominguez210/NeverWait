import { connect } from "react-redux";
import SearchForm from "./search_form";
import { search } from "../../actions/search_actions";

const msp = (state, ownProps) => {
  // const { restaurants } = state.entities;
  // return {
  //   restaurants: Object.values(restaurants)
  // };
};

const mdp = dispatch => ({
  search: data => dispatch(search(data))
});

export default connect(
  null,
  mdp
)(SearchForm);
