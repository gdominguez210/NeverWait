import React from "react";
import { Link, NavLink } from "react-router-dom";
class RestaurantQuickLinks extends React.Component {
  constructor(props) {
    super(props);
    this.reviews = React.createRef();
  }

  render() {
    return (
      <ul class="restaurant-quick-links">
        <li>
          <NavLink activeClassName="active" to="#overview">
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="#photos">
            Photos
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="#menu">
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="active" to="#reviews">
            Reviews
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default RestaurantQuickLinks;
