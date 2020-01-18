import React from "react";
import RestaurantGallery from "../restaurant_gallery/restaurant_gallery";
import RestaurantReviews from "../restaurant_ratings/restaurant_reviews";
import RestaurantHeader from "./restaurant_header";
import RestaurantSidebar from "./restaurant_sidebar";
import MediaQuery from "react-responsive";
import renderLoader from "../../loader/loader";

class RestaurantMain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sticky: false,
      activeItem: { id: null, ratio: 0 },
      loading: true
    };
    this.rootRef = React.createRef();
    this.overview = React.createRef();
    this.photos = React.createRef();
    this.reviews = React.createRef();
    this.singleRefs = {
      overview: { ref: this.overview, ratio: 0, id: "overview" },
      photos: { ref: this.photos, ratio: 0, id: "photos" },
      reviews: { ref: this.reviews, ratio: 0, id: "reviews" }
    };
    this.observer = new IntersectionObserver(this.callback, {
      root: this.rootRef.current,
      threshold: new Array(101).fill(0).map((v, i) => i * 0.01)
    });
  }

  loadingDone = () => this.setState({ loading: false });

  callback = (entries) => {
    for (let i = 0; i < entries.length; i++) {
      let entry = entries[i];
      this.singleRefs[entry.target.id].ratio = entry.intersectionRatio;
    }

    let activeItem = Object.values(this.singleRefs).reduce(
      (acc, value) => (value.ratio > acc.ratio ? value : acc),
      this.state.activeItem
    );
    if (activeItem.ratio > this.state.activeItem.ratio) {
      this.setState({ activeItem });
    }
  }

  componentDidMount() {
    Object.values(this.singleRefs).forEach(value => { this.observer.observe(value.ref.current); });
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  handleClick = (ref) => {
    const yOffset = -65;
    const yOffsetHeader = -250;
    let y = null;
    ref.current.id === "overview" ?
      y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffsetHeader :
      y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
  render() {
    return (
      <main className="restaurant-content" ref={this.rootRef}>
        <div className={this.state.sticky ? "restaurant-quick-links-wrap sticky" : "restaurant-quick-links-wrap"}>
          <ul className="restaurant-quick-links">
            <li onClick={() => this.handleClick(this.overview)} className={this.state.activeItem.id === "overview" ? "active" : null}>
              Overview
              </li>
            <li onClick={() => this.handleClick(this.photos)} className={this.state.activeItem.id === "photos" ? "active" : null}>
              Photos
              </li>
            <li onClick={() => this.handleClick(this.reviews)} className={this.state.activeItem.id === "reviews" ? "active" : null}>
              Reviews
              </li>
          </ul>
        </div>
        <section className="restaurant-content-inner">
          <div id="overview" ref={this.overview}>
            <RestaurantHeader restaurant={this.props.restaurant} />
            <MediaQuery maxWidth={1050}>
              <RestaurantSidebar restaurant={this.props.restaurant} />
            </MediaQuery>
            <p>{this.props.restaurant.description}</p>
          </div>
          <div id="photos" ref={this.photos}>
            {renderLoader(this.state)}
            {this.state.loading ? null : (<RestaurantGallery restaurant={this.props.restaurant} />)}
          </div>
          <div id="reviews" ref={this.reviews}>
            <RestaurantReviews restaurant={this.props.restaurant} loadingDone={this.loadingDone} />
          </div>
        </section>
      </main>
    );
  }
}

export default RestaurantMain;
