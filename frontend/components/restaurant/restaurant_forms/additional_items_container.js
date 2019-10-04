import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import RestaurantForm from "./restaurant_form";

const msp = state => ({
  restaurant: 
  formType: "Login"
});

const mdp = dispatch => ({
  processForm: user => dispatch(login(user)),
  demo: user => dispatch(login(user)),
  otherForm: (
    <button className="highlight" onClick={() => dispatch(openModal("signup"))}>
      Sign Up
    </button>
  ),
  closeModal: () => dispatch(closeModal())
});

export default connect(
  msp,
  mdp
)(SessionForm);
