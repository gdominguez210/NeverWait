import React from 'react'

const RestaurantMain = (props) => {
    const { restaurant } = props;
    return (
        <>
            <section class="restaurant-content">
                <h1>{restaurant.name}</h1>
                <p>{restaurant.description}</p>
            </section>
        </>
    )
}

export default RestaurantMain;