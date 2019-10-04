import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import RestaurantForm from "./restaurant_form";
import { createRestaurant } from "../../../actions/restaurants_actions";

const mapStateToProps = (state, ownProps) => {
  const restaurant = {
    name: "",
    address: "",
    phone: "",
    owner_id: "",
    location_id: "",
    lat: "",
    long: "",
    description: "",
    website: "",
    price_range: "",
    capacity: "",
    neighborhood: "",
    hours_of_operation: "",
    cuisines: "",
    dining_style: "",
    dress_code: "",
    parking_details: "",
    public_transit: "",
    payment_options: "",
    executive_chef: "",
    addtional: "",
    parameters: ""
  };
  const formType = "Create Restaurant";
  debugger;
  return { restaurant, formType };
};

const mapDispatchToProps = dispatch => {
  return {
    action: restaurant => dispatch(createRestaurant(restaurant))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantForm);
