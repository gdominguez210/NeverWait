import React from "react";
import RestaurantQuickLinks from "./restaurant_quicklinks";
import RestaurantGallery from "../restaurant_gallery/restaurant_gallery";
import RestaurantStars from "../restaurant_ratings/rating_stars";
import ReviewIndex from "../../reviews/review_index_container";
import RestaurantReviews from "../restaurant_ratings/restaurant_reviews";
import RestaurantHeader from "./restaurant_header";
import CreateRestaurantForm from "../restaurant_forms/create_form_container";
import { Route, Link } from "react-router-dom";
class RestaurantMain extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.overview = React.createRef();
    this.photos = React.createRef();
    this.reviews = React.createRef();
    debugger;
  }

  handleClick(ref) {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
  render() {
    return (
      <>
        <main className="restaurant-content">
          {/* <RestaurantQuickLinks /> */}
          <ul className="restaurant-quick-links">
            <li onClick={() => this.handleClick(this.overview)}>Overview</li>
            <li onClick={() => this.handleClick(this.photos)}>Photos</li>
            {/* <li onClick={() => this.handleClick(this.menu)}>Menu</li> */}
            <li onClick={() => this.handleClick(this.reviews)}>Reviews</li>
          </ul>
          <section className="restaurant-content-inner">
            <RestaurantHeader restaurant={this.props.restaurant} />
            <div ref={this.overview}>
              <p>{this.props.restaurant.description}</p>
            </div>
            <div ref={this.photos}>
              <RestaurantGallery restaurant={this.props.restaurant} />
            </div>
            <div ref={this.reviews}>
              <RestaurantReviews restaurant={this.props.restaurant} />
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default RestaurantMain;
