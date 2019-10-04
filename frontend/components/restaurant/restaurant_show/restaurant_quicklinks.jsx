import React from 'react'
import { Link, NavLink } from 'react-router-dom'
const RestaurantQuickLinks = (props) => {
    return (
        <ul class="restaurant-quick-links">
            <li><NavLink activeClassName="active" to='#overview'>
                Overview
            </NavLink></li>
            <li><NavLink activeClassName="active" to='#photos'>
                Photos
            </NavLink></li>
            <li><NavLink activeClassName="active" to='#menu'>
                Menu
            </NavLink></li>
            <li><NavLink activeClassName="active" to='#reviews'>
                Reviews
            </NavLink></li >
        </ul>
    )
}

export default RestaurantQuickLinks;