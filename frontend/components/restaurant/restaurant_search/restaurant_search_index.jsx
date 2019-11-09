import React from "react";
import RestaurantIndexItem from "../restaurant_index_item";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

export class RestaurantSearchIndex extends React.Component {
  constructor(props) {
    super(props);
     ;
  }

  componentDidMount() {
     ;
    this.props.fetchSearchedRestaurants(this.props.search);
  }

  render() {
    const { restaurants, deleteRestaurant, currentUser } = this.props;
    let restaurantItems = null;
    if (restaurants) {
       ;
      restaurantItems = restaurants.map((restaurant, idx) => (
        <RestaurantIndexItem
          currentUser={currentUser}
          deleteRestaurant={deleteRestaurant}
          restaurant={restaurant}
          key={restaurant.id}
        />
      ));
    }

    return (
      <>
        <section className="restaurants-container">
          <aside></aside>
          <CSSTransition
            in={true}
            appear={true}
            timeout={300}
            classNames="fade"
          >
            <ul className="restaurants-list">{restaurantItems}</ul>
          </CSSTransition>
        </section>
      </>
    );
  }
}
