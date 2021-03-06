import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RestaurantFeaturedItem from "../restaurant/restaurant_featured/restaurant_featured_item";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { scrollTo } from "./carousel_util";
import renderLoader from "../loader/loader";
import MediaQuery from "react-responsive";
class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
    this.is_Mounted = false;
  }
  componentDidMount() {
    this.is_Mounted = true;
    this.props.clearRestaurants();
    this.props.fetchFeaturedRestaurants().then(() => {
      if (this.is_Mounted) {
        this.setState({
          loading: false
        });
      }
    });
  }
  componentWillUnmount() {
    // this.props.clearRestaurants();
    this.is_Mounted = false;
  }

  handleLeft(e) {
    const { carouselViewport } = this.refs;
    const numOfSlidesToScroll = 3.5;
    const widthOfSlide = 300;
    let newPos = carouselViewport.scrollLeft + carouselViewport.offsetWidth;
    let timeToMoveSlide = 200;
    // let totalTime = Math.min(numOfSlidesToScroll * timeToMoveSlide, 400);
    let totalTime = numOfSlidesToScroll * timeToMoveSlide;
    scrollTo({
      element: carouselViewport,
      to: newPos,
      duration: totalTime,
      scrollDirection: "scrollLeft"
    });
  }

  handleRight(e) {
    const { carouselViewport } = this.refs;
    const numOfSlidesToScroll = 3.5;
    const widthOfSlide = 300;
    let newPos = carouselViewport.scrollLeft - carouselViewport.offsetWidth;
    let timeToMoveSlide = 200;
    let totalTime = Math.min(numOfSlidesToScroll * timeToMoveSlide, 400);
    scrollTo({
      element: carouselViewport,
      to: newPos,
      duration: totalTime,
      scrollDirection: "scrollLeft"
    });
  }
  render() {
    const { restaurants } = this.props;
    let restaurantItems = null;
    let mobileRestaurantItems = null;
    if (restaurants) {
      restaurantItems = restaurants.map((restaurant, idx) => (
        <RestaurantFeaturedItem key={restaurant.id} restaurant={restaurant} />
      ));
      mobileRestaurantItems = restaurantItems.slice(0, 5);
    }
    return (
      <>
        <div className="featured-header">
          <h2>Featured Restaurants</h2>
        </div>
        <MediaQuery minWidth={901}>
          <div className="carousel-container">
            <button
              className="carousel-nav carousel-left-nav"
              onClick={this.handleRight}
            >
              <FontAwesomeIcon icon="caret-left" />
            </button>
            <div className="carousel-viewport" ref="carouselViewport">
              {renderLoader(this.state)}
              <CSSTransition
                in={true}
                appear={true}
                timeout={500}
                classNames="fade"
              >
                <ul>{restaurantItems}</ul>
              </CSSTransition>
            </div>
            <button
              className="carousel-nav carousel-right-nav"
              onClick={this.handleLeft}
            >
              <FontAwesomeIcon icon="caret-right" />
            </button>
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={900}>
          <ul className="restaurants-container">{mobileRestaurantItems}</ul>
        </MediaQuery>
      </>
    );
  }
}

export default Carousel;
