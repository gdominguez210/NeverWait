import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from "react-transition-group";
import renderLoader from "../../loader/loader";
import LazyLoad from "react-lazyload";

class RestaurantGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
    this.is_Mounted = false;
     ;
  }

  componentDidMount() {
     ;
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
       ;
      imagesList = this.props.restaurant.photoUrls.map((url, idx) => (
        <div className="gallery-item" key={`gallery-${idx}`}>
          <LazyLoad height={281} throttle={200}>
            <img src={`${url}`} width="242" height="281" />
          </LazyLoad>
        </div>
      ));
    }
     ;
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
