import React from "react";
import RestaurantIndexItem from "../restaurant/restaurant_index_item";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

export class FavoriteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFavorites(this.props.match.params.userId);
  }

  render() {
    const { restaurants } = this.props;
    let restaurantItems = null;
    if (restaurants) {
      restaurantItems = restaurants.map((restaurant, idx) => (
        <RestaurantIndexItem restaurant={restaurant} key={restaurant.id} />
      ));
    }

    return (
      <>
        <section className="favorites-container">
          <CSSTransition
            in={true}
            appear={true}
            timeout={300}
            classNames="fade"
          >
            <>
              <ul className="favorites-list">{restaurantItems}</ul>
            </>
          </CSSTransition>
        </section>
      </>
    );
  }
}

export default FavoriteIndex;
