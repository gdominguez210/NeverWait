import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const RestaurantSidebar = (props) => {
    let { restaurant } = props;
    debugger
    return (
        <>
            <aside className="restaurant-sidebar">
                <div className="sidebar-item">
                    <div className="sidebar-item-icon">
                    {/* <i className="fas fa-phone"></i> */}
                    <FontAwesomeIcon icon="phone" />
                    </div>
                    <div class="sidebar-item-content">
                        <p className="sidebar-item-label">Phone</p>
                        <p>{restaurant.phone}</p>
                    </div>
                </div>
                <div className="sidebar-item">
                    {/* <i className="fas fa-globe"></i> */}
                    <div className="sidebar-item-icon">
                    <FontAwesomeIcon icon="globe" />
                    </div>
                    <div class="sidebar-item-content">
                        <p className="sidebar-item-label">Website</p>
                        <p>{restaurant.website}</p>
                    </div>
                </div>
                <div className="sidebar-item">
                    {/* <i className="fas fa-city"></i>  */}
                    <div className="sidebar-item-icon">
                    <FontAwesomeIcon icon="city" />
                    </div>
                    <div class="sidebar-item-content">
                    <p className="sidebar-item-label">Neighborhood</p>
                    <p>{restaurant.parameters.neighborhood}</p>
                    </div>
                 </div>
                <div className="sidebar-item">
                    {/* <i className="far fa-clock"></i>  */}
                    <div className="sidebar-item-icon">
                    <FontAwesomeIcon icon="clock" />
                    </div>
                    <div class="sidebar-item-content">
                    <p className="sidebar-item-label">Hours of Operation</p>
                <p>{restaurant.parameters.hours_of_operation}</p>
                </div>
                </div>
                <div className="sidebar-item">
                    {/* <i className="fas fa-glass-cheers"></i> */}
                    <div className="sidebar-item-icon">
                    <FontAwesomeIcon icon="glass-cheers" />
                    </div>
                <div class="sidebar-item-content">
                    <p className="sidebar-item-label"> Cuisines</p>
                <p>{restaurant.parameters.cuisines}</p>
                </div>
                 </div >
                <div className="sidebar-item">
                    {/* <i className="fas fa-concierge-bell"></i> */}
                    <div className="sidebar-item-icon">
                    <FontAwesomeIcon icon="concierge-bell" />
                    </div>
                    <div class="sidebar-item-content">
                    <p className="sidebar-item-label"> Dining Style</p>
                <p>{restaurant.parameters.dining_style}</p>
                </div>
                </div>
                <div className="sidebar-item">
                    {/* <i className="fas fa-tshirt"></i> */}
                    <div className="sidebar-item-icon">
                    <FontAwesomeIcon icon="tshirt" />
                    </div>
                    <div class="sidebar-item-content">
                    <p className="sidebar-item-label"> Dress Code</p>
                <p>{restaurant.parameters.dress_code}</p>
                </div>
                </div>
            </aside>
        </>
    )
}

export default RestaurantSidebar;