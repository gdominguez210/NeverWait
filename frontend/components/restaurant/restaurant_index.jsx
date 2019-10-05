import React from "react";
import RestaurantIndexItem from "./restaurant_index_item";
import { Link } from "react-router-dom";
export class RestaurantIndex extends React.Component {
  constructor(props) {
    super(props);
    debugger;
  }

  componentDidMount() {
    this.props.fetchRestaurants();
  }

  render() {
    const { restaurants } = this.props;
    let restaurantItems = null;
    if (restaurants) {
      restaurantItems = restaurants.map(restaurant => (
        <RestaurantIndexItem restaurant={restaurant} />
      ));
    }

    return (
      <>
        <Link to="/new-restaurant">Add a New Restaurant</Link>
        <ul className="restaurants-container">{restaurantItems}</ul>
      </>
    );
  }
}
