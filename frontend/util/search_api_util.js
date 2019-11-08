export const search = data =>
  $.ajax({
    method: "GET",
    url: `api/search/`,
    data: { query: data.query, res: data.res }
  });

export const autocomplete = data =>
  $.ajax({
    method: "GET",
    url: `api/autocomplete/`,
    data: { autocomplete: data.autocomplete }
  });
