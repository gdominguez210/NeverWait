import React from "react";
import RestaurantIndexItem from "../restaurant/restaurant_index_item";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class FavoriteIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFavorites(this.props.match.params.userId);
  }

  componentDidUpdate(prevProps) {
    debugger;
    if (prevProps.favorites.length !== this.props.favorites.length) {
      this.props.fetchFavorites(this.props.match.params.userId);
    }
  }

  render() {
    const { restaurants, deleteFavorite, currentUser } = this.props;
    let restaurantItems = null;
    if (restaurants) {
      restaurantItems = restaurants.map((restaurant, idx) => (
        <RestaurantIndexItem
          restaurant={restaurant}
          key={restaurant.id}
          currentUser={currentUser}
          type={"favorite"}
          deleteFavorite={deleteFavorite}
        />
      ));
    }

    return (
      <>
        <section className="favorites-outter-container">
          <aside className="user-options">
            <h3>Account Options</h3>
            <ul>
              <li>
                <Link to={`/users/${currentUser.id}/`}>
                  <span className="icon">
                    <FontAwesomeIcon icon="user" />
                  </span>
                  My Profile
                </Link>
              </li>
              <li>
                <Link to={`/users/${currentUser.id}/reservations`}>
                  <span className="icon">
                    <FontAwesomeIcon icon="calendar" />
                  </span>
                  My Reservations
                </Link>
              </li>
            </ul>
          </aside>
          <section className="favorites-container">
            <h1>Favorite Restaurants</h1>
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
        </section>
      </>
    );
  }
}

export default FavoriteIndex;
