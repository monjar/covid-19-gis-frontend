import axios from "axios";
import { cleanCountriesData } from "../utils/DataHandler.js";
const apiURL = process.env.API_URL;

const getCountriesList = (passDataToView, passErrorView) => {
  axios
    .get(apiURL)
    .then((res) => {
      let data = res.data.locations;
      data = cleanCountriesData(data);
      passDataToView(data);
    })
    .catch((err) => {
      console.error(err);
      passErrorView();
    });
};

export default getCountriesList;
