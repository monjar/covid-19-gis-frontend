import axios from "axios";
const apiURL = process.env.API_URL;
const getCountriesList = (passDataToView) => {
  axios
    .get(apiURL)
    .then((res) => {
      passDataToView(res.data);
    })
    .catch((err) => {
      console.log(JSON.stringify(err));
    });
};

export default getCountriesList;
