let queryString = "?";
for (let key in obj) {
  let query = `${key}=${obj[key]}&`;
  queryString += query;
}
