import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class RestaurantSidebar extends React.Component {
  // const parameters = restaurant.parameters || {};
  constructor(props) {
    super(props);
    // let { restaurant } = this.props;
    debugger;
  }

  phone() {
    if (this.props.restaurant.phone) {
      return (
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="phone" />
          </div>
          <div class="sidebar-item-content">
            <p className="sidebar-item-label">Phone</p>
            <p>{this.props.restaurant.phone}</p>
          </div>
        </div>
      );
    }
  }
  website() {
    if (this.props.restaurant.website) {
      return (
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="globe" />
          </div>
          <div class="sidebar-item-content">
            <p className="sidebar-item-label">Website</p>
            <p>{this.props.restaurant.website}</p>
          </div>
        </div>
      );
    }
  }
  city() {
    if (this.props.restaurant.city) {
      <div className="sidebar-item">
        <div className="sidebar-item-icon">
          <FontAwesomeIcon icon="city" />
        </div>
        <div class="sidebar-item-content">
          <p className="sidebar-item-label">Neighborhood</p>
          <p>{this.props.restaurant.neighborhood}</p>
        </div>
      </div>;
    }
  }
  hoursOfOperation() {
    if (this.props.restaurant.hours_of_operation) {
      return (
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="clock" />
          </div>
          <div class="sidebar-item-content">
            <p className="sidebar-item-label">Hours of Operation</p>
            <p>{this.props.restaurant.hours_of_operation}</p>
          </div>
        </div>
      );
    }
  }
  cuisines() {
    if (this.props.restaurant.cuisines) {
      return (
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="glass-cheers" />
          </div>
          <div class="sidebar-item-content">
            <p className="sidebar-item-label"> Cuisines</p>
            <p>{this.props.restaurant.cuisines}</p>
          </div>
        </div>
      );
    }
  }
  diningStyle() {
    if (this.props.restaurant.dining_style) {
      return (
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="concierge-bell" />
          </div>
          <div class="sidebar-item-content">
            <p className="sidebar-item-label"> Dining Style</p>
            <p>{this.props.restaurant.dining_style}</p>
          </div>
        </div>
      );
    }
  }
  dressCode() {
    if (this.props.restaurant.dress_code) {
      return (
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="tshirt" />
          </div>
          <div class="sidebar-item-content">
            <p className="sidebar-item-label"> Dress Code</p>
            <p>{this.props.restaurant.dress_code}</p>
          </div>
        </div>
      );
    }
  }
  crossStreet() {
    if (this.props.restaurant.cross_street) {
      return (
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="road" />
          </div>
          <div class="sidebar-item-content">
            <p className="sidebar-item-label"> Cross Street</p>
            <p>{this.props.restaurant.cross_street}</p>
          </div>
        </div>
      );
    }
  }
  parkingDetails() {
    if (this.props.restaurant.parking_details) {
      return (
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="parking" />
          </div>
          <div class="sidebar-item-content">
            <p className="sidebar-item-label"> Parking Details</p>
            <p>{this.props.restaurant.parking_details}</p>
          </div>
        </div>
      );
    }
  }
  publicTransit() {
    if (this.props.restaurant.public_transit) {
      return (
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="bus" />
          </div>
          <div class="sidebar-item-content">
            <p className="sidebar-item-label"> Public Transit</p>
            <p>{this.props.restaurant.public_transit}</p>
          </div>
        </div>
      );
    }
  }
  paymentOptions() {
    if (this.props.restaurant.payment_options) {
      return (
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="credit-card" />
          </div>
          <div class="sidebar-item-content">
            <p className="sidebar-item-label"> Payment Options</p>
            <p>{this.props.restaurant.payment_options}</p>
          </div>
        </div>
      );
    }
  }
  executiveChef() {
    if (this.props.restaurant.executive_chef) {
      return (
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="user-alt" />
          </div>
          <div class="sidebar-item-content">
            <p className="sidebar-item-label"> Executive Chef</p>
            <p>{this.props.restaurant.executive_chef}</p>
          </div>
        </div>
      );
    }
  }
  additional() {
    if (this.props.restaurant.additional) {
      return (
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="plus" />
          </div>
          <div class="sidebar-item-content">
            <p className="sidebar-item-label"> Additional</p>
            <p>{this.props.restaurant.additional}</p>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <>
        <aside className="restaurant-sidebar">
          {this.phone()}
          {this.website()}
          {this.city()}
          {this.hoursOfOperation()}
          {this.cuisines()}
          {this.dressCode()}
          {this.crossStreet()}
          {this.parkingDetails()}
          {this.publicTransit()}
          {this.paymentOptions()}
          {this.executiveChef()}
          {this.additional()}
        </aside>
      </>
    );
  }
}
export default RestaurantSidebar;
