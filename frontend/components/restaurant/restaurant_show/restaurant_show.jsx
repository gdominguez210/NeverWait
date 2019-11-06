import React, { createRef } from "react";
import { Link } from "react-router-dom";
import RestaurantBanner from "./restaurant_banner";
import RestaurantMain from "./restaurant_main";
import RestaurantSidebar from "./restaurant_sidebar";
import { CSSTransition } from "react-transition-group";

class RestaurantShow extends React.Component {
  constructor(props) {
    super(props);
    this.is_Mounted = false;
  }

  componentDidMount() {
    this.setState({
      restaurant: this.props.fetchRestaurant(
        this.props.match.params.restaurantId
      )
    });
    this.is_Mounted = true;
  }

  componentDidUpdate(prevProps) {
    const restaurantId = this.props.match.params.restaurantId;
    const favoritesId = this.props.restaurant.favorite_ids;
    const reviewsId = Object.values(this.props.reviews);
    if (this.is_Mounted) {
      if (restaurantId !== prevProps.match.params.restaurantId) {
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
      } else if (
        favoritesId.length !== prevProps.restaurant.favorite_ids.length
      ) {
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
      } else if (reviewsId.length !== Object.values(prevProps.reviews).length) {
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
      }
    }
  }

  render() {
    const restaurant = this.props.restaurant;
    return (
      <>
        <section className="restaurant-container">
          <RestaurantBanner
            deleteRestaurant={this.props.deleteRestaurant}
            restaurant={restaurant}
            currentUser={this.props.currentUser}
            createFavorite={this.props.createFavorite}
            deleteFavorite={this.props.deleteFavorite}
          />
          <section className="restaurant-content-wrap">
            <RestaurantMain restaurant={restaurant} />
            <RestaurantSidebar restaurant={restaurant} />
          </section>
        </section>
      </>
    );
  }
}

export default RestaurantShow;
