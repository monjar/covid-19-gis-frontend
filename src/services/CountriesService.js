import axios from "axios";
const apiURL = process.env.API_URL;
const getCountriesList = (passDataToView, passErrorView) => {
  axios
    .get(apiURL)
    .then((res) => {
      const data = res.data.locations;
      let cleanedData = {};
      data.forEach((item, index) => {
        if (cleanedData[item.country]) {
          cleanedData[item.country].confirmed += item.latest.confirmed;
          cleanedData[item.country].deaths += item.latest.deaths;
          cleanedData[item.country].recovered += item.latest.recovered;
        } else {
          cleanedData[item.country] = {
            population: item.country_population,
            confirmed: item.latest.confirmed,
            deaths: item.latest.deaths,
            recovered: item.latest.recovered,
          };
        }
      });
      passDataToView(cleanedData);
    })
    .catch((err) => {
      passErrorView();
    });
};

export default getCountriesList;
