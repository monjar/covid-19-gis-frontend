import axios from "axios";
const apiURL = process.env.API_URL;
const getCountriesList = (passDataToView, passErrorView) => {
  axios
    .get(apiURL)
    .then((res) => {
      passDataToView(res.data);
    })
    .catch((err) => {
      passErrorView();
    });
};

export default getCountriesList;
