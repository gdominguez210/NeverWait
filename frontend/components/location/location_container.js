import { connect } from "react-redux";
import { search } from "../../actions/search_actions";
import { Location } from "./location";
const mdp = dispatch => ({
  searchQuery: data => dispatch(search(data))
});

export default connect(null, mdp)(Location);
