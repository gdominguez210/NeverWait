import React from 'react'

const RestaurantBanner = (props) => {
    const { restaurant } = props;
    debugger
    const banner = {
        backgroundImage:`url(${props.restaurant.image_url})`
    }

    return (
        <>
        <section className="restaurant-featured-image">
                <div className="featured-img" style={banner}>
                </div>
        </section>
        </>
    )
}

export default RestaurantBanner;