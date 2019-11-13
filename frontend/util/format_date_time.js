export const parseDate = date => {
  const parts = date.split("/");
  debugger;
  const months = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  };

  const month = months[parts[0]];
  const day = parts[1];
  const year = parts[2];

  return `${month} ${day}, 20${year}`;
};

export const dateAbvToInt = date => {
  const map = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12
  };

  return map[date];
};
