const addDuplicatedCountry = (cleanOBJ, item) => {
  cleanOBJ[item.country].confirmed += item.latest.confirmed;
  cleanOBJ[item.country].deaths += item.latest.deaths;
  cleanOBJ[item.country].recovered += item.latest.recovered;
};

const addNewCountry = (cleanOBJ, item) => {
  const population = item.country_population
    ? item.country_population
    : "Unknown";
  cleanOBJ[item.country] = {
    population: population,
    confirmed: item.latest.confirmed,
    deaths: item.latest.deaths,
    recovered: item.latest.recovered,
  };
};

const cleanCountryItem = (cleanOBJ) => {
  return (item, index) =>
    cleanOBJ[item.country]
      ? addDuplicatedCountry(cleanOBJ, item)
      : addNewCountry(cleanOBJ, item);
};

export const cleanCountriesData = (data) => {
  let cleanedData = {};
  data.forEach(cleanCountryItem(cleanedData));
  return cleanedData;
};
