import React from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

class RestaurantMap extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
    debugger;
    if (this.props.restaurant) {
      const mapOptions = {
        center: {
          lat: parseFloat(this.props.restaurant.lat),
          // lat: -26.1290554926383,
          lng: parseFloat(this.props.restaurant.long)
          // lng: 137.489149564284
        },
        zoom: 13,
        disableDefaultUI: true
      };

      // wrap this.mapNode in a Google Map
      this.map = new google.maps.Map(this.mapNode, mapOptions);
    }
  }

  render() {
    debugger;
    return (
      // ...
      <div ref={map => (this.mapNode = map)} id="map-container"></div>
    );
  }
}
export default RestaurantMap;
