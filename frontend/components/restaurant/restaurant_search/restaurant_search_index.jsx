import React from "react";
import RestaurantIndexItem from "../restaurant_index_item";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import MediaQuery from "react-responsive";
import SearchFormContainer from "../../search/search_form_container";
import SearchSidebarFormContainer from "../../search/search_sidebar_form_container";
import renderLoader from "../../loader/loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LazyLoad from "react-lazyload";

class RestaurantSearchIndex extends React.Component {
  constructor(props) {
    super(props);
    this.is_Mounted = false;
    this.state = {
      loading: true
    };
    this.renderFilters = this.renderFilters.bind(this);
    this.parseFilterTag = this.parseFilterTag.bind(this);
  }

  componentDidMount() {
    this.is_Mounted = true;
    this.props.fetchSearchedRestaurants(this.props.search).then(() => {
      this.setState({
        loading: false
      });
    });
  }

  componentWillUnmount() {
    this.is_Mounted = false;
    this.props.clearAllFilters();
  }

  componentDidUpdate(prevProps) {
    if (this.is_Mounted && prevProps.search) {
      if (
        prevProps.search.query !== this.props.search.query ||
        prevProps.search.res !== this.props.search.res
      ) {
        this.setState(
          {
            loading: true
          },
          () =>
            this.props.fetchSearchedRestaurants(this.props.search).then(() => {
              this.setState({
                loading: false
              });
            })
        );
      }
    }
  }

  parseFilterTag(filter) {
    switch (filter.type) {
      case "rating":
        switch (filter.val) {
          case "5":
            return `Rating: 5 stars`;
          default:
            return `Rating: Between ${filter.val}-${parseInt(filter.val) +
              1} stars`;
        }
      case "price_range":
        switch (filter.val) {
          case "pricey":
            return (
              <>
                Price Range: {"  "}
                <span className="icon">
                  <FontAwesomeIcon icon="dollar-sign" />
                  <FontAwesomeIcon icon="dollar-sign" />
                  <FontAwesomeIcon icon="dollar-sign" />
                </span>
              </>
            );
          case "moderate":
            return (
              <>
                Price Range: {"  "}
                <span className="icon">
                  <FontAwesomeIcon icon="dollar-sign" />
                  <FontAwesomeIcon icon="dollar-sign" />
                </span>
              </>
            );
          case "cheap":
            return (
              <>
                Price Range: {"  "}
                <span className="icon">
                  <FontAwesomeIcon icon="dollar-sign" />
                </span>
              </>
            );
          default:
            undefined;
        }
      default:
        return undefined;
    }
  }

  renderFilters() {
    if (this.props.filter) {
      let activeFilters = Object.values(this.props.filter);
      let clearAllFilters = this.props.clearAllFilters;
      if (activeFilters.length > 0) {
        let filterItems = activeFilters.map((filter, idx) => {
          return (
            <button
              key={filter.type}
              className="filter-tag"
              onClick={() => this.props.clearFilter(filter.type)}
            >
              <span className="icon">
                <FontAwesomeIcon icon="check-square" />
              </span>
              {this.parseFilterTag(filter)}
            </button>
          );
        });
        return (
          <>
            {filterItems.length > 0 ? (
              <div className="filters-container">
                <div className="filter-header">
                  <p>Filters</p>
                  <button
                    onClick={() => clearAllFilters()}
                    className="readon-blank"
                  >
                    Clear All Filters
                  </button>
                </div>
                <div className="filter-tags">{filterItems}</div>
              </div>
            ) : null}
          </>
        );
      }
    }
  }
  render() {
    const {
      restaurants,
      deleteRestaurant,
      currentUser,
      search,
      findTable,
      history
    } = this.props;
    let restaurantItems = null;
    if (restaurants) {
      restaurantItems = restaurants.map((restaurant, idx) => (
        <LazyLoad height={200} throttle={200} key={`${restaurant.id}-${idx}`}>
          <CSSTransition
            in={true}
            appear={true}
            timeout={300}
            classNames="fade"
          >
            <RestaurantIndexItem
              currentUser={currentUser}
              deleteRestaurant={deleteRestaurant}
              restaurant={restaurant}
              res={search.res}
              key={restaurant.id}
              findTable={findTable}
              history={history}
            />
          </CSSTransition>
        </LazyLoad>
      ));
    }

    return (
      <>
        <section className="search-results-form-container">
          <SearchFormContainer />
        </section>
        <section className="inner-container">
          <section className="restaurants-container">
            <MediaQuery minWidth={1051}>
              <aside>
                <SearchSidebarFormContainer />
              </aside>
            </MediaQuery>

            <section className="restaurants-index">
              {this.renderFilters()}
              {renderLoader(this.state)}
              {this.state.loading ? null : (
                <p>
                  {search.total_available_openings} available tables{" "}
                  {restaurants.length > 1 ? "across " : ""}
                  {restaurants.length}{" "}
                  {restaurants.length > 1 ? "restaurants" : "restaurant"}
                </p>
              )}
              <ul className="restaurants-list">{restaurantItems}</ul>
            </section>
          </section>
        </section>
      </>
    );
  }
}

export default withRouter(RestaurantSearchIndex);
