export const fetchRestaurants = () => {
    debugger
    return $.ajax({
        method: 'GET',
        url: '/api/restaurants',
    })
};

export const fetchRestaurant = id => (
    $.ajax({
        method: 'GET',
        url: `/api/restaurants/${id}`
    })
)

export const createRestaurant = restaurant => (
    $.ajax({
        method: 'POST',
        url: `/api/restaurants/`,
        data: {restaurant}
    })
)

export const updateRestaurant = restaurant => (
    $.ajax({
        method: 'PATCH',
        url: `/api/restaurants/${restaurant.id}`,
        data: {restaurant}
    })
)

export const deleteRestaurant = restaurantId => (
    $.ajax({
        method: 'DELETE',
        url: `/api/restaurants/${restaurantId}`
    })
)