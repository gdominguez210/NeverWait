import React, { createRef } from "react";
import { Link } from "react-router-dom";
import RestaurantBanner from "./restaurant_banner";
import RestaurantMain from "./restaurant_main";
import RestaurantSidebar from "./restaurant_sidebar";
import { CSSTransition } from "react-transition-group";

class RestaurantShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      is_Mounted: false,
      receivedReviews: false
    };
  }

  componentDidMount() {
    this.setState({
      restaurant: this.props.fetchRestaurant(
        this.props.match.params.restaurantId
      ),
      is_Mounted: true
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const restaurantId = this.props.match.params.restaurantId;
    const favoritesId = this.props.restaurant.favorite_ids;
    const reviewsId = this.props.restaurant.review_ids;
    if (this.state.is_Mounted) {
      if (restaurantId !== prevProps.match.params.restaurantId) {
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
      } else if (
        favoritesId.length !== prevProps.restaurant.favorite_ids.length
      ) {
        this.props.fetchRestaurant(this.props.match.params.restaurantId);
      } else if (reviewsId.length !== prevProps.restaurant.review_ids.length) {
        if (this.state.receivedReviews === false) {
          this.setState({
            receivedReviews: true
          });
        }
        if (this.state.receivedReviews) {
          this.props.fetchRestaurant(this.props.match.params.restaurantId);
        }
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
