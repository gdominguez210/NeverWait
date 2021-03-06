import React, {useEffect} from "react";
import RestaurantIndexItem from "./restaurant_index_item";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

export class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchRestaurants();
  }

  // componentDidUpdate() {
  //   this.props.fetchRestaurants();
  // }
  addNew() {
    let add = null;
    if (this.props.currentUser) {
      add = (
        <Link to="/new-restaurant" className="readon">
          Add a New Restaurant
        </Link>
      );
    }
    return add;
  }

  render() {
    const { restaurants, deleteRestaurant, currentUser } = this.props;
    let restaurantItems = null;
    if (restaurants) {
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
        <section className="inner-container">
          <section className="restaurants-container">
            <aside>{this.addNew()}</aside>
            <CSSTransition
              in={true}
              appear={true}
              timeout={300}
              classNames="fade"
            >
              <ul className="restaurants-list">{restaurantItems}</ul>
            </CSSTransition>
          </section>
        </section>
      </>
    );
  }
}
