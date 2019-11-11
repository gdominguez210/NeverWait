export const login = user =>
  $.ajax({
    method: "POST",
    url: "/api/session",
    data: { user }
  });

export const showUser = id =>
  $.ajax({
    method: "GET",
    url: `api/users/${id}`
  });
export const signup = user =>
  $.ajax({
    method: "POST",
    url: "/api/users",
    data: { user }
  });

export const logout = () =>
  $.ajax({
    method: "DELETE",
    url: "/api/session"
  });
