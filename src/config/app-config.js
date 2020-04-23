import countriesController from "../controllers/CountriesController.js";
const configApp = (app) => {
  app.set("view engine", "ejs");
  app.use("/", countriesController);
};

export default configApp;
