import React from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

class RestaurantMap extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const mapOptions = {
      center: {
        lat: this.props.restaurant.lat,
        lng: this.props.restaurant.lng
      },
      zoom: 13
    };

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {
    return (
      // ...
      <div ref={map => (this.mapNode = map)} id="map-container"></div>
    );
  }
}
export default RestaurantMap;
