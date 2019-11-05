export const search = data =>
  $.ajax({
    method: "GET",
    url: `api/search/`,
    data: { query: data.query, res: data.res }
  });
