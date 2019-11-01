import React from "react";
import RestaurantFeaturedItem from "./restaurant_featured_item";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import renderLoader from "../../loader/loader";
export class RestaurantFeatured extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.fetchFeaturedRestaurants().then(() =>
      this.setState({
        loading: false
      })
    );
    // let featuredRestaurant = this.props.restaurants.slice(0);
  }

  // componentDidUpdate() {
  //   let featuredRestaurant = this.props.restaurants.slice(this.props.index);
  // }
  render() {
    const { restaurants } = this.props;
    let restaurantItems = null;
    if (restaurants) {
      restaurantItems = restaurants.map(restaurant => (
        <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
          <RestaurantFeaturedItem restaurant={restaurant} />
        </CSSTransition>
      ));
    } else {
      restaurantItems = renderLoader(this.state);
    }

    return (
      <>
        <section className="featured-restaurants">
          <div className="featured-header">
            <h2>Featured Restaurants</h2>
            <Link to="/restaurants" className="highlight">
              View All
            </Link>
          </div>
          <CSSTransition
            in={true}
            appear={true}
            timeout={300}
            classNames="fade"
          >
            <ul className="restaurants-container">{restaurantItems}</ul>
          </CSSTransition>
        </section>
      </>
    );
  }
}
