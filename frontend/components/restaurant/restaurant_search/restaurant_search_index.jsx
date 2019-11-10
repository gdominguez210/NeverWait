import React from "react";
import RestaurantIndexItem from "../restaurant_index_item";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import SearchFormContainer from "../../search/search_form_container";
import SearchSidebarFormContainer from "../../search/search_sidebar_form_container";
export class RestaurantSearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.is_Mounted = false;
  }

  componentDidMount() {
    this.is_Mounted = true;
    this.props.fetchSearchedRestaurants(this.props.search);
  }

  componentDidUpdate(prevProps) {
    debugger;
    if (this.is_Mounted && prevProps.search) {
      debugger;
      if (
        prevProps.search.query !== this.props.search.query ||
        prevProps.search.res !== this.props.search.res
      ) {
        debugger;
        this.props.fetchSearchedRestaurants(this.props.search);
      }
    }
  }

  render() {
    const { restaurants, deleteRestaurant, currentUser, search } = this.props;
    let restaurantItems = null;
    if (restaurants) {
      restaurantItems = restaurants.map((restaurant, idx) => (
        <RestaurantIndexItem
          currentUser={currentUser}
          deleteRestaurant={deleteRestaurant}
          restaurant={restaurant}
          res={search.res}
          key={restaurant.id}
        />
      ));
    }

    return (
      <>
        <section className="search-results-form-container">
          <SearchFormContainer />
        </section>
        <section className="restaurants-container">
          <aside>
            <SearchSidebarFormContainer />
          </aside>
          <CSSTransition
            in={true}
            appear={true}
            timeout={300}
            classNames="fade"
          >
            <section class="restaurants-index">
              <p>
                {search.total_available_openings} available tables{" "}
                {restaurants.length > 1 ? "betweeen" : "in"}{" "}
                {restaurants.length}{" "}
                {restaurants.length > 1 ? "restaurants" : "restaurant"}
              </p>
              <ul className="restaurants-list">{restaurantItems}</ul>
            </section>
          </CSSTransition>
        </section>
      </>
    );
  }
}
