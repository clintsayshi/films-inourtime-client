const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getTrailer = (videos) => {
  try {
    const trailer = videos.find(
      (x) => x.official === true && x.type.toLowerCase() === "trailer"
    );
    return trailer.key;
  } catch {
    return null;
  }
};

export const getDate = (date) => {
  const year = new Date(date).getFullYear();
  const day = date.substring(8);
  const month = monthNames[new Date(date).getMonth()];

  return `${day} ${month} ${year}`;
};
