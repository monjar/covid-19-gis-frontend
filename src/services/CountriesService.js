import axios from "axios";
import { cleanCountriesData } from "../utils/DataHandler.js";
const apiURL = "http://covid19api.xapix.io/v2/locationss";

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
