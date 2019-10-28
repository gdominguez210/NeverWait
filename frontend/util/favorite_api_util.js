export const createFavorite = favorite =>
  $.ajax({
    method: "POST",
    url: `api/favorites`,
    data: { favorite }
  });

export const deleteFavorite = favoriteId =>
  $.ajax({
    method: "DELETE",
    url: `api/favorites/${favoriteId}`
  });

export const fetchFavorites = userId =>
  $.ajax({
    method: "GET",
    url: `api/users/${userId}/favorites`
  });
