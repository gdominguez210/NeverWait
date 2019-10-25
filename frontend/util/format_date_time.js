export const parseDate = date => {
  const parts = String(date).split(" ");
  const months = {
    Jan: "January",
    Feb: "February",
    Mar: "March",
    Apr: "April",
    May: "May",
    Jun: "June",
    Jul: "July",
    Aug: "August",
    Sep: "September",
    Oct: "October",
    Nov: "November",
    Dec: "December"
  };

  const month = months[parts[1]];
  const day = parts[2];
  const year = parts[3];

  return `${month} ${day}, ${year}`;
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
