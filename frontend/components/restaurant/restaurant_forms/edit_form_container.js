import React from "react";
import { connect } from "react-redux";
import RestaurantForm from "./restaurant_form";
import {
  fetchRestaurant,
  updateRestaurant
} from "../../actions/restaurant_actions";

const mapStateToProps = (state, ownProps) => {
  const restaurant = state.entities.restaurants[
    ownProps.match.params.restaurantId
  ] || {
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
    additional: ""
  };
  const formType = "Update Restaurant";

  return { restaurant, formType };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchRestaurant: id => dispatch(fetchRestaurant(id)),
    action: restaurant => dispatch(updateRestaurant(restaurant))
  };
};

class EditRestaurantForm extends React.Component {
  componentDidMount() {
    this.props.fetchRestaurant(this.props.match.params.restaurantId);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.restaurant.id != this.props.match.params.restaurantId) {
      this.props.fetchRestaurant(this.props.match.params.restaurantId);
    }
  }

  render() {
    const { action, formType, restaurant } = this.props;
    return (
      <RestaurantForm
        action={action}
        formType={formType}
        restaurant={restaurant}
      />
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditRestaurantForm);
