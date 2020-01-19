import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from "react-router-dom";
import FindTableForm from "../../reservation/findtable_container";
import RestaurantMapContainer from "./restaurant_map_container";

const RestaurantSidebar = props => {

  const phone = () => {
    if (props.restaurant.phone) {
      return (
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="phone" />
          </div>
          <div className="sidebar-item-content">
            <p className="sidebar-item-label">Phone</p>
            <p>{props.restaurant.phone}</p>
          </div>
        </div>
      );
    }
  }
  const website = () => {
    if (props.restaurant.website) {
      return (
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="globe" />
          </div>
          <div className="sidebar-item-content">
            <p className="sidebar-item-label">Website</p>
            <p>{props.restaurant.website}</p>
          </div>
        </div>
      );
    }
  }
  const city = () => {
    if (props.restaurant.city) {
      <div className="sidebar-item">
        <div className="sidebar-item-icon">
          <FontAwesomeIcon icon="city" />
        </div>
        <div className="sidebar-item-content">
          <p className="sidebar-item-label">Neighborhood</p>
          <p>{props.restaurant.neighborhood}</p>
        </div>
      </div>;
    }
  }
  const hoursOfOperation = () => {
    if (props.restaurant.hours_of_operation) {
      return (
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="clock" />
          </div>
          <div className="sidebar-item-content">
            <p className="sidebar-item-label">Hours of Operation</p>
            <p>{props.restaurant.hours_of_operation}</p>
          </div>
        </div>
      );
    }
  }
  const cuisines = () => {
    if (props.restaurant.cuisines) {
      return (
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="glass-cheers" />
          </div>
          <div className="sidebar-item-content">
            <p className="sidebar-item-label"> Cuisines</p>
            <p>{props.restaurant.cuisines}</p>
          </div>
        </div>
      );
    }
  }
  const diningStyle = () => {
    if (props.restaurant.dining_style) {
      return (
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="concierge-bell" />
          </div>
          <div className="sidebar-item-content">
            <p className="sidebar-item-label"> Dining Style</p>
            <p>{props.restaurant.dining_style}</p>
          </div>
        </div>
      );
    }
  }
  const dressCode = () => {
    if (props.restaurant.dress_code) {
      return (
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="tshirt" />
          </div>
          <div className="sidebar-item-content">
            <p className="sidebar-item-label"> Dress Code</p>
            <p>{props.restaurant.dress_code}</p>
          </div>
        </div>
      );
    }
  }
  const crossStreet = () => {
    if (props.restaurant.cross_street) {
      return (
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="road" />
          </div>
          <div className="sidebar-item-content">
            <p className="sidebar-item-label"> Cross Street</p>
            <p>{props.restaurant.cross_street}</p>
          </div>
        </div>
      );
    }
  }
  const parkingDetails = () => {
    if (props.restaurant.parking_details) {
      return (
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="parking" />
          </div>
          <div className="sidebar-item-content">
            <p className="sidebar-item-label"> Parking Details</p>
            <p>{props.restaurant.parking_details}</p>
          </div>
        </div>
      );
    }
  }
  const publicTransit = () => {
    if (props.restaurant.public_transit) {
      return (
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="bus" />
          </div>
          <div className="sidebar-item-content">
            <p className="sidebar-item-label"> Public Transit</p>
            <p>{props.restaurant.public_transit}</p>
          </div>
        </div>
      );
    }
  }
  const paymentOptions = () => {
    if (props.restaurant.payment_options) {
      return (
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="credit-card" />
          </div>
          <div className="sidebar-item-content">
            <p className="sidebar-item-label"> Payment Options</p>
            <p>{props.restaurant.payment_options}</p>
          </div>
        </div>
      );
    }
  }
  const executiveChef = () => {
    if (props.restaurant.executive_chef) {
      return (
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="user-alt" />
          </div>
          <div className="sidebar-item-content">
            <p className="sidebar-item-label"> Executive Chef</p>
            <p>{props.restaurant.executive_chef}</p>
          </div>
        </div>
      );
    }
  }
  const additional = () => {
    if (props.restaurant.additional) {
      return (
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="plus" />
          </div>
          <div className="sidebar-item-content">
            <p className="sidebar-item-label"> Additional</p>
            <p>{props.restaurant.additional}</p>
          </div>
        </div>
      );
    }
  }
  return (
    <aside className="restaurant-sidebar">
      <FindTableForm />
      {/* <RestaurantMapContainer match={props.match} /> */}
      {phone()}
      {website()}
      {city()}
      {hoursOfOperation()}
      {cuisines()}
      {dressCode()}
      {crossStreet()}
      {parkingDetails()}
      {publicTransit()}
      {paymentOptions()}
      {executiveChef()}
      {additional()}
    </aside>
  );
}
export default withRouter(RestaurantSidebar);
