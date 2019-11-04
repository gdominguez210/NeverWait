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

    this.state = {
      sticky: false,
      activeItem: { id: null, ratio: 0 }
    };
    this.handleClick = this.handleClick.bind(this);
    this.rootRef = React.createRef();
    this.overview = React.createRef();
    this.photos = React.createRef();
    this.reviews = React.createRef();
    this.singleRefs = {
      overview: { ref: this.overview, ratio: 0, id: "overview" },
      photos: { ref: this.photos, ratio: 0, id: "photos" },
      reviews: { ref: this.reviews, ratio: 0, id: "reviews" }
    };
    this.callback = this.callback.bind(this);
    this.observer = new IntersectionObserver(this.callback, {
      root: this.rootRef.current,
      threshold: new Array(101).fill(0).map((v, i) => i * 0.01)
    });
  }

  callback(entries) {
    debugger;
    for (let i = 0; i < entries.length; i++) {
      let entry = entries[i];
      debugger;
      this.singleRefs[entry.target.id].ratio = entry.intersectionRatio;
    }

    let activeItem = Object.values(this.singleRefs).reduce(
      (acc, value) => (value.ratio > acc.ratio ? value : acc),
      this.state.activeItem
    );
    if (activeItem.ratio > this.state.activeItem.ratio) {
      this.setState({ activeItem }, console.log(this.state.activeItem));
    }
  }

  componentDidMount() {
    Object.values(this.singleRefs).forEach(value => {
      debugger;
      this.observer.observe(value.ref.current);
    });
  }

  handleClick(ref) {
    debugger;
    const yOffset = -65;
    const yOffsetHeader = -250;
    debugger;
    let y = null;
    if (ref.current.id === "overview") {
      y =
        ref.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffsetHeader;
      debugger;
    } else {
      debugger;
      y =
        ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    }
    debugger;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
  render() {
    return (
      <>
        <main className="restaurant-content" ref={this.rootRef}>
          {/* <RestaurantQuickLinks /> */}
          <div
            className={
              this.state.sticky
                ? "restaurant-quick-links-wrap sticky"
                : "restaurant-quick-links-wrap"
            }
          >
            <ul className="restaurant-quick-links">
              <li
                onClick={() => this.handleClick(this.overview)}
                className={
                  this.state.activeItem.id === "overview" ? "active" : null
                }
              >
                Overview
              </li>
              <li
                onClick={() => this.handleClick(this.photos)}
                className={
                  this.state.activeItem.id === "photos" ? "active" : null
                }
              >
                Photos
              </li>
              {/* <li onClick={() => this.handleClick(this.menu)}>Menu</li> */}
              <li
                onClick={() => this.handleClick(this.reviews)}
                className={
                  this.state.activeItem.id === "reviews" ? "active" : null
                }
              >
                Reviews
              </li>
            </ul>
          </div>
          <section className="restaurant-content-inner">
            <div id="overview" ref={this.overview}>
              <RestaurantHeader restaurant={this.props.restaurant} />
              <p>{this.props.restaurant.description}</p>
            </div>
            <div id="photos" ref={this.photos}>
              <RestaurantGallery restaurant={this.props.restaurant} />
            </div>
            <div id="reviews" ref={this.reviews}>
              <RestaurantReviews restaurant={this.props.restaurant} />
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default RestaurantMain;
