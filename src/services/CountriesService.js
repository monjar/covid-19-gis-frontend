import axios from "axios";
import { cleanCountriesData } from "../utils/DataHandler.js";
import getLogger from "../config/logger-config.js";
const logger = getLogger("errors");
const apiURL = "http://covid19api.xapix.io/v2/locations";

const getCountriesList = (passDataToView, passErrorView) => {
  axios
    .get(apiURL)
    .then((res) => {
      let data = res.data.locations;
      data = cleanCountriesData(data);
      passDataToView(data);
    })
    .catch((err) => {
      logger.error(
        `API call to ${apiURL} caused error "${JSON.stringify(err)}`
      );
      passErrorView();
    });
};

export default getCountriesList;
