export const fetchRestaurants = () => {
  return $.ajax({
    method: "GET",
    url: "/api/restaurants"
  });
};

export const fetchFeaturedRestaurants = () => {
  return $.ajax({
    method: "GET",
    url: "/api/featured-restaurants"
  });
};

export const fetchRestaurant = id =>
  $.ajax({
    method: "GET",
    url: `/api/restaurants/${id}`
  });

export const createRestaurant = restaurant =>
  $.ajax({
    method: "POST",
    url: `/api/restaurants/`,
    data: { restaurant }
  });

export const updateRestaurant = restaurant =>
  $.ajax({
    method: "PATCH",
    url: `/api/restaurants/${restaurant.id}`,
    data: { restaurant }
  });

export const deleteRestaurant = restaurantId =>
  $.ajax({
    method: "DELETE",
    url: `/api/restaurants/${restaurantId}`
  });

export const fetchSearchedRestaurants = data =>
  $.ajax({
    method: "GET",
    url: `api/search/restaurants`,
    data: { query: data.query, res: data.res }
  });
