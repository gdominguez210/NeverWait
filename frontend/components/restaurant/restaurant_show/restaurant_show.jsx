import React, { createRef } from "react";
import { Link } from "react-router-dom";
import RestaurantBanner from "./restaurant_banner";
import RestaurantMain from "./restaurant_main";
import RestaurantSidebar from "./restaurant_sidebar";

class RestaurantShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.setState({
      restaurant: this.props.fetchRestaurant(
        this.props.match.params.restaurantId
      )
    });
  }

  componentDidUpdate(prevProps) {
    const restaurantId = this.props.match.params.restaurantId;
    if (restaurantId != prevProps.match.params.restaurantId) {
      this.props.fetchRestaurant(this.props.match.params.restaurantId);
    }
  }

  render() {
    const restaurant = this.props.restaurant;

    debugger;
    return (
      <>
        <section class="restaurant-container">
          <RestaurantBanner restaurant={restaurant} />
          <section class="restaurant-content-wrap">
            <RestaurantMain restaurant={restaurant} />
            <RestaurantSidebar restaurant={restaurant} />
          </section>
        </section>
      </>
    );
  }
}

export default RestaurantShow;
