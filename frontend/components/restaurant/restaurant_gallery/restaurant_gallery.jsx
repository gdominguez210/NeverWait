import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from "react-transition-group";
import renderLoader from "../../loader/loader";
import LazyLoad from "react-lazyload";
import { GalleryItem } from './restaurant_gallery_item';

class RestaurantGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.is_Mounted = false;
  }

  componentDidMount() {
    this.is_Mounted = true;
    if (this.is_Mounted) {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    let imagesList = null;
    if (this.is_Mounted && this.props.restaurant.photoUrls) {
      imagesList = this.props.restaurant.photoUrls.map((url, idx) => (
        <GalleryItem url={url} key={idx} />
      ));
    }
    return (
      <>
        <section className="restaurant-gallery" id="photos">
          <h2>Photos</h2>
          <div className="img-gallery">
            {renderLoader(this.state)}
            {imagesList}
          </div>
        </section>
      </>
    );
  }
}

export default RestaurantGallery;
