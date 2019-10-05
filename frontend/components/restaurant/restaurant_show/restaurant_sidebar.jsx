import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RestaurantSidebar = props => {
  let { restaurant } = props;
  // const parameters = restaurant.parameters || {};
  debugger;
  return (
    <>
      <aside className="restaurant-sidebar">
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="phone" />
          </div>
          <div class="sidebar-item-content">
            <p className="sidebar-item-label">Phone</p>
            <p>{restaurant.phone}</p>
          </div>
        </div>
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="globe" />
          </div>
          <div class="sidebar-item-content">
            <p className="sidebar-item-label">Website</p>
            <p>{restaurant.website}</p>
          </div>
        </div>
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="city" />
          </div>
          <div class="sidebar-item-content">
            <p className="sidebar-item-label">Neighborhood</p>
            <p>{restaurant.neighborhood}</p>
          </div>
        </div>
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="clock" />
          </div>
          <div class="sidebar-item-content">
            <p className="sidebar-item-label">Hours of Operation</p>
            <p>{restaurant.hours_of_operation}</p>
          </div>
        </div>
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="glass-cheers" />
          </div>
          <div class="sidebar-item-content">
            <p className="sidebar-item-label"> Cuisines</p>
            <p>{restaurant.cuisines}</p>
          </div>
        </div>
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="concierge-bell" />
          </div>
          <div class="sidebar-item-content">
            <p className="sidebar-item-label"> Dining Style</p>
            <p>{restaurant.dining_style}</p>
          </div>
        </div>
        <div className="sidebar-item">
          <div className="sidebar-item-icon">
            <FontAwesomeIcon icon="tshirt" />
          </div>
          <div class="sidebar-item-content">
            <p className="sidebar-item-label"> Dress Code</p>
            <p>{restaurant.dress_code}</p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default RestaurantSidebar;
