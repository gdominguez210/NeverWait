import React from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { MapManager } from "./map_manager";
class RestaurantMap extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidUpdate() {
      ;
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
      // this.MapManager = new MapManager(this.map)
      const marker = new google.maps.Marker({
        position: {
          lat: parseFloat(this.props.restaurant.lat),
          lng: parseFloat(this.props.restaurant.long)
        },
        map: this.map
      });
      const infowindow = new google.maps.InfoWindow({
        content: this.props.restaurant.address.split(",")[0]
      });
      infowindow.open(this.map, marker);
    }
  }

  render() {
      ;
    return (
      // ...
      <div ref={map => (this.mapNode = map)} id="map-container"></div>
    );
  }
}
export default RestaurantMap;
